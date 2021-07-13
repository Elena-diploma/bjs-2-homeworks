//задание 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.type = null;
        this.state = 100;
    }

    fix() {
        this.state = this._state;
        return this._state;
    }

    set state(mark) {
        mark *= 1.5;
        if (mark < 0) {
            this._state = 0;
        } else {
            if (mark > 100) {
                this._state = 100;
            } else {
                this._state = mark;
            }
        }
    }

    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// задание 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        if (this.books.length > 0) {
            for (let i = 0; i < this.books.length; i++) {
                let book = this.books[i];
                let bookProps = Object.entries(book);
                for (let i = 0; i < bookProps.length; i++) {
                    if (bookProps[i][0] === type && bookProps[i][1] === value) {
                        return book;
                    }
                }
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let book = this.findBookBy('name', bookName);
        if (book != null) {
            const index = this.books.indexOf(book);
            this.books.splice(index, 1);
        }
        return book;
    }
}

//задание 3
class Student {
    constructor(name) {
        this.name = name;
        this.subjects = [];
    }

    addGrade(mark, subject) {
        if (mark < 1 || mark > 5) {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }
        if (this.subjects[subject] === undefined) {
            this.subjects[subject] = [];
        }
        this.subjects[subject].push(mark);
    }

    getAverageBySubject(subjectName) {
        if (this.subjects[subjectName] === undefined) {
            return "Несуществующий предмет";
        }
        if (this.subjects[subjectName].length > 0) {
            let sum = 0;
            for (let mark of this.subjects[subjectName]) {
                sum += mark;
            }
            return sum / this.subjects[subjectName].length;
        }
        return 0;
    }

    getAverage() {
        let keys = Object.keys(this.subjects);
        if (keys.length > 0) {
            let sum = 0;
            for (let i = 0; i < keys.length; i++) {
                sum += this.getAverageBySubject(keys[i]);
            }
            return sum / keys.length;
        }
        return 0;
    }

    exclude(reason) {
        this.exclude = reason;
        delete this.subjects;
    }
}
