#!/usr/bin/python3

def uppercase(s):
    result = ""
    for c in s:
        diff = ord('A') - ord('a') if 'a' <= c <= 'z' else 0
        result += chr(ord(c) + diff)
    print(result)
