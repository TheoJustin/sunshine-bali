from flask import Flask, request, jsonify
from flask_cors import CORS
from nltk.classify import NaiveBayesClassifier
from nltk.tokenize import word_tokenize
from nltk import FreqDist
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import pickle
import string

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize required components
stemmer = PorterStemmer()
wnl = WordNetLemmatizer()
eng_stopwords = stopwords.words('english')

# Load the pre-trained model
def load_model():
    with open("model.pickle", "rb") as model_file:
        model = pickle.load(model_file)
    return model

classifier = load_model()

def preprocess_text(text):
    tokens = word_tokenize(text)
    clean = [
        wnl.lemmatize(stemmer.stem(word.lower()))
        for word in tokens
        if word not in string.punctuation and word not in eng_stopwords
    ]
    return FreqDist(clean)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    comment = data.get('comment', '')
    if not comment:
        return jsonify({'error': 'Comment is required'}), 400

    features = preprocess_text(comment)
    result = classifier.classify(features)
    
    return jsonify({'comment': comment, 'classification': result})

if __name__ == '__main__':
    app.run(debug=True)
