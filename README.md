# Tic Tac Toe

## Summary of project

This is a tic tac toe game with a Mario theme!
You can [click here](https://andrealazari.github.io/tic-tac-toe/) to play it!
Have fun :)

## Flow Chart

![flowchart](./images/Tic%20Tac%20Toe.png)

## Plan for solving the problem

1. Define all initial variables (DOM Objects, counters)
2. The game start with a pop-up `div` in the scree, where player can choose which character will be player 1. This is done with an If Statement that will check the input selected
3. Each player will have a turn. There is a function to check if the counter is odd content will be 'X', otherwise content will be 'O'
4. You can win in 8 different ways: 3 columns, 3 rows, 2 diagonals. This function will add specific classes to each clicked box
5. After a win, there is a function to unable players to keep clicking, and a message shows in the screen indicating the winner.
6. Check if the game is draw when no one win in the 9th turn
7. Keep the scores of both players with an individual counter
8. To reset the board, there is a function that removes classes for the 9 boxes, this way the players can keep playing, and score will not be deleted
9. Function to start a new game will set all the variables and classes to its inital values. After this, the option to choose a player shows in the screen again
10. Responsive CSS to mobile

## Cool tech used

- Javascript
- HTML
- CSS

## Lessons Learned

- Solving the problem with basic logic bedore trying to make it clean code!
- New CSS properties
- Adding sounds in JS
