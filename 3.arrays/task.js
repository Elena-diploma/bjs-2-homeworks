
//Тут логично бы было просто написать return, но начальное тело функции менять не стала
function compareArrays(arr1, arr2) {
    let result = Array.isArray(arr1)
        && Array.isArray(arr2)
        && arr1.length === arr2.length
        && arr1.every((item, index) => {
            return item === arr2[index]
        });
    return result;
}

//Та же фигня
function advancedFilter(arr) {

    let resultArr = arr.filter((item) => {
        return item > 0 && item % 3 === 0
    }).map((item) => {
        return item * 10
    });
    return resultArr; // array
}
