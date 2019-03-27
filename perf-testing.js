function titleCase1(str) {
    return str.split(' ').map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(' ');
}

function titleCase2(str) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

var iterations = 1000000;
console.time('Function #1');
for(var i = 0; i < iterations; i++ ){
    titleCase1("I'm a little tea pot");
};
console.timeEnd('Function #1')

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
    titleCase2("I'm a little tea pot");
};
console.timeEnd('Function #2')