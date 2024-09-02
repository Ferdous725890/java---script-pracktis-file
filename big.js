
var num1 = prompt('Enter Your Numbers')
var num2 = prompt('Enter Your Numbers')
var num3 = prompt('Enter Your Numbers')

if (num1 > num2 && num1 > num3 ){
    console.log('Lage Numbers ' + num1)
}
else if (num2 > num1 && num2 > num3 ){
    console.log('Lage Numbers '  + num2)
}
else if (num3 > num1 && num3 > num2 ){
    console.log('Lage Numbers '  + num3)
}