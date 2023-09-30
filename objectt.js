// Declare the currentImageId variable
let currentImageId;
let isFirstImage = true; // Variable to track if it's the first image

// Array of image URLs
let imageToshow = [
	'images/cat.jpg',
	'images/elephant.jpg',
	'images/dog.jpg',
	'images/butterfly.jpg',
	'images/fox.jpg',
	'images/lizard.jpg',
	'images/lion.jpg',
	'images/car.jpg',
	'images/bear.jpg',
];

function changeRandomImage() {
	let imageDisplay = document.getElementById('imagedisplay');
	let loadingIndicator = document.getElementById('loading'); // Get the loading indicator element
	let randomIndex;

	// Show the loading indicator while loading
	loadingIndicator.style.display = 'block';

	if (isFirstImage) {
		// Display a blank image for the first time
		imageDisplay.src = 'images/blank.jpg';
		isFirstImage = false;
	} else {
		// Generate a random index for subsequent images
		randomIndex = Math.floor(Math.random() * imageToshow.length);
		let allImages = imageToshow[randomIndex];

		// Extract the ID from the image URL by splitting the URL at the last '/' and removing the file extension
		currentImageId = allImages.split('/').pop().split('.')[0];

		// Set the image source
		imageDisplay.src = allImages;

		// Create an image element
		let imgElement = document.createElement('img');

		// Set the image source and alt text
		imgElement.src = allImages;
		imgElement.alt = 'Random Image';

		// Resize the image by setting width and height attributes
		imgElement.width = 600; // Change this value to the desired width
		imgElement.height = 340; // 36Change this value to the desired height
		imgElement.margin = 340; // Change this value to the desired height

		// Clear the previous image(s) and append the new one
		imageDisplay.innerHTML = '';
		imageDisplay.appendChild(imgElement);

		// After loading, hide the loading indicator
		loadingIndicator.style.display = 'none';
	}
}

// Add a click event listener to the "Generate Image" button
let changeImageButton = document.getElementById('changeImageButton');
changeImageButton.addEventListener('click', changeRandomImage);

// Initially load a random image
changeRandomImage();

// Add event listeners to the buttons for object identification
document
	.getElementById('cat')
	.addEventListener('click', () => identifyObject('cat'));
document
	.getElementById('ele')
	.addEventListener('click', () => identifyObject('ele'));
document
	.getElementById('dog')
	.addEventListener('click', () => identifyObject('dog'));
document
	.getElementById('butterfly')
	.addEventListener('click', () => identifyObject('butterfly'));
document
	.getElementById('fox')
	.addEventListener('click', () => identifyObject('fox'));
document
	.getElementById('lizard')
	.addEventListener('click', () => identifyObject('lizard'));
document
	.getElementById('lion')
	.addEventListener('click', () => identifyObject('lion'));
document
	.getElementById('car')
	.addEventListener('click', () => identifyObject('car'));
document
	.getElementById('bear')
	.addEventListener('click', () => identifyObject('bear'));
document
	.getElementById('banana')
	.addEventListener('click', () => identifyObject('banana'));

// Function to check if the clicked button matches the current image
function identifyObject(clickedObject) {
	console.log('currentImageId:', currentImageId);
	console.log('clickedObject:', clickedObject);

	let display = document.getElementById('display'); // Define the 'display' variable

	if (currentImageId === clickedObject) {
		display.innerText = 'Excellent Work! Keep it Up';
		// const audio = document.getElementById('audio');
		// audio.src = './images/great-job.mp3';
		// audio.play();
		changeRandomImage();
	} else {
		display.innerText = 'Try Again you can do it.';
		const audio = document.getElementById('audio');
		audio.src = './images/uh-oh.mp3';
		audio.play();
		changeRandomImage();
	}
}

// Restart button click event
let restartButton = document.getElementById('restart');
restartButton.addEventListener('click', function (event) {
	event.preventDefault();
	location.reload();
});

// Initially, hide the loading indicator
document.getElementById('loading').style.display = 'load';
console.log(audio);
