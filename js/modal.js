$(document).ready(function() {
	// Show the Modal on load
	$('#myModal').modal('show');
	setTimeout(function() {
		$('.modal-backdrop').css('z-index', -1);
		$('.modal-open').css('overflow', 'auto');
		$('.modal-open').css('padding-right', '0px');
		$('#myModal').css('display', 'none');
	}, 5000);
});
