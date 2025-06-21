function sumFor(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
function sumWhile(numbers) {
    var total = 0;
    var i = 0;
    while (i < numbers.length) {
        total += numbers[i];
        i++;
    }
    return total;
}
function sumRecursion(numbers) {
    if (numbers.length === 0)
        return 0;
    return numbers[0] + sumRecursion(numbers.slice(1));
}
function sumTheFunctionalWay(numbers) {
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Test data
var nums = [1, 2, 3, 4];
// Console output
console.log("sumFor:", sumFor(nums));
console.log("sumWhile:", sumWhile(nums));
console.log("sumRecursion:", sumRecursion(nums));
console.log("sumTheFunctionalWay:", sumTheFunctionalWay(nums));
