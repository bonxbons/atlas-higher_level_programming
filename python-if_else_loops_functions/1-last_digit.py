#!/usr/bin/python3
import random

number = random.randint(-10000, 10000)
last_digit = abs(number) % 10
print("Last digit of {} is {} and is".format(number, last_digit), end=" ")
print("greater than 5" if last_digit > 5 else "0" if last_digit == 0 else "less than 6 and not 0")
