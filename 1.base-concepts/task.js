"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if(discriminant > 0){
    arr.push((-b + Math.sqrt(discriminant) )/(2*a));
    arr.push((-b - Math.sqrt(discriminant) )/(2*a));
  }else if(discriminant === 0){
    arr.push(-b/(2*a));
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(isNaN(percent) || isNaN(contribution)  || isNaN(amount)|| isNaN(countMonths)){
    return false;
  }
  let percentMounth = percent / 100 / 12;
  let credit = amount - contribution;
  /*Ежемесячная оплата рассчитывается по формуле: 
  Платёж = S * (P + (P / (((1 + P)^n) - 1))), 
  где: S — тело кредита, 
  P — 1/12 процентной ставки (от 0 до 1),
  n — количество месяцев, 
  ^ — возведение в степень. */
  let mounthPay = credit * (percentMounth + (percentMounth / (Math.pow(1 + percentMounth, countMonths) - 1)));
  let total = mounthPay * countMonths;
  return Number(total.toFixed(2));

}
