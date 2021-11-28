#  Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um triângulo retângulo com n asteriscos de base. 

def retangle_triangle(b):
    for l in range(1, b + 1):
        print(l * "*")

retangle_triangle(5)