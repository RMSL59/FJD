function checkLogin() {
    const ticketElement = document.getElementById("ticketNumber");
    const tkElement = document.getElementById("tkNumber");

    // Remove any existing red borders
    ticketElement.style.border = "1px solid #ccc";
    tkElement.style.border = "1px solid #ccc";

    // Check if either input value is empty
    if (ticketElement.value === "" || tkElement.value === "") {
        // If either input is empty, apply red border to the empty input
        if (ticketElement.value === "") {
            ticketElement.style.border = "1px solid red";
        }
        if (tkElement.value === "") {
            tkElement.style.border = "1px solid red";
        }
        return;
    }

    // Check if both inputs are equal to the winning numbers
    if (ticketElement.value === "0196035458-DK" && tkElement.value === "TK-ERP-475") {
        window.location.href = 'winning.html';
    } else {
        window.location.href = 'losing.html';
    }
}

function back() {
    window.location.href = 'index.html';
}