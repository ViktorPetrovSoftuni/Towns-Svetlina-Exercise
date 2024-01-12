$(document).ready(function() {
	$('#btnDeleteTown').click(deleteTown)
	$('#btnShuffle').click(shuffleTown)
	$('#btnAddTown').click(addTown)
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

function showMessage(msg) {
    let resultBox = $('#result');
    
    resultBox.hide();
    
    resultBox.text(msg);
    
    resultBox.fadeIn();
    
    setTimeout(function() {
        resultBox.fadeOut();
    }, 3000);
}

function addTown() {
    var townName = $('#townNameAdd').val().trim();
    if (townName) {
        $('#towns').append(new Option(townName, townName));
        $('#townName').val(''); // Clear the input field
        $('#result').text(townName + " added.");
    } else {
        $('#result').text('Please enter a town name.');
    }
};
