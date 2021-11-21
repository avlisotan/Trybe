# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def bigger(n1, n2):
    if n2 > n1:
        return n2
    return n1

print(bigger(2,3))