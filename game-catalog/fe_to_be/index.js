const express = require('express');
const fetch = require('node-fetch')
const cors = require('cors')
const app = express();
const port = 8082
const host = 'https://www.freetogame.com'

app.use(cors())

app.get(/.*/, function (req, res) {
    console.log(`${host}${req.url}`);
    fetch(`${host}${req.url}`)
        .then(response => {
            console.log(req.url, req.url == '/favicon.ico');
            if (req.url == '/favicon.ico') {
                return []
            }
            return response.text()
        })
        .then(rawData => {
            try {
                return JSON.parse(rawData)
            } catch (err) {
                return []
            }
        })
        .then(data => {
            if (data.length == 0) {
                return {
                    code: 500,
                    message: 'Internal server error'
                }
            }
            return {
                code: 200,
                message: 'data successfully recovered',
                data: data
            }
        })
        .then(json => res.send(json))
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})