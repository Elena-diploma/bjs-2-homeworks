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
        }
            let result = func.apply(this, args);
            cache.push({"hash": hash, "value": result});

            if (cache.length > 5) {
                cache.splice(0,1);
            }
            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;
    }
    return wrapper;
}

// задание2
const showCoords = (x, y) => console.log(`Клик:(${x},${y})`);
function debounceDecoratorNew(func, ms) {
    let checkFunc = false;
    return function (...args) {
        if (checkFunc) {
            console.log("Выкидываем " + ms);
            return;
        }
        func.apply(this, args);
        console.log("Вызвали сразу " + ms);
        checkFunc = true;
        setTimeout(() => {
            func.apply(this, args);
            console.log("Вызвали с задержкой " + ms);
            checkFunc = false;
        }, ms);
    }
}

// задание3
function debounceDecorator2(func, ms) {
    let checkFunc = false;
    let wrapper = function wrapper (...args) {
        if (checkFunc) {
            console.log("Выкидываем " + ms);
            return;
        }
        func.apply(this, args);
        wrapper.count++;
        checkFunc = true;
        setTimeout(() => {
            func.apply(this, args);
            checkFunc = false;
            wrapper.count++;
        }, ms);
    }
    wrapper.count = 0;
    return wrapper;
}