document.getElementById('goButton').addEventListener('click', function() {
    var TicketInput = document.getElementById('TicketNumber');
    var TKInput = document.getElementById('TKnumber');
    var TicketValue = TicketInput.value;
    var TKValue = TKInput.value;
    
    // Check if both input are not equal to the winning numbers
    if (TicketValue === '0196035458-DK' && TKValue === 'TK-ERP-475') {
        window.location.replace('winning.html');
    } else {
        var errorMessage = document.querySelector('.error-message');
        errorMessage.style.display = 'block';
		TicketInput.value = '';
		TKInput.value = '';
	}
});
