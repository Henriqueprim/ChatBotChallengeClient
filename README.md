# Loan ChatBot Challenge 
## About

This is the front-end part of a Full Stack application developed during a technical test for a Full Stack role in Lexart Labs. 

The challenge was creating a chatbot with the following features:
- Interpret some greeting terms and initiate a conversation with the user;
- Require a 'username' and a 'password' to continue the conversation;
- Upon encountering the term "loan" display three options in the conversation:
    - "Do you want to apply for a loan?"
    - "Loan conditions"
    - "Help"
- These loan options should, when clicked, display relevant information about the topic with a link for reference;
- Interpret some "goodbye" terms and finish the conversation storing it in the database;
- Create a page to display the user conversations history ordering them by date and exporting in a CSV file.

In the end I was asked to create this public repository and deploy the full project in a free hosting environment.

The result final result you can visit [here](https://chat-bot-challenge-client-side.vercel.app).

And [here](https://github.com/Henriqueprim/ChatBotChallengeAPI) you can find the back-end repository.

---
## Technologies used

- Vite
- React
- Vanilla Javascript
- React DOM
- React Router DOM
- Axios

---
## Future improvements and corrections

Due to the limited duration of the challenge there were some tasks I had to prioritize over others while developing, so these are some of the things that I would like to improve or correct in the project:

* [ ] Style the application;
    * Use frameworks like Tailwind or Bootstrap to style the application for a better user experience.
* [ ] Fix the loan options display;
    * Display the options inside the 'loan' message and when clicked display another message with relevant data from the link instead of opening it.
* [ ] Variables and functions names;
    * Review the variables and functions names making sure they are simple to understand, tell what they do and are not repeating.
* [ ] Function complexity;
    * Make sure the functions are not more complex than they need to be by trying to find more simple and safer solutions.
* [ ] Good practices;
    * Review good practices of development in React and apply them where I didn't.
