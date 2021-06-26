"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1 = 0;
    let x2 = 0;

    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        arr = [x1, x2];
    } else if (D < 0) {
        console.log('корней нет');
    } else {
        x1 = -b / (2 * a);
        arr = [x1];
    }
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentF = parseFloat(percent) / 100;
    let amountI = parseInt(amount);
    let contributionI = parseInt(contribution);
    if (isNaN(percentF)) {
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    }
    if (isNaN(amountI)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }
    if (isNaN(contributionI)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    }

    let P = percentF / 12;
    let totalAmount;
    let loanBody = amountI - contributionI;
    let creditTerm = monthDiff(new Date(), date);
    let monthlyFee = loanBody * (P + P / (Math.pow((1 + P), creditTerm) - 1));
    totalAmount = monthlyFee * creditTerm;
    console.log("Ввод: ".concat(percent, ", ", contribution, ", ", amount))
    console.log("Вывод: ".concat(totalAmount, ", ", creditTerm))
    return parseFloat(totalAmount.toFixed(2));
}

function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
