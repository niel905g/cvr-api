let http = require('http');


function hentData(firmanavn, callback) {
    let url = "/api?search=" + encodeURI(firmanavn) + "&country=DK";

    const options = {
        hostname: 'cvrapi.dk',
        path: url,
        headers: { 'User-Agent': 'hello fm niel905g' }
    }

    http.get(options, (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received.
        resp.on('end', () => {
            let coData = JSON.parse(data);
            callback(coData);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
exports.returnByName = hentData;
