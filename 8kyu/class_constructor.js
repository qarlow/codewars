class Cube {
    constructor(side = 0) {
        // Если аргумент не передан, side будет 0
        this.side = Math.abs(side); // Преобразуем отрицательные значения в положительные
    }

    getSide() {
        return this.side;
    }

    setSide(n) {
        this.side = Math.abs(n); // Преобразуем отрицательные значения в положительные
    }
}
