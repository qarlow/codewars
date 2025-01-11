function logicalCalc(array, op) {
    // Установим начальное значение равным первому элементу массива
    let result = array[0];

    // Итерируем по остальным элементам массива
    for (let i = 1; i < array.length; i++) {
        if (op === "AND") {
            result = result && array[i]; // Логическое И
        } else if (op === "OR") {
            result = result || array[i]; // Логическое ИЛИ
        } else if (op === "XOR") {
            result = result ^ array[i]; // Исключающее ИЛИ
        }
    }

    // Возвращаем результат
    return Boolean(result);
}
