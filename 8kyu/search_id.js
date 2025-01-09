function nextId(ids) {
    // Преобразуем массив в Set для ускорения поиска
    const usedIds = new Set(ids);

    // Проверяем, начиная с 0
    let id = 0;
    while (usedIds.has(id)) {
        id++; // Увеличиваем, пока ID уже используется
    }

    return id; // Возвращаем первый неиспользуемый ID
}
