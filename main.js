document.addEventListener('DOMContentLoaded',function() {
	changeEventHandler('zip');
    document.getElementById('select_how').onchange = function() {
    	changeEventHandler(event.target.value);
    };
});

function changeEventHandler(value) {
    if (value === "zip") {
    	document.getElementById('location_city').classList.add('hide');
    	document.getElementById('location_country').classList.add('hide');
    	document.getElementById('location_zip').classList.remove('hide');

    } else {
    	document.getElementById('location_zip').classList.add('hide');
    	document.getElementById('location_city').classList.remove('hide');
    	document.getElementById('location_country').classList.remove('hide');

    }
}
