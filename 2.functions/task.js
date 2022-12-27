function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = Number(((arr.reduce((sum, current) => sum + current, 0)) / arr.length).toFixed(2));
   /*reduce - складывает элементы массива
    toFixed - округляет до двух знаков возвращая строку
    Number - приводит String к Number
  */

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
  if(arr.length > 0){
    return Math.max(...arr) - Math.min(...arr);
  }return 0;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length > 0){
    let sumEvenElement = 0;
    let sumOddElement = 0;
    
    arr.forEach( (element) =>{
      (element % 2 === 0) ? sumEvenElement += element : sumOddElement += element;
    })
    return sumEvenElement - sumOddElement;
  }return 0;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length > 0){
    let sumEvenElement = 0;
    let countEvenElement = 0;

    arr.forEach( (element) =>{
      if(element % 2 === 0){
        sumEvenElement += element;
        countEvenElement += 1;
      }
    })
    return sumEvenElement / countEvenElement;
  }return 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let intermediateResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i += 1){
    intermediateResult = func(...arrOfArr[i]);
    if(intermediateResult > maxWorkerResult){
      maxWorkerResult = intermediateResult;
    }
  }

  return maxWorkerResult;


}
