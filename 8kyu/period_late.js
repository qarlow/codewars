function periodIsLate(last, today, cycleLength) {
    // Вычисляем разницу в миллисекундах
    const differenceInMs = today.getTime() - last.getTime();

    // Преобразуем разницу в дни
    const differenceInDays = differenceInMs / 86400000;

    // Сравниваем с длиной цикла
    return differenceInDays > cycleLength;
}
