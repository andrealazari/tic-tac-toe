# Tic Tac Toe

## Summary of project

This is a basic tic tac toe game!
[Play here](https://andrealazari.github.io/tic-tac-toe/)

## Plan for solving the problem

### Creating clickable boxes

1. Create 9 `<div>` that will represent each box of the game
2. Add content through an addEventListener function to check functionality
3. Use event.target to target the individual box clicked to add some content
4. Check if the box was already clicked or not, adding a class when is clicked
5. CSS Grid to create 3 columns

### Adding second player

1. At each click change the content that it prints on the screen
2. Add a counter to count each click.
3. Check if the click is odd or even, if odd content will be 'X', otherwise content will be 'O'

### Check if 3 are the same

1. You can win in 8 different ways: 3 columns, 3 rows, 2 diagonals
2. Write down all 8 combinations
3. Add specific classes for each of the 8 ways
4. Count the classes and the one that gets to 3 first win!

## Cool tech used

- Javascript
- HTML
- CSS

## Lessons Learned

- Solving the problem with basic logic bedore trying to make it clean code!
- New CSS properties
- Adding sounds in JS
