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

// Get the modal
var modal = document.getElementById('image-modal');

// Get the image and insert it inside the modal
var img = document.getElementById('news-image');
var modalImg = document.getElementById('image-big');
img.onclick = function() {
	modal.style.display = 'block';
	modalImg.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = 'none';
};

// When the user clicks on modal, close the modal
// modal.onclick = function() {
// 	modal.style.display = "none";
// }
