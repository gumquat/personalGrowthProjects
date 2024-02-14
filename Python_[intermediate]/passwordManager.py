# IMPORTS #
import time
from os.path import exists
from cryptography.fernet import Fernet

# FUNCTION DEFINITIONS #
def write_key():
    """RUN ONCE TO GENERATE A KEY
    generates an random key string
    in a file 'key.key'
    """
    wKey = Fernet.generate_key()
    with open("key.key", "wb") as f:
        f.write(wKey)

def load_key():
    """opens and reads the 'key.key' file
    Returns: the encrypted string from 'key.key'
    """
    with open("key.key", "rb") as f:
        lKey = f.read()
    return lKey

# run write_key() once and then never again
# write_key()
masterPassword = "password"
enteredPassword = input("Enter the Master Password: ")

if masterPassword == enteredPassword:
    key = load_key() # + masterPassword.encode()
    fer = Fernet(key)
else:
    print("Incorrect Password")
    time.sleep(2)
    quit()

# RUNTIME FUNCTIONS #
def view():
    """views the table of passwords|usernames
    """
    with open('passwords.txt', 'r') as f:
        for line in f.readlines():
            data = line.rstrip()
            user, pwd = data.split("|")
            print("User:", user, "|" , "Password:", fer.decrypt(pwd.encode()).decode())

def add():
    """adds to the table of passwords|usernames"""
    name = input("Account Name: ")
    pwd = input("Password: ")

    with open('passwords.txt', 'a') as f:
        f.write(name + "|" + fer.encrypt(pwd.encode()).decode() + "\n")


# user experience starts here #
while True:
    mode = input("Create a new password, view existing passwords, or quit? (add/view/quit) ").lower()
    if mode ==  "quit":
        break
    elif mode == "view":
        view()
    elif mode == "add":
        add()
    else:
        print("invalid mode")