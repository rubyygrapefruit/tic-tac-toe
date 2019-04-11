# ruby-tic-tac-toe

Video Demo: https://youtu.be/grqAKn8t6CE

## Available Scripts 
In the project directory, you can run:

```
npm start
```
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

## Requirements 
✅ The game should have some kind of interface for user(s) to interact. (e.g. in the browser or on the command line)

✅ It should enforce the basic rules and determine the end result of a game.

✅ The user should be able to start the game

✅ The user should be able to take alternate turns to play the game

✅ The logic should be able to evaluate the winner

✅ The user should be able to stop an ongoing game at any point

✅ There should be proper messaging when the game changes the state

## Steps I chose while completing this project 
1. First I made a button (New Game) that will allow user to start a new game. Board will appear after clicking on the button. This button is also used when you want to restart the game - clears board whenever it is pressed.
2. Next I wanted to make sure that I can click on the square I want and mark it with an 'X' or 'O'. This is done by creating a board that keeps track of the index of each square. This way, it is easy to know which square the user is clicking on as well as it will come in handy when making the list of 'winner' possibilites. 
2a. I wanted to make the board dyanamic just so that it can be expanded into a square larger than 3 if someone wanted to instead of having it fixed.
3. After making sure that I can click on a square and it will alternate X's and O's, I implemented a function so the game can determine if there is a winner. 
3a. The function has a list of all the possibilites of how a user can win (rows, columns, diagonals). 
3b. To determine when there is a draw, I kept track of the number of times a user has clicked on the board. If there is no winner AND the number of clicks is equal to 9 (meaning that the board is full), then these are the conditions in which there is a draw. 
3c. If there is no winner and no draw, then the user will continue playing so. 
3d. I made a ```checkStatus()``` function so that it will run after each ```handleClick()``` so that it will check for whether there is a winner, draw, or to continue playing.
4. I made sure that when there is a winner/draw, the board will stop the player from clicking further.  
5. Lastly I made CSS changes to the board, new Game button, square and status. 
5a. For better user experience: I wanted to make the colors for X's and O's are different so that visually it is easier for the user to see who's turn it is. I made a hover effect on the boxes so the user can know which button they are about to press. 

Thank you for running through my project :) 

