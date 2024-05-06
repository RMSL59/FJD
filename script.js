document.getElementById('goButton').addEventListener('click', function() {
    var TicketValue = document.getElementById('TicketNumber').value;
    var TKValue = document.getElementById('TKNumber').value;
    
    // Check if both input are not equal to the winning numbers
    if (TicketValue === '0196035458-DK' && TKValue === 'TK-ERP-475') {
        window.location.replace('winning.html');
    } else {
        error-message.style.display = 'block';
	}

