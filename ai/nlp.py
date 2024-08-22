from nltk.classify import NaiveBayesClassifier, accuracy
from nltk import FreqDist
from nltk.tokenize import word_tokenize
import pickle
import os
from nltk.corpus import stopwords
from nltk.corpus import wordnet
import string
from nltk.stem import PorterStemmer
from nltk import FreqDist
stemmer = PorterStemmer()
from nltk.stem import WordNetLemmatizer
from nltk.tag import pos_tag
wnl = WordNetLemmatizer()
eng_stopwords = stopwords.words('english')


def train():
    data = open('dataset.csv', "r", encoding='utf-8').read()
    i=0
    word_features = []
    documents = []
    
    for i, sentence in enumerate(data.split('\n')):
        # skip header file
        if(i == 0) :
            continue
        # memasukkan setiap kata ke word feature tapi dipreprocess terlebih dahulu
        words = word_tokenize(sentence)
        for word in words[:len(sentence)-1]:
            if word not in eng_stopwords and word not in string.punctuation:
                word_features.append(stemmer.stem(wnl.lemmatize(word)))
        
        # memasukkan data dari document, dengan hasil suggestion sesuai data
        if(words[len(words) - 1] == "negative"):
            documents.append((" ".join(words[:len(words)-1]), "Negative"))
        else:
            documents.append((" ".join(words[:len(words)-1]), "Positive"))
    word_features = FreqDist(word_features)
    featuresets = []
    for sentence, label in documents:
        features = {}
        # preprocess kalimatnya, agar sesuai dengan yang ada di word_features
        clean = [word for word in word_tokenize(sentence) if word not in string.punctuation and word not in eng_stopwords]
        clean = [wnl.lemmatize(stemmer.stem(word)) for word in clean]
        # words = word_tokenize(sentence)
        for word in word_features:
            features[word] = (word in clean)
        featuresets.append((features, label))
    import random
    random.shuffle(featuresets)

    # buat train 90% datanya
    train_count = int(len(featuresets)*0.9)
    train_data = featuresets[:train_count]
    test_data = featuresets[train_count:]

    # Training
    # Menghasilkan model
    from nltk.classify import NaiveBayesClassifier, accuracy
    classifier = NaiveBayesClassifier.train(train_data)

    # Menampilkan data paling informatif
    classifier.show_most_informative_features(n = 7)
    print("Accuracy : %.2f" %(accuracy(classifier, test_data)*100))
    print("Model Training Complete")
    import pickle
    file = open('model.pickle', "wb")
    pickle.dump(classifier, file)
    file.close()
    
    return classifier


def readModel():
    try:
        file = open("model.pickle", "rb")
        classifier = pickle.load(file)
        file.close()
        print("Load Model Complete..")
        classifier.show_most_informative_features(n = 7)
    except:
        print("Failed to load data")
        print("Preparing for training")
        classifier = train()
    getchar()
    return classifier

def writeTweet():
    while True:
        tweet = input("Input your tweet [>= 2 words] : ")
        if tweet.find(' ') != -1:
            print("Tweet added!")
            getchar()
            return tweet
        print("Your tweet must consist of at least 2 words!")

def getchar():
    print("Press enter to continue..", end="")
    input()

def analyseTweet(tweet):
    if(len(tweet) == 0):
        print("Write your tweet first!")
        getchar()
        return
    words = word_tokenize(tweet)
    for i in range(len(words)):
        words[i] = words[i].lower()
    word_only = FreqDist([word for word in words if word.isalpha() and word not in string.punctuation])
    tagged = pos_tag(word_only)
    print("Tweet Part Of Speech Tag :")
    for i, word in enumerate(tagged):
        print("%d. %s : %s" %(i+1, word[0], word[1]))
    print()
    for word in word_only:
        print("========================")
        print("Word : %s" %(word))
        print("------------------------")
        synsets = wordnet.synsets(word)
        synonyms = []
        antonyms = []
        for synset in synsets:
            for lemma in synset.lemmas():
                synonyms.append(lemma.name())
                for antonym in lemma.antonyms():
                    antonyms.append(antonym.name())
        print("Synonyms :")
        if(len(synonyms) == 0):
            print("No synonyms available")
        else:
            print(", ".join(FreqDist(synonyms[:5])))
        print('')
        print("Antonyms :")
        if(len(antonyms) == 0):
            print("No antonyms available")
        else:
            print(", ".join(FreqDist(antonyms[:5])))
        print("========================", end='\n\n\n')
    clean = [word for word in word_tokenize(tweet) if word not in string.punctuation and word not in eng_stopwords]
    clean = [wnl.lemmatize(stemmer.stem(word)) for word in clean]
    result = classifier.classify(FreqDist(clean))
    print("Your Tweet : %s" %(tweet))
    print("Tweet Category : %s" %(result))
    getchar()


if __name__ == "__main__":
    classifier = readModel()
    tweet = ""
    
    while True:
        # os.system("cls")

        print("Your Tweet :", "No Tweet" if len(tweet) == 0  else tweet)
        print("Tweets Sentiment Analysis")
        print("1. Write your tweet")
        print("2. Analyse your tweet")
        print("3. Exit")
        choice = input('>> ')
        if choice == "1":
            # os.system("cls")
            tweet = writeTweet()
        elif choice == "2":
            # os.system("cls")
            analyseTweet(tweet)
        elif choice == "3":
            print("Bye bye...")
            break