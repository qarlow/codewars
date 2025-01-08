function calculateAge(yearOfBirth, currentYear) {
    const difference = currentYear - yearOfBirth; // Вычисляем разницу

    if (difference === 0) {
        // Год рождения равен текущему году
        return "You were born this very year!";
    } else if (difference > 0) {
        // Год в будущем (Филипп уже родился)
        return `You are ${difference} year${difference === 1 ? "" : "s"} old.`;
    } else {
        // Год в прошлом (Филипп еще не родился)
        const yearsUntilBirth = Math.abs(difference);
        return `You will be born in ${yearsUntilBirth} year${yearsUntilBirth === 1 ? "" : "s"}.`;
    }
}
