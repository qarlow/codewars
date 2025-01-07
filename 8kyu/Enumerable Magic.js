function any(arr, fun) {
    if (arr.length === 0) return false; // Проверяем, пуст ли массив
    return arr.some(fun); // Проверяем, удовлетворяет ли хотя бы один элемент условию
}
