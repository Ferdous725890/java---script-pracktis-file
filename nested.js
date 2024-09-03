const collage = {
    name : 'vnc ',
    cls: ['11', '12'],
    events: ['science fair ', 'bijoy baoanno ', '21 feb'],
    unique : {
        conlor: 'blue',
        result:{
            gap: '5'
        }
    }
}
console.log(collage.events[2]);
delete collage.name
var result = collage.unique.result.gap = '10'
console.log(result);
console.log(collage);