# Quicksort

Quicksort - это алгоритм «разделяй и властвуй».
Quicksort сначала делит большой массив на два меньших
подмассивы: нижние элементы и высокие элементы.
Затем Quicksort может рекурсивно сортировать подмассивы

Шаги следующие:

1. Выберите элемент, называемый опорной точкой, из массива.
2. Разбиение на разделы: переупорядочьте массив так, чтобы все элементы с
значением меньше, чем опорная точка, предшествуют опорной точке, в то время как все
элементы со значениями больше, идут после нее
(равные значения могут быть разными). После этого разбиения
ось находится в окончательном положении. Это называется
операция раздела.
3. Рекурсивно примените описанные выше шаги к подмассиву
элементы с меньшими значениями и отдельно от
подмассив элементов с большими значениями.

Анимированная визуализация алгоритма быстрой сортировки.
Горизонтальные линии - это значения разворота.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |  Quicksort is usually done in-place with O(log(n)) stack space |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)