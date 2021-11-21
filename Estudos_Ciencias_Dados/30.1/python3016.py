#  Exercício 6: Crie uma função que receba os três lados de um triângulo e informe qual o tipo de triâgulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
#   Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.

def type_triangle(s1, s2, s3):
    triangle = (
        s1 + s2 > s3 and
        s2 + s3 > s1 and
        s1 + s3 > s2
    )
    if not triangle:
        return "não é triangulo"
    elif s1 != s2 != s3:
        return "Escaleno"
    elif s1 == s2 == s3:
        return "Equilátero"
    else:
        return "Isórceles"

print(type_triangle(20,20,20))