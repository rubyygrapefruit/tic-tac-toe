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
3. 

