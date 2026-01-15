async function fetchData() {
    const loadingText = document.getElementById("loading");
    const dataText = document.getElementById("data");

    loadingText.style.display = "block";
    dataText.textContent = "";

    try {
        const response = await new Promise(resolve => {
            setTimeout(() => resolve("Data loading successfully"), 3000);
        });

        loadingText.style.display = "none";
        dataText.textContent = response;

    } catch (error) {
        loadingText.style.display = "none";
        dataText.textContent = "Error loading data";
    }
}

fetchData();
