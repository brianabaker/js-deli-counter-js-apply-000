

// function takeANumber(katzDeliLine, name){
//   //accept new line of people, katzDeliLine
//   // and their name
//
//   // return their position in line
//   //return NOT by index! return by something else.
// }

function takeANumber(katzDeliLine, name){
<<<<<<< HEAD
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`
=======
  var newArr= [];
  newArr.push(name);
  var num = newArray.length;
  return `You are ${num} in line ${name}`
>>>>>>> c6941c6adfd7b07b20005d91d27a2635e508d1df
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0){
<<<<<<< HEAD
    return `Currently serving ${katzDeliLine.shift()}.`
=======
    var firstPerson= katzDeliLine.shift();
    return `Currently serving ${firstPerson}.`
>>>>>>> c6941c6adfd7b07b20005d91d27a2635e508d1df
  }else{
    return "There is nobody waiting to be served!"
  }
}
<<<<<<< HEAD

function currentLine(katzDeliLine){
  var newStr= `The line is currently: `;
  if (katzDeliLine.length === 0){
    return "The line is currently empty."
  } else {
    for (var i = 0; i < katzDeliLine.length; i++) {
   newStr += `${i + 1}. ${katzDeliLine[i]}, `
}
  return newStr.slice(0, -2);
}
}
=======
>>>>>>> c6941c6adfd7b07b20005d91d27a2635e508d1df
