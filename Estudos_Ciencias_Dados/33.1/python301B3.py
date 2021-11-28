#  Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N .

def summation(n):
    total = 0
    for number in range(1, n + 1):
        total += number
    return total


def summation1(n):
    return sum(range(1, n + 1))


print(summation1(5))
