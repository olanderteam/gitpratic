const taks = [] 

while(true) {
    let task = prompt("Enter a task (or type 'exit' to finish):");
    if (task.toLowerCase() === 'exit') {
        break;
    }
    taks.push(task);
}

console.log("Your tasks:");
taks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
});