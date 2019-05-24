'use strict';

const request = require('request');

var NodeWebcam = require('node-webcam');

var opts = {
	width: 1280,
	height: 720,
	quality: 100,
	delay: 0,
	saveShots: true,
	output: 'jpeg',
	device: false,
	callbackReturn: 'buffer',
	verbose: false,
};

var Webcam = NodeWebcam.create(opts);

Webcam.capture('test', function(err, data) {
	if (err) console.error(err);
	else {
		const subscriptionKey = '5db9662670c64e769d12742ff3dddfa6';

		const imageBuffer = data;

		const uriBase =
			'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

		const params = {
			returnFaceId: 'true',
			returnFaceLandmarks: 'false',
			returnFaceAttributes: 'age,gender,emotion',
		};

		const options = {
			uri: uriBase,
			qs: params,
			body: imageBuffer,
			headers: {
				'Content-Type': 'application/octet-stream',
				'Ocp-Apim-Subscription-Key': subscriptionKey,
			},
		};

		request.post(options, (error, response, body) => {
			if (error) {
				console.log('Error: ', error);
				return;
			}
			let jsonResponse = JSON.stringify(JSON.parse(body), null, ' ');
			console.log('JSON Response\n');
			console.log(jsonResponse);
		});
	}
});
