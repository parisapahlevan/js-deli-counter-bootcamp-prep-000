var katzDeliLine = ["jshfu", "jhg", "jnh"]
i = 0
function takeANumber(katzDeliLine, i){
katzDeliLine.push(i)
i = i +1
return `Welcome, You are number ${katzDeliLine.length} on line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
   return "There is nobody waiting to be served!"
  } else {
   var firstPerson = katzDeliLine 
   katzDeliLine.shift()
  }
  return `Currently serving ${firstPerson}.`
}

function currentLine(katzDeliLine){
 if (katzDeliLine.length === 0) {
 return "The line is currently empty."  
 } else {
  var array = []
  for (var i = 0; i < katzDeliLine.length; i++){
  var myClients = `${i + 1}. ${katzDeliLine[i]}`
  array.push(myClients);
  }
  return `The line is currently: ${array.join(', ')}`
 }
 }

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

