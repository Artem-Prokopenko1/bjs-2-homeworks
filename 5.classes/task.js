//Задача 1. Печатное издание

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state = this.state * 1.5;
    }
    set state(state){
        if(state < 0){
            this._state = 0;
        }else if(state > 100){
            this._state = 100;
        }else{
            this._state = state;
        }
    }
    get state() {
        return this._state;
      }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

//Задача 2. Библиотека

class Library{
    constructor(name){
    this.name = name;
    this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    } 
    findBookBy(type, value){
        let searchBook = this.books.find(item => item[type] == value);
        return searchBook ? searchBook : null;
    }
    giveBookByName(bookName){
        let indexSearchBook = this.books.findIndex(item => item.name == bookName);
        if (indexSearchBook >= 0){
            let result = this.books[indexSearchBook];
            this.books.splice(indexSearchBook, 1);
            return result;
        }return null;
    }
}

//Задача 3. Журнал успеваемости *

class Student{
    constructor(name){
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subjectName){
        if(mark >= 2 && mark <=5){
            if(subjectName in this.marks){
                this.marks[subjectName].push(mark);
            }else{this.marks[subjectName] = [];
            this.marks[subjectName].push(mark);
            }
        }
    }
    getAverageBySubject(subjectName){
        return (subjectName in this.marks) ? this.marks[subjectName].reduce((akk, b) => (akk + b), 0) / this.marks[subjectName].length : 0;
        
    }
    getAverage(){
        const allSubject = Object.keys(this.marks);
        if(allSubject.length >0){
        return allSubject.reduce((accum, current)=> accum + this.getAverageBySubject(current), 0) / allSubject.length;
        }return 0;
    }
}

//const student = new Student("Олег Никифоров");
//student.addMark(5, "химия");
//console.log(student);
//student.addMark(3, "химия");
//console.log(student);
//student.addMark(5, "физика");
//console.log(student);
//console.log(student.getAverageBySubject("химия"));
//console.log(student.getAverageBySubject("физика"));
//console.log(student.getAverage());




