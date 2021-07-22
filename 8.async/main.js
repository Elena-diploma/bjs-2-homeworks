// тут вы можете вызывать функции из task.js
let currentDate = new Date();
const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
const minutes1 = currentDate.getMinutes()+1 < 10 ? `0${currentDate.getMinutes()+1}` : `${currentDate.getMinutes()+1}`;
const minutes2 = currentDate.getMinutes()+2 < 10 ? `0${currentDate.getMinutes()+2}` : `${currentDate.getMinutes()+2}`;
let clock = new AlarmClock();
clock.addClock("12:10", () => console.log("Первый!!!"), 1);
clock.addClock("12:20", () => console.log("Второй!!!"), 2);
clock.addClock("12:30", () => console.log("Третий!!!"), 3);
clock.addClock("12:40", () => console.log("Третий!!!"), 3);
clock.printAlarms();
clock.clearAlarms();
clock.printAlarms();
clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Первый!!!"), 1);
clock.addClock(`${hours}:${minutes1}`, () => console.log("Второй!!!"), 2, true);
clock.addClock(`${hours}:${minutes2}`, () => console.log("Третий!!!"), 3, true);
clock.printAlarms();
clock.start();