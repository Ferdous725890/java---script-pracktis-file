


var mark = prompt('Enter your mark')
if( mark > 100 || mark < 0){
    console.log('Invalit')
}
else if( mark >= 80 && mark <=100 ){
    console.log('A+')
}
else if( mark >= 70  && mark <=79  ){
    console.log('A')
}
else if( mark >= 60  && mark <=69  ){
    console.log('A-')
}
else if( mark >= 50  && mark <=59 ){
    console.log('b')
}
else if( mark >= 40  && mark <=49  ){
    console.log('c')
}
else if( mark >= 33  && mark <=39  ){
    console.log('d')
}
else{
    console.log('Faile')
}