document.getElementById('goButton').addEventListener('click', function() {
    var input1Value = document.getElementById('input1').value;
    var input2Value = document.getElementById('input2').value;
    
    // Check if both input boxes are not empty
    if (input1Value !== '' && input2Value !== '') {
        alert('Values entered: ' + input1Value + ' and ' + input2Value);
    } else {
        alert('Please enter values in both input boxes.');
    }
});