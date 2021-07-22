// задание1
function cachingDecoratorNew(func) {
    let cache = [];
    function wrapper(...args) {
        const hash = args.join(",");
        let idx = cache.findIndex((item) => item.hash === hash);
        console.log(idx);
        if (idx !== -1 ) {
            console.log("Из кеша: " + cache[idx].value);
            return "Из кэша: " + cache[idx].value;
        } else {
            let result = func.apply(this, args);
            cache.push({"hash": hash, "value": result});

            if (cache.length > 5) {
                cache.splice(0,1);
            }
            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;
        }
    }
    return wrapper;
}

// задание2

const showCoords = (x, y) => console.log(`Клик:(${x},${y})`);
function debounceDecoratorNew(func, ms) {
    let timeout;
    let checkFunc = false;
    return function (...args) {
        if (checkFunc === true) {
            timeout = setTimeout(() => {
                func.apply(this, args);
                checkFunc = true;
            }, ms);
        }
    }
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс

// задание3

function debounceDecorator2(func) {
    let timeout;
    let checkFunc = false;
    return function (...args) {
        if (checkFunc === true) {
            timeout = setTimeout(() => {
                func.apply(this, args);
                checkFunc = true;
            }, ms);
        }
    }
    function wrapper(...args) {
        wrapper.history.push(args);
        return func.call(this, ...args);
        }
    wrapper.history = [];
    return wrapper;
}


const upgradedAdd = debounceDecorator2(showCoords);
upgradedAdd(100, 200);
console.log(upgradedAdd.history); // [100,200] , [1,1]

