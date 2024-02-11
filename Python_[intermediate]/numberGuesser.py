import random
import time

def guessingGame():
    """func that runs the number guessing game
    """
    guesses = 0
    randNum = random.randint(1, 100)
    print("Welcome to the number guessing game!")
    print("I'm thinking of a number between 1 and 100.")
    print("You have 6 guesses to get it right!")

    while guesses < 6:
        guess = int(input("Now, what is your guess? "))
        if guess == randNum:
            print("Correct!")
            print(f"You got it in {guesses} guesses!")
            time.sleep(3)
            quit()
        else:
            if guess < randNum:
                print("Too low!")
            else:
                print("Too high!")
            guesses += 1

    print("You ran out of guesses! Goodbye!")
    time.sleep(3)
    quit()

playing = input("Would you like to play the Number Guessing Game? (y/n): ")
if playing!= "y":
    print("Okay, bye!")
    quit()
else:
    guessingGame()
