#ifndef LISTS_H
#define LISTS_H

#include <stddef.h>

/* Struct for a singly linked list node */
typedef struct Node
{
    int data;           /* Data of the node */
    struct Node *next;  /* Pointer to the next node in the list */
} Node;

/* Function prototypes */
size_t print_list(const Node *h);
Node *add_node(Node **head, int n);
void free_list(Node *head);

#endif /* LISTS_H */
