#ifndef LISTS_H
#define LISTS_H

#include <stdio.h>
#include <stdlib.h>

/* Struct for singly linked list node */
typedef struct Node {
    int data;
    struct Node *next;
} Node;

/* Function prototypes */
void print_list(const Node *head);
Node *add_node(Node **head, int data);
void free_list(Node *head);

#endif /* LISTS_H */
