$(document).ready(function() {
	$('#btnDelete').click(deleteTown)
	$('#btnShuffle').click(shuffleTown)
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

function shuffleTown() {
    let townsSelect = $('#towns');
    let townsOptions = townsSelect.find('option');

   
    townsOptions.sort(function() {
        return 0.5 - Math.random();
    });

    
    townsSelect.empty().append(townsOptions);

    $('#result').text("Towns shuffled.");
}