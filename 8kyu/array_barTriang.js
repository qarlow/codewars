function barTriang(p1, p2, p3) {
    // Вычисляем координаты барицентра
    const xO = (p1[0] + p2[0] + p3[0]) / 3;
    const yO = (p1[1] + p2[1] + p3[1]) / 3;

    // Округляем до 4 знаков после запятой
    const roundedXO = parseFloat(xO.toFixed(4));
    const roundedYO = parseFloat(yO.toFixed(4));

    // Возвращаем результат в виде массива
    return [roundedXO, roundedYO];
}