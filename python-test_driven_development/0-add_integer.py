#!/usr/bin/python3
"""Defines a square class."""


class Square:
    """Represents a square.

    Attributes:
        size (int): The size of the square.
    """

    def __init__(self, size=0):
        """Initializes a new Square instance.

        Args:
            size (int): The size of the square.
        """
        self.__size = size

    def area(self):
        """Calculates the area of the square.

        Returns:
            int: The area of the square.
        """
        return self.__size ** 2

    def my_print(self):
        """Prints the square using '#' characters."""
        if self.__size == 0:
            print()
        else:
            for _ in range(self.__size):
                print("#" * self.__size)

