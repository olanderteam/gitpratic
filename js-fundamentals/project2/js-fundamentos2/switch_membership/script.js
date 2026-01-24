const tierSelect = document.getElementById("tierSelect"); 
const ShowBtn = document.getElementById("ShowBtn"); 
const result = document.getElementById("result"); 

ShowBtn.addEventListener("click", () => {
    const Tier = tierSelect.value;
    let message = "";

    switch (Tier.toLowerCase()) {
        case "bronze":
            message = "Bronze basic support";
            break;
        case "silver":
            message = "Silver medium support";
            break;
        case "gold":
            message = "24/7 support";
            break;

            case "platinum":
    message = "Premium 24/7 support with extras";
    break;
    
        default:
            message = "Unknown tier";
    }

    result.textContent = message;
});