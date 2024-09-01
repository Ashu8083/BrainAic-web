document.addEventListener('DOMContentLoaded', async function() {
    const video = document.getElementById('webcam');

    async function startWebcam() {
        try {
            // Request access to the user's webcam
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            // Set the video source to the webcam stream
            video.srcObject = stream;
            video.play(); // Ensure the video is playing
        } catch (error) {
            console.error('Error accessing webcam:', error);
        }
    }

    startWebcam();
});

// Make the webcam container draggable
const webcamContainer = document.getElementById('webcamContainer');

webcamContainer.style.position = 'absolute'; // Ensure container is absolutely positioned

webcamContainer.addEventListener('mousedown', function (event) {
    // Get the initial mouse position relative to the container
    const shiftX = event.clientX - webcamContainer.getBoundingClientRect().left;
    const shiftY = event.clientY - webcamContainer.getBoundingClientRect().top;

    function moveAt(pageX, pageY) {
        // Move the container to the new position
        webcamContainer.style.left = pageX - shiftX + 'px';
        webcamContainer.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // Attach the mousemove event to the document
    document.addEventListener('mousemove', onMouseMove);

    webcamContainer.addEventListener('mouseup', function () {
        // Remove the mousemove event when mouse button is released
        document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });

    // Prevent default drag behavior
    webcamContainer.ondragstart = function () {
        return false;
    };
});
