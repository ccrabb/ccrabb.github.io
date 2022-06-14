const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const webcam = new Webcam(webcamElement, 'user', canvasElement);

setTimeout(() => {
    webcam.start()
        .then(result => {
            console.log('webcam started');
        })
        .catch(err => {
            console.error(err);
        });
}, 500);