# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela de descontos:
#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
#  Escreva uma função que receba o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina), e retorne o valor a ser pago pelo cliente, sabendo-se que o preço do litro da gasolina é R$ 2,50, e o preço do litro do álcool é R$ 1,90.

def fuel_price(liters, type):
    if type == "A":
        price = 1.9
        discount = 3
        if liters > 20:
            discount = 5
    elif type == "G":
        price = 2.5
        discount = 4
        if liters > 20:
            discount = 6
    return price * liters * (1 - (discount / 100))

print(fuel_price(20, "A"))
