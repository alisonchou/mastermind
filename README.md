# Master Mastermind

The mastermind game, brought to your browser by
[Master Mastermind](https://mastermastermind.herokuapp.com/)!
Gone are the days of waiting for the other player
to place pegs. Now, you can code-break all on your
own, and our magic will intelligently generate
codes, clues, and hints. 🤯

## How to play 🖱️

Go to
[mastermastermind.herokuapp.com](https://mastermastermind.herokuapp.com/).

Enter four numbers in the box to guess.
To the right, you can see on the number
of guesses that remain before you lose.

A black dot means that a correct number is in
a **correct** spot. A white dot means that a correct
number is in the an **incorrect** spot.

![Guess History](/screenshots/GuessHistory.PNG 'Guess History')

After guessing six times, you can reveal a hint.
That's right; we want to help you win!

![Hint](/screenshots/Hint.PNG 'Hint')

Keep an eye on how much time you've spent
playing. We record your fastest win time.

![Timer](/screenshots/Timer.PNG 'Timer')

At any time, you can start a new game.
The code consists of digits `0-6` in easy
mode and `0-7` in normal mode.

![Start New Game](/screenshots/StartNewGame.PNG 'Start New Game')

## Behind the "magic" 🧐

I built Master Mastermind with React.
I chose React for its out-of-the-box
immediate data updates, which were
vital to the game.

Because there were many variables
that needed to be accessed across
the project, I centralized state
with `Redux`. Following game events
(such as winning a game or adding
a guess), I dispatched actions that
updated the store. This added simplicity
and maintainability.

To create the combination, I called the
[Random.org Integer API](https://www.random.org/integers/).
I passed `0` as the min and `6` or `7` as
the max based on the game mode.

For accuracy, I implemented the timer
with the `Date` object instead of
incrementing my own count. When a
game began, I recorded the start
time. Every second, I updated the
time elapsed by subtracting the
start time from the current time.

Once the user finished or exited the
game, I stopped the time. If the user
won, I checked if their time was faster
than their previous "Best Time" and
updated the record accordingly.

I styled Master Mastermind by using
`styled-components` to add a theme
and add CSS to each component.

### Clues

After each guess, I calculated the correct
numbers (in incorrect location) and correct
placements (correct numbers in correct location)
to show as feedback.

First, I iterated through the guess and
combination arrays. If the values at an
index were the same, I incremented the
count of correct placements. I removed
the value from both arrays so that this
value would not also be counted as a
correct number.

Next, I iterated through the guess array.
If a value in the guess was also in the
combination, I incremented the count of
correct numbers. I removed the item
from the combination array to prevent
double counting.

### Hints

To generate hints like `3 is not in the code`,
I converted the combination and
latest guess into arrays and sets.
Then, I extracted the numbers from the guess
that were not in the combination.

If all the numbers in the guess were
not in the combination, or the combination
had more unique numbers than the guess,
I created an array of the numbers
not in the guess or combination. I
selected a random number from this
array.

If some but not all numbers in the guess
were not in the combination, I selected
a random number from the previously
calculated array of numbers in the guess
but not the combination.

Then, I informed the player that the
selected number was not in the code.

If the guess consisted of correct
but misplaced numbers, I compared
the guess and combo arrays to create
an array of incorrect positions.
If all the positions were incorrect,
the hint was a correct position.
Otherwise, I displayed an incorrect
position.

## You're a wizard, too! ⚡

Want to run Master Mastermind locally?

Just run the following commands:

```
> git clone https://github.com/alisonchou/mastermind.git
> cd mastermind
> npm install
> npm start
```

Once you've configured the project,
you can run tests with the command
`npm test` or run the linter with
`npm run lint`.
