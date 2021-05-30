var pg = require('pg');
var conString = "postgres://pkqsbedc:CxPicJdBE6x4gh_rEyNurjkLf5awPMzF@batyr.db.elephantsql.com/pkqsbedc";
var client = new pg.Client(conString);
exports.handler = async function(event) {
        client.connect(function(err) {
        if(err) console.log('err');
    }
}
