const num1 = Number(prompt("Enter first number:"));
const num2 = Number(prompt("Enter second number:"));

console.log(typeof num1); // number
console.log(typeof num2); // number

if (Number.isNaN(num1) || Number.isNaN(num2)) {
	console.error("Entrada inválida: insira números válidos.");
} else {
	const sum = num1 + num2;
	const diff = num1 - num2;
	const quotient = num2 === 0 ? "Divisão por zero" : num1 / num2;

	console.log(`Sum: ${sum}`);
	console.log(`Diff: ${diff}`);
	console.log(`Quotient: ${quotient}`);
}