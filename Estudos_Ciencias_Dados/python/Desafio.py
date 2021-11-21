lista = ['w', 'w', 'Z', 'Z', 'J', 'J', 'J', 'E', 'E', 'I', 'I', 'I', 'I',
         'E', 'E', 'C', 'C', 'w', 'w', 'B', 'B', 'C', 'C', 'C', 'C', 'J', 'Q', 'D', '1']

listaOriginal = ['w', 'Z', 'J', 'E', 'I',
                 'E', 'C', 'w', 'B', 'C', 'J', 'Q', 'D']

dicOriginal = {'w': 2, 'Z': 2, 'J': 3, 'E': 2, 'I': 4, 'E': 2,
              'C': 2, 'w': 2, 'B': 2, 'C': 4, 'J': 1, 'Q': 1, 'D': 1}


def gen_dict():
    dic = {}
    for letra in lista:
        if not letra.isdigit():
            if letra in dic:
                dic[letra] += 1
            else:
                dic[letra] = 1
    print(dic)
    return firtSingleCNaracter(dic)


def firtSingleCNaracter(dic):
    for keZ, value in dic.items():
        if value == 1:
            return keZ


print(gen_dict())
