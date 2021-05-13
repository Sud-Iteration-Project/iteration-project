const fetch = require("node-fetch");

fetch("https://priaid-symptom-checker-v1.p.rapidapi.com/body/locations?language=en-gb", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "96397cee57mshe782cebc95f4ef7p199d0bjsn0b08901af927",
		"x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});




// const http = require("https");

// const options = {
// 	"method": "GET",
// 	"hostname": "priaid-symptom-checker-v1.p.rapidapi.com",
// 	"port": null,
// 	"path": "/symptoms?language=en-gb&format=json",
// 	"headers": {
// 		"x-rapidapi-key": "i2XJz_GMAIL_COM_AUT",
// 		"x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
// 		"useQueryString": true
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();