#  Exercício 1: Dada uma lista, descubra o menor elemento.

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def small_number(numbers):
    small = numbers[0]
    for number in numbers:
        if number < small:
            small = number
    return small


#  Dica: a função min já existe nativamente no Python! Trabalhando em Python, sempre compensa pesquisar uma solução primeiro porque este brinquedo vem com todos os acessórios inclusos!

def small_number1(numbers):
    return min(numbers)


print(small_number1(numbers))
