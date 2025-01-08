function stairsIn20(s) {
    // Рассчитать общую сумму ступеней за год
    const oneYearTotal = s.flat().reduce((total, num) => total + num, 0);

    // Умножить на 20 для оценки за 20 лет
    return oneYearTotal * 20;
}
