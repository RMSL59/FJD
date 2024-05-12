function checkLogin() {
    const ticketElement = document.getElementById("TicketNumber");
    const tkElement = document.getElementById("TKnumber");
    const errorMessage = document.getElementById("errorMsg");
    const goButton = document.getElementById("goButton");
    
    // Check if both input are not equal to the winning numbers
    if (ticketElement.value === "0196035458-DK" && tkElement.value === "TK-ERP-475") {
        goButton.setAttribute(href,"winning.html");
    } else {
        errorMessage.setAttribute(style.display,"block");
		tkElement.value = "";
		ticketElement.value = "";
	}
});
};