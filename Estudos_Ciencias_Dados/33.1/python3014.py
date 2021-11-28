#  Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" . Uma dica: Utilize a função len() para verificar o tamanho do nome.

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def get_bigger_name(names):
    bigger_name = names[0]
    for name in names:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name

print(get_bigger_name(names))
