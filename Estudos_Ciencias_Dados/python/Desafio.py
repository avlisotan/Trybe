lista = ['P', 'P', 'y', 'y', 't', 't', 't', 'h', 'h', 'o', 'o', 'o', 'o',
         'n', 'n', 'f', 'f', 'r', 'r', 'a', 'a', 'l', 'l', 'l', 'l', 'M', 'u', 's', '1']

listaOriginal = ['P', 'y', 't', 'h', 'o',
                 'n', 'f', 'r', 'a', 'l', 'M', 'u', 's']

dicOrignal = {'P': 2, 'y': 2, 't': 3, 'h': 2, 'o': 4, 'n': 2,
              'f': 2, 'r': 2, 'a': 2, 'l': 4, 'M': 1, 'u': 1, 's': 1}


def gen_dict():
    dic = {}
    for letra in lista:
        if not letra.isdigit():
            if letra in dic:
                dic[letra] += 1
            else:
                dic[letra] = 1
    print(dic)
    return gen_dict1(dic)


def gen_dict1(dic):
    for key, value in dic.items():
        if value == 1:
            return key


print(gen_dict())
