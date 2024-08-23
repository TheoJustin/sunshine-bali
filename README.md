# ☀️ Sunshine: A SocialFi and Crowdfunding Platform

[![Mainnet](https://img.shields.io/badge/Deployed%20on-Mainnet-brightgreen)](https://gtbsm-faaaa-aaaak-ak2yq-cai.icp0.io/)
[![Repo](https://img.shields.io/badge/Repo-Link-blue)](https://github.com/TheoJustin/sunshine-bali)

Sunshine is a SocialFi and Crowdfunding platform that revolutionizes how projects are funded and managed on the blockchain. Our platform offers seamless project prototype submission while integrating AI-driven sentiment analysis (NLP) to monitor and evaluate community feedback. By detecting negative comments, such as those related to disturbing content or potential scams, Sunshine automatically manages these flagged posts through a DAO system, ensuring that only trustworthy projects are promoted. Once a project is validated and stored in our dApp, users can crowdfund it, driving innovation and growth in the Web3 space.

## 🛠 Track

**Fully On-Chain dApps**

## 👥 Team Participants

- **@TheoJustin**
- **@josetano2**
- **@wantouw**
  
Discord Handles:
- **@tj_7**
- **@hazui**
- **@ryanui**

## 🌐 Mainnet Canister

[Visit the Mainnet Deployment](https://gtbsm-faaaa-aaaak-ak2yq-cai.icp0.io/)

## 🪙 OISY Wallet Principal

`k5dqk-jsgzj-tix5s-ik7kz-fhya7-nrrpa-ygsky-mndrl-mteyh-7zbcr-rqe`

## 🖥️ Run Locally

If you prefer to run the project locally instead of visiting the mainnet, follow these instructions:

1. **Update DFX**
    ```bash
    dfxvm update
    ```

2. **Start the DFX network**
    ```bash
    dfx start --clean --background
    ```

3. **Deploy the project locally**
    ```bash
    dfx deploy
    ```

4. **Install dependencies**
    ```bash
    npm i
    ```

5. **Start the frontend**
    ```bash
    npm start
    ```

6. **Set up the Python environment for NLP and Flask**
    ```bash
    sudo apt install python3-pip
    pip install Flask nltk
    python3 nlp.py
    python3 -c "import nltk; nltk.download('stopwords')"
    python3 -c "import nltk; nltk.download('punkt_tab')"
    python3 -c "import nltk; nltk.download('wordnet ')"
    pip install flask-cors
    python3 app.py
    ```

7. **Quick setup with one command**
    ```bash
    pip install Flask nltk;python3 -c "import nltk; nltk.download('stopwords')";python3 -c "import nltk; nltk.download('punkt_tab')";python3 -c "import nltk; nltk.download('wordnet ')";pip install flask-cors;
    ```

## 📚 What We Learned

Throughout this project, we explored a multitude of features available on the Internet Computer, including timers, Internet Identity, and DAO tools, all of which we successfully integrated into Sunshine. Additionally, we learned how to incorporate AI capabilities through HTTP requests, enabling NLP and sentiment analysis to classify comments on our dApp.

## ⚠️ Challenges

Developing Sunshine was a complex endeavor that presented several challenges. We often faced time constraints, which led to frequent merge conflicts that were difficult to resolve. Despite encountering numerous errors and bugs, particularly with Motoko and other aspects of the dApp, we persevered, learned extensively, and ultimately enjoyed the process.

## 🎉 What We Are Proud Of

We take immense pride in the successful completion of Sunshine. All features were built to meet our expectations, and deploying the dApp to the mainnet marks a significant achievement. We are excited to see the impact Sunshine will have on the community, empowering project developers, Web3 builders, investors, and the broader Web3 ecosystem.
