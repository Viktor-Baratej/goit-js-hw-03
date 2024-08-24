function filterArray(numbers, value) {
    const filteredNumbers = []; // Створюємо порожній масив для зберігання підходящих чисел
  
    for (let i = 0; i < numbers.length; i++) { // Проходимо через кожне число в масиві numbers
      if (numbers[i] > value) { // Якщо число більше за значення value
        filteredNumbers.push(numbers[i]); // Додаємо його до масиву filteredNumbers
      }
    }
  
    return filteredNumbers; // Повертаємо масив з підходящими числами
  }
  
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
  