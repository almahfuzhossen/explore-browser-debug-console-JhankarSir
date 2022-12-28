function doingSomething(){
    console.log('ami kaj korsi')
}
console.log('first: ami bhat khai');
console.log('second: ami bhat khai');
console.log('third: ami bhat khai');
// doingSomething();
// setTimeout(doingSomething);
// setTimeout(doingSomething, 5000);
setTimeout(function(){
    console.log('I am doing coding');
}, 5000);
setTimeout( () => {
    console.log('exploring setTime out')
}, 500)
console.log('fourth: ami bhat khai');