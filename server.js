const express = require('express');
const app = express();
const path = require('path');
const url = require('url');
const dropbox = require('dropbox');
const queryString = require('querystring');
const https = require('https');
const uuid = require('uuid/v4');
const hostname = 'https://sheltered-waters-25331.herokuapp.com/';
const port = 5000;
const PORT = process.env.PORT || 5000

app.use('/', express.static(__dirname +  '/'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

express()
    .use(express.static(path.join(__dirname, 'public')))
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => res.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))


/*
const server = app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

app.get('/grant', function (req, res) {
    csrfToken = uuid()

    var options = {
        hostname: 'www.dropbox.com/',
        pathname: 'oauth2/authorize',
        method: 'GET',
        query: {
            client_id: 'xcsyxzki8zccbsq',
            response_type: 'code',
            redirect_uri: 'http://192.168.1.68:3000/callback',
            state: csrfToken
        }
    };

    res.redirect(url.format(options))
});


app.get('/callback', function (req, res, next) {
    if(req.query.error)
        return res.end(res.query.error_description)

    if(req.query.state !== csrfToken)
        return res.end('Wrong CSRF token')

    var options = {
        hostname: 'api.dropboxapi.com',
        path: '/oauth2/token',
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }

    var bodyParams = queryString.stringify({
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: 'http://192.168.1.68:3000/callback',
        client_id: 'xcsyxzki8zccbsq',
        client_secret: 'idf872gpdckqdg4'
    });

    https.request(options, function(resp) {
        if (resp.statusCode !== 200)
            return res.end(resp.statusMessage)

        var creds = []

        resp.on('data', function (chunk) {
            creds.push(chunk)
        });

        resp.on('end', function () {
            res.end(creds.toString())
        })

    }).end(bodyParams)


});
*/


