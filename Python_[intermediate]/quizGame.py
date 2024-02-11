import time

def quizGame():
    """func that runs the quiz game
    """
    score = 0
    answer = input("What is 2 + 2? ")
    if answer == "4":
        print("Correct!")
        score += 1
    else:
        print("Incorrect!")

    answer = input("What is 3 + 3? ")
    if answer == "6":
        print("Correct!")
        score += 1
    else:
        print("Incorrect!")

    answer = input("What is 4 + 4? ")
    if answer == "8":
        print("Correct!")
        score += 1
    else:
        print("Incorrect!")

    print(f"You got {score} answers correct, a rate of {score/3*100}%")
    time.sleep(3)

# user inputing start here
print("Welcome to my computer quiz!")
playing = input("Would you like to play? (y/n): ")

if playing != "y":
    print("Okay, bye!")
    quit()
else:
    print("Great! Let's get started!")
    quizGame()
