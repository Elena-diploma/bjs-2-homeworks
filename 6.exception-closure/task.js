//задание 1
function parseCount(value) {
    const errorValid = new Error("Невалидное значение");
    const parsedValue = Number.parseInt(value);
    if (isNaN(parsedValue)) {
        throw errorValid;
    }
    return parsedValue;
}
function validateCount(value) {
    try {
        const parsedValue = parseCount(value);
        return parsedValue;
    } catch (errorValid) {
        return errorValid;
    }
}
//задание 2
class Triangle {

    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.errorSum = new Error("Треугольник с такими сторонами не существует");
        if (!this.isValid()) {
            throw this.errorSum;
        }
    }

    isValid() {
        let valid = true;
        if (
            this.point1 === undefined
            || this.point2 === undefined
            || this.point3 === undefined
            || this.point1 + this.point2 < this.point3
            || this.point1 + this.point3 < this.point2
            || this.point3 + this.point2 < this.point1) {
            valid = false;
        }
        return valid;
    }

    getPerimeter() {
        if(!this.isValid()) {
            return "Ошибка! Треугольник не существует";
        } else {
            return this.point1 + this.point2 + this.point3;
        }
    }

    getArea() {
        if(!this.isValid()) {
            return "Ошибка! Треугольник не существует";
        } else {
            let p = this.getPerimeter() / 2;
            let area = 0;
            area += Math.sqrt(p*(p-this.point1)*(p-this.point2)*(p-this.point3));
            return +area.toFixed(3);
        }
    }
}

class FakeTriangle {

    getArea() {
        return "Ошибка! Треугольник не существует";
    }

    getPerimeter() {
            return "Ошибка! Треугольник не существует";
    }
}


function getTriangle(point1, point2, point3) {

    try {
        return new Triangle(point1, point2, point3);
    } catch (e) {
        return new FakeTriangle();
    }
}
