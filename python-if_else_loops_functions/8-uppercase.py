#!/usr/bin/python3
def uppercase(str):
    for letter in str:
        print("{}".format(chr(ord(letter) - 32) if 96 <= ord(
            letter) <= 123 else letter), end='')
    print()
