// Exemplos do objeto Math
console.log(Math.PI);
console.log(Math.E);

// Math.round - arredonda para o inteiro mais próximo
console.log('Math.round(4.6) =', Math.round(4.6));
console.log('Math.round(4.3) =', Math.round(4.3));

// Math.floor - arredonda para baixo
console.log('Math.floor(4.9) =', Math.floor(4.9));
console.log('Math.floor(4.1) =', Math.floor(4.1));

// Math.ceil - arredonda para cima
console.log('Math.ceil(4.1) =', Math.ceil(4.1));
console.log('Math.ceil(4.9) =', Math.ceil(4.9));


// Math.max / Math.min
console.log('Math.max(10, 20, 40, 30) =', Math.max(10, 20, 40, 30));
console.log('Math.min(10, 20, 5, 40, 30) =', Math.min(10, 20, 5, 40, 30)); 

const nums = [1, 2 ,3, 4, 5, 6, 7, 8, 9, 10];
console.log("Math.min(...nums)", Math.min(...nums));
console.log("Math.max(...nums)", Math.max(...nums)); 

const scores = [];
if (typeof prompt === 'function') {
    for (let i = 0; i < 3; i++) {
        const input = prompt(`Enter Score ${i + 1}:`);
        scores.push(parseInt(input, 10) || 0);
    }
} else {
    // Fallback para ambientes sem `prompt` (ex.: Node.js)
    scores.push(85, 90, 78);
}

function calculateAverage(arr) {
    if (!arr.length) return 0;
    return arr.reduce((sum, v) => sum + v, 0) / arr.length;
}

function assignGrade(avg) {
    if (avg >= 90) return 'A';
    if (avg >= 80) return 'B';
    if (avg >= 70) return 'C';
    if (avg >= 60) return 'D';
    return 'F';
}

const average = calculateAverage(scores);
const grade = assignGrade(average);

console.log(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);
 



console.log("Math.abs() ------");
console.log("Math.abs(-10)", Math.abs(-10));
console.log("Math.abs(10)", Math.abs(10));


// Math.pow()

console.log("Math.pow() --------:");
console.log("Math.pow(2, 3)", Math.pow(2, 3));
console.log("Math.pow(5, 2)", Math.pow(5, 2));
console.log("2**3", 2 ** 3);

console.log("Math.sqrt() --------:");
console.log("Math.sqrt(25)", Math.sqrt(25));
console.log("Math.sqrt(49)", Math.sqrt(49));

console.log('Função: verificar se um número é quadrado perfeito');

function isPerfectSquare(num) {
    if (typeof num !== 'number' || num < 0) return false;
    const root = Math.sqrt(num);
    return Number.isInteger(root);
}

console.log("isPerfectSquare(10)", isPerfectSquare(10));
console.log("isPerfectSquare(16)", isPerfectSquare(16));
console.log("isPerfectSquare(25)", isPerfectSquare(25));
console.log("isPerfectSquare(27)", isPerfectSquare(27));
// chamadas antigas removidas (nome da função corrigido para isPerfectSquare)
