// sum.js
/*export function sum(a, b) {
    return a + b
  }
*/

 //add("//[**][%%]\n-1**-2%%3")

export function add(numbersStr) {

    var negatif =  []

  if (numbersStr === "") {
    console.log("vide");
    return 0;
  }

  let delimiters = getDelimiter(numbersStr);
  console.log("Delimiter : ", delimiters)
  for(const delimiter in delimiters)
    {   
        numbersStr = numbersStr.replaceAll(delimiters[delimiter],',')
        console.log("Replace" , delimiter, "in",numbersStr)
    }
  let sum = 0;
  let number = "";
  if (delimiters.length == 0) {
    console.log(numbersStr.length);
    for (let i = 0; i < numbersStr.length; i++) {
      if (numbersStr[i] == "," || numbersStr[i] == "\n") {
        console.log(number);
        sum += parseInt(number);
        console.log("Addition  = ", sum);

        number = "";
      } else {
        number += numbersStr[i];
        console.log(number);
      }
    }
    if (number != "") {
      sum += parseInt(number);
      console.log(sum);
    }
  } else {
      console.log("delimiters detected");
      console.log(delimiters);
      let firstIndex = getFirstNumber(numbersStr);
      console.log("Start at :", firstIndex);
      for (let i = firstIndex; i < numbersStr.length; i++) {
        console.log(numbersStr[i]);
        if (numbersStr[i] == ",") {
          console.log("Test : ", number);
          isNegatif(negatif, number)
          if(parseInt(number) > 1000)
            {
                console.log("Is > 1000",number)
                number =""
                continue;
            }
          sum += parseInt(number);
          number = "";
        } else {
          number += numbersStr[i];
          console.log("Number : ", number);
        }
      }
      if (number != "") {
        console.log("Test : ", number);
        isNegatif(negatif, number)
        if(parseInt(number) > 1000)
          {
              console.log("Is > 1000",number)
              number =""
          }
        sum += parseInt(number);
        number = "";
      }
  }
  console.log("Result = ", sum);

  if(negatif.length != 0)
    throw new Error("Negatives not allowed "+ negatif);

  return sum;
}

function getDelimiter(numbersStr) {
  let delimiterList = [];
  if (numbersStr[0] == "/" && numbersStr[1] == "/") {
    let delimiter = "";
    for (let i = 2; i < numbersStr.length; i++) {
        console.log("char",numbersStr[i])
        if(numbersStr[i] == "[")
            {
                continue
            }
      else if (numbersStr[i] == "]") {
        console.log("push", delimiter)
        delimiterList.push(delimiter);
        delimiter = "";
      } else if (numbersStr[i] == "\n") {
        break;
      } else delimiter += numbersStr[i];
    }
  }
  return delimiterList;
}

function getFirstNumber(numbersStr) {
  let numbers = ["-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < numbersStr.length; i++) {
    if (numbers.includes(numbersStr[i])) {
      console.log(i);
      return i;
    }
  }
}

function isNegatif(list, number) {
    if(parseInt(number) < 0)
  list.push(parseInt(number))
}
