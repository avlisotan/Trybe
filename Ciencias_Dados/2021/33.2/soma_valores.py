nums = input("Insira valores aqui, separados por espaço: ")

print(nums)

numsArr = nums.split(" ")

print(numsArr)

sum = 0
for num in numsArr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print("A soma dos valores válidos é: ", sum)