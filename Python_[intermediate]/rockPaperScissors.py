import random
import time

userWins = 0
computerWins = 0

options = ["rock", "paper", "scissors"]

while True:
    userChoice = input("Rock, Paper, or Scissors? or QUIT? ").lower()
    computerChoice = random.choice(["Rock", "Paper", "Scissors"])

    if userChoice == 'quit':
        break

    if userChoice not in ["rock", "paper", "scissors"]:
        continue

    randNum = random.randint(0, 2)
    # 0=rock, 1=paper, 2=scissors
    computerChoice = options[randNum]
    print(f"Computer picked: {computerChoice}")

    if userChoice == "rock" and computerChoice == "scissors":
        print("You won!")
        userWins += 1
    elif userChoice == "paper" and computerChoice == "rock":
        print("You won!")
        userWins += 1
    elif userChoice == "scissors" and computerChoice == "paper":
        print("You won!")
        userWins += 1

    else:
        print("You lost!")
        computerWins += 1

print(f"You won {userWins} times and I won {computerWins} times.")
print("Goodbye!")
time.sleep(3)
