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
modal.onclick = function() {
	modal.style.display = "none";
}
