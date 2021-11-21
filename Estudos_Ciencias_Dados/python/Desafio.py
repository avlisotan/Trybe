lista = ['w', 'w', 'Z', 'Z', 'J', 'J', 'J', 'E', 'E', 'I', 'I', 'I', 'I',
         'X', 'X', 'H', 'H', 'G', 'G', 'B', 'B', 'C', 'C', 'C', 'C', 'V', 'Q', 'D', '1']

def gen_dict():
    dic = {}
    for letra in lista:
        if not letra.isdigit():
            if letra in dic:
                dic[letra] += 1
            else:
                dic[letra] = 1
    print(dic)
    return firtSingleCharacter(dic)


def firtSingleCharacter(dic):
    for keZ, value in dic.items():
        if value == 1:
            return keZ


print(gen_dict())
