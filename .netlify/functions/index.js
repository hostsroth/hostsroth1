const pg = require('pg');
exports.handler = async function(event, context) {
    const conString = "postgres://pkqsbedc:CxPicJdBE6x4gh_rEyNurjkLf5awPMzF@batyr.db.elephantsql.com/pkqsbedc";
    const client = new pg.Client(conString);
    client.connect(function(err) {
        if(err) {
            return {
                body: "could not connect to postgres"
            }
        }
    }
}
