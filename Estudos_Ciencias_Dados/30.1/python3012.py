#  Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

numbers = [0, 0, 9.0, 8.0, 5.0, 10.0, 7.0, 7.5, 4.0, 10.0, 7.0, 7.0, 8.0, 8.0, 7.5]

def mean(numbers):
    validNumbers = []
    for number in numbers:
        if number > 0:
            validNumbers.append(number)
            sumNumbers = sum(validNumbers)
            countNumbers = len(validNumbers)
            average = round(sumNumbers / countNumbers)
    return average

def mean1(numbers):
    validNumbers = [number for number in numbers if number > 0]
    return round(sum(validNumbers) / len(validNumbers))

print(mean1(numbers))
