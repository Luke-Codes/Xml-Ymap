window.addEventListener('load', event => {
	document.getElementById('map-file').addEventListener('change', function(event) {
		document.getElementById('submit-btn').disabled = false;
	});
});
