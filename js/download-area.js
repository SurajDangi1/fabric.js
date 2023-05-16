
document.getElementById('download-btn').addEventListener('click', downloadCanvas);

function downloadCanvas() {
  // Get the canvas element
  var canvas = document.getElementById('drawingArea');

  // Create a temporary download link
  var link = document.createElement('a');
  link.download = 'canvas.png';
  link.href = canvas.toDataURL("image/png");

  // Click the link to download the image
  link.click();
}

// Define the area of the page to capture
// const areaToCapture = document.getElementById('drawingArea');
// const x = 0; // X position of the top-left corner of the area
// const y = 0; // Y position of the top-left corner of the area
// const width = areaToCapture.offsetWidth; // Width of the area
// const height = areaToCapture.offsetHeight; // Height of the area

// Create a canvas element
// const canvas = document.createElement('canvas');
// canvas.width = width;
// canvas.height = height;

// Draw the area onto the canvas
// const context = canvas.getContext('2d');
// context.drawImage(areaToCapture, x, y, width, height, 0, 0, width, height);

// Download the canvas
// Download the canvas with MIME type
// const downloadBtn = document.getElementById('downloadBtn');
// downloadBtn.addEventListener('click', () => {
//   const dataUrl = canvas.toDataURL('image/png');

//   const link = document.createElement('a');
//   link.href = dataUrl;
//   link.download = 'area.png';
//   document.body.appendChild(link);
//   link.click();
// });
