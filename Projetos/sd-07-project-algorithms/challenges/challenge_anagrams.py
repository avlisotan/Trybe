def is_anagram(first_string, second_string):
    return merge_sort(first_string) == merge_sort(second_string)


## https://app.betrybe.com/course/computer-science/algoritmos-e-estrutura-de-dados/algoritmos-de-ordenacao-e-busca/29521083-44ea-488d-a74d-216b1ac79b04/conteudos/32a9d9fa-341d-4bdb-af65-eedc37a6082e/algoritmos-de-ordenacao/28628db5-3bd5-4561-aa1d-53b51818494f?use_case=side_bar


def merge_sort(array):
    array = list(array)
    if len(array) <= 1:
        return array
    mid = len(array) // 2
    left, right = merge_sort(array[:mid]), merge_sort(array[mid:])
    return merge(left, right, array.copy())


def merge(left, right, merged):
    left_cursor, right_cursor = 0, 0
    while left_cursor < len(left) and right_cursor < len(right):
        if left[left_cursor] <= right[right_cursor]:
            merged[left_cursor + right_cursor] = left[left_cursor]
            left_cursor += 1
        else:
            merged[left_cursor + right_cursor] = right[right_cursor]
            right_cursor += 1

    for left_cursor in range(left_cursor, len(left)):
        merged[left_cursor + right_cursor] = left[left_cursor]

    for right_cursor in range(right_cursor, len(right)):
        merged[left_cursor + right_cursor] = right[right_cursor]

    return "".join(merged)


print(is_anagram("renato", "otaner"))
