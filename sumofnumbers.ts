function sumFor(numbers: number[]): number {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }
  
  function sumWhile(numbers: number[]): number {
    let total = 0;
    let i = 0;
    while (i < numbers.length) {
      total += numbers[i];
      i++;
    }
    return total;
  }
  
  function sumRecursion(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return numbers[0] + sumRecursion(numbers.slice(1));
  }
  
  function sumTheFunctionalWay(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Test data
  const nums = [1, 2, 3, 4];
  
  // Console output
  console.log("sumFor:", sumFor(nums));
  console.log("sumWhile:", sumWhile(nums));
  console.log("sumRecursion:", sumRecursion(nums));
  console.log("sumTheFunctionalWay:", sumTheFunctionalWay(nums));
  