# Алгоритмы и структуры данных на JavaScript

В этом репозитории содержатся базовые JavaScript-примеры многих популярных алгоритмов и структур данных.

Для каждого алгоритма и структуры данных есть свой файл README с соответствующими пояснениями и ссылками на материалы для дальнейшего изучения (в том числе и ссылки на видеоролики в YouTube).

## Структуры данных

Структура данных (англ. data structure) — программная единица, позволяющая хранить и обрабатывать множество однотипных и/или логически связанных данных в вычислительной технике. Для добавления, поиска, изменения и удаления данных структура данных предоставляет некоторый набор функций, составляющих её интерфейс.

`B` - Базовый уровень, `A` - Продвинутый уровень

* `B` [Связный список](src/data-structures/linked-list)
* `B` [Двунаправленный связный список](src/data-structures/doubly-linked-list)
* `B` [Очередь](src/data-structures/queue)
* `B` [Стек](src/data-structures/stack)
* `A` [Деревья](src/data-structures/tree)
  * `A` [Двоичное дерево поиска](src/data-structures/tree/binary-search-tree)
* `A` [Граф](src/data-structures/graph) (ориентированный и неориентированный)

## Алгоритмы

Алгоритм — конечная совокупность точно заданных правил решения некоторого класса задач или набор инструкций, описывающих порядок действий исполнителя для решения некоторой задачи.

`B` - Базовый уровень, `A` - Продвинутый уровень

* **Алгоритмы поиска**
  * `B` [Линейный поиск](src/algorithms/search/linear-search)
  * `B` [Двоичный поиск](src/algorithms/search/binary-search) — поиск в упорядоченном массиве
* **Алгоритмы сортировки**
  * `B` [Сортировка пузырьком](src/algorithms/sorting/bubble-sort)
  * `B` [Сортировка выбором](src/algorithms/sorting/selection-sort)
  * `B` [Сортировка вставками](src/algorithms/sorting/insertion-sort)
  * `B` [Сортировка слиянием](src/algorithms/sorting/merge-sort)
  * `B` [Быстрая сортировка](src/algorithms/sorting/quick-sort)
  * `B` [Сортировка подсчётом](src/algorithms/sorting/counting-sort)
* **Деревья**
  * `B` [Поиск в глубину](src/algorithms/tree/depth-first-search)
  * `B` [Поиск в ширину](src/algorithms/tree/breadth-first-search)



## Полезная информация

### Ссылки

[▶ О структурах данных и алгоритмах](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

### Нотация «О» большое

*Нотация «О» большое* используется для классификации алгоритмов в соответствии с ростом времени выполнения и затрачиваемой памяти при увеличении размера входных данных. На диаграмме ниже представлены общие порядки роста алгоритмов в соответствии с нотацией «О» большое.

![Big O graphs](./assets/big-o-graph.png)

Источник: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Ниже представлены часто используемые обозначения в нотации «О» большое, а также сравнение их производительностей на различных размерах входных данных.

| Нотация «О» большое | 10 элементов | 100 элементов | 1000 элементов |
| ------------------- | ------------ | ------------- | -------------- |
| **O(1)**            | 1            | 1             | 1              |
| **O(log N)**        | 3            | 6             | 9              |
| **O(N)**            | 10           | 100           | 1000           |
| **O(N log N)**      | 30           | 600           | 9000           |
| **O(N^2)**          | 100          | 10000         | 1000000        |
| **O(2^N)**          | 1024         | 1.26e+29      | 1.07e+301      |
| **O(N!)**           | 3628800      | 9.3e+157      | 4.02e+2567     |

### Сложности операций в структурах данных

| Структура данных           | Получение | Поиск     | Вставка   | Удаление  | Комментарии |
| -------------------------- | :-------: | :-------: | :-------: | :-------: | :---------- |
| **Массив**                 | 1         | n         | n         | n         |             |
| **Стек**                   | n         | n         | 1         | 1         |             |
| **Очередь**                | n         | n         | 1         | 1         |             |
| **Связный список**         | n         | n         | 1         | n         |             |
| **Хеш-таблица**            | -         | n         | n         | n         | Для идеальной хеш-функции — O(1) |
| **Двоичное дерево поиска** | n         | n         | n         | n         | В сбалансированном дереве — O(log(n)) |
| **B-дерево**               | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Красно-чёрное дерево**   | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **АВЛ-дерево**             | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Фильтр Блума**           | -         | 1         | 1         | -         | Возможно получение ложно-положительного срабатывания |

### Сложности алгоритмов сортировки

| Наименование               | Лучший случай | Средний случай | Худший случай | Память | Устойчивость | Комментарии |
| -------------------------- | :-----------: | :------------: | :-----------: | :----: | :----------: | :---------- |
| **Сортировка пузырьком**   | n             | n<sup>2</sup>  | n<sup>2</sup> | 1      | Да           |             |
| **Сортировка вставками**   | n             | n<sup>2</sup>  | n<sup>2</sup> | 1      | Да           |             |
| **Сортировка выбором**     | n<sup>2</sup> | n<sup>2</sup>  | n<sup>2</sup> | 1      | Нет          |             |
| **Сортировка кучей**       | n&nbsp;log(n) | n&nbsp;log(n)  | n&nbsp;log(n) | 1      | Нет          |             |
| **Сортировка слиянием**    | n&nbsp;log(n) | n&nbsp;log(n)  | n&nbsp;log(n) | n      | Да           |             |
| **Быстрая сортировка**     | n&nbsp;log(n) | n&nbsp;log(n)  | n<sup>2</sup> | log(n) | Нет          | Быстрая сортировка обычно выполняется с использованием O(log(n)) дополнительной памяти |
| **Сортировка Шелла**       | n&nbsp;log(n) | зависит от выбранных шагов | n&nbsp;(log(n))<sup>2</sup>  | 1      | Нет          |           |
| **Сортировка подсчётом**   | n + r         | n + r          | n + r         | n + r  | Да           | r — наибольшее число в массиве |
| **Поразрядная сортировка** | n * k         | n * k          | n * k         | n + k  | Да           | k — длина самого длинного ключа |