# The Ultimate Typing Test
The Ultimate Typing Test is a full stack single page app that allows users to test their typing abilities and compete for the top score. Once a user has logged in, he or she is able to begin typing into the text field, which triggers the start of the game. Text scrolls across the screen as the user makes progress; if the user speeds up, the scrolling will speed up, but if the user slows down, the scrolling will also slow down. If the user types a letter correctly, the corresponding letter in the scrolling passage turns green, but if the user types the letter incorrectly, the corresponding letter in the scrolling passage will turn red. The game lasts 30 seconds, and once it is over, the user is given their accuracy, speed (in words per minute), and score. If the user’s score is in the top 10 of all users’ scores, their name and score will appear on the leaderboard.

**See demo video [here.](https://www.youtube.com/watch?v=0Ri6qr3tLXc&feature=youtu.be)**

## Getting Started
To install The Ultimate Typing Test, first fork and clone the backend repo at [this link.](https://github.com/ensallee/typing-game-backend) Next, run `bundle install`, followed by `rails db:create && rails db:migrate`. Then, run `rails s`, which will launch the API on a local server.

Once you have the backend running, fork and clone the frontend, which is in this repo. Then, open index.html in the browser. You will need to “log in” in order to play the game. Feel free to use the name "guest".

## Built With
Javascript  
Ruby on Rails  
PostgreSQL  
Bootstrap  
CSS

## Authors
Derek Chen  
Jeffrey Hwang  
Betsy Sallee

## Acknowledgements
We would like to thank Jonathan Mines and Jason Decker for their help and support.
