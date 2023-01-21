//Домашнее задание к лекции 6 «Обработка исключений и замыкания»

//Задача 1. Форматтер чисел
function parseCount(string){
    if (!(isNaN(Number.parseFloat(string)))){
        return Number.parseFloat(string);
    } 
    throw new Error("Невалидное значение");
}
function validateCount(stringParse){
try {
    return parseCount(stringParse);
  } catch (error) {
    return error;
  }
}
//Задача 2. Треугольник
class Triangle{
    constructor(a, b, c){
        if(a+b < c || b+c < a || a+c < b){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
       
    }

    get perimeter(){
        return this.a + this.b + this.c;
    }
    get area(){
        let p = this.perimeter * 0.5;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}
function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch {
        return{
            get area(){
                return'Ошибка! Треугольник не существует';
            },
            get perimeter(){
                return'Ошибка! Треугольник не существует';
            }, 
        }
    }
}
