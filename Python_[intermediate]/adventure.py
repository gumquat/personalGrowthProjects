import time

def adventure():
    """runs the adventure
    """
    name = input("type your name: ")
    print(f"Welcome to my realm, {name}.")
    time.sleep(2)
    print("You awake in a grove of willows. There is a trodden path on your left and right.")
    answer = input("Do you go Left or Right?: ").lower()

    if answer == "left":
        print("You travel through the woods for some time, and find a river.")
        time.sleep(2)
        print("It babbles quietly, and you hear a whisper carry over from the other side.")
        answer = input("Do you Travel along the side of the river, or Wade through it? ").lower()

        if answer == "travel":
            print("The whisper follows you down the riverside, and you find a bridge.")
            time.sleep(2)
            print("While crossing the bridge the whispers grow loud. A woman appears.")
            time.sleep(2)
            print(f"She says, '{name}, you cross without permission, and must be put to rest.'")
            time.sleep(2)
            print("You are put to rest, and the whispers fade.")
            time.sleep(3)
            quit()
        elif answer == "wade":
            print("While wade across the river, you find yourself being helped across by a giant fish.")
            time.sleep(2)
            print(f"On the other side is a giant stone statue. It speaks, '{name}, you are the only one who can save me.'")
            time.sleep(2)
            print("Your life is syphoned by the powers of its ancient stone, and you quickly perish.")
            time.sleep(3)
            quit()

    elif answer == "right":
        print("You travel through the woods for some time, and find a bisected cave.")
        time.sleep(2)
        print("It exhales a warm fog from its left entrace. Deep inside its caverns you hear the clank of metal.")
        time.sleep(2)
        print("It sucks in a cold breath from its right entrance. Deep inside its caverns you hear the shattering of clay.")
        answer = input("Do you Travel through its left caverns, or Search through its right caverns? ").lower()

        if answer == "travel":
            print("The metal clanking grows loud. Giant gears emerge from the walls and swing across the floor.")
            time.sleep(2)
            print("You are thrown, and the clanking metal whirs with a hitch as you are crushed.")
            time.sleep(3)
            quit()
        elif answer == "search":
            print("You search the caverns, and find a clay vase.")
            time.sleep(2)
            print("The vase is filled with a strange liquid. You drink it, and feel power surge through you.")
            time.sleep(2)
            print("You are transformed. You are a powerful being, and are able to leave my realm.")
            answer = input("Do you leave my realm?: ").lower()

            if answer == "yes":
                print("Farewell, conquerer.")
                time.sleep(2)
                quit()
            elif answer == "no":
                print("You stay in my realm. You live here forever after.")
                time.sleep(2)
                quit()

    else:
        print("There are no other paths.")
        time.sleep(2)
        print("Your indecision costs you your life.")
        time.sleep(2)
        quit()


# user starts here
print("Welcome traveler.")
playing = input("Would you like to play? (yes/no): ")

if playing != "yes":
    print("Farewell.")
    quit()
else:
    print("...A portal to another dimension swallows you...")
    adventure()
