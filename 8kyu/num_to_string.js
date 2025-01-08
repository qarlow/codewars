function evil(n) {
    // Преобразуем число в двоичное представление
    const binary = n.toString(2);

    // Считаем количество единиц
    const countOnes = binary.split('1').length - 1;

    // Проверяем чётность и возвращаем результат
    if (countOnes % 2 === 0) {
        return "It's Evil!";
    } else {
        return "It's Odious!";
    }
}
