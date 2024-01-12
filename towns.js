$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
});

function deleteTown() {
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}
function showMessage(msg) {
    let resultBox = $('#result');
    
    resultBox.hide();
    
    resultBox.text(msg);
    
    resultBox.fadeIn();
    
    setTimeout(function() {
        resultBox.fadeOut();
    }, 3000);
}