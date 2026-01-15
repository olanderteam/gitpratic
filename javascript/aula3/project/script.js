function calculateArevage(score1, score2, score3) {
 return (score1 + score2 + score3) / 3;
} 

function assignGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }

    const score1 = parseFloat(prompt("Enter the first score:"));
    const score2 = parseFloat(prompt("Enter the second score:"));
    const score3 = parseFloat(prompt("Enter the third score:"));

    const average = calculateArevage(score1, score2, score3);
    const grade = assignGrade(average);

    console.log(`The average score is: ${average}`);
    console.log(`The assigned grade is: ${grade}`);
}