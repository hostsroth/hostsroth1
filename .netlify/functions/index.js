exports.handler = async function(event, context) {
  const pg = require('pg');
  const conString = "postgres://pkqsbedc:CxPicJdBE6x4gh_rEyNurjkLf5awPMzF@batyr.db.elephantsql.com/pkqsbed";
  const client = new pg.Client(conString);
  client.connect(function(err) {
    return {
      statusCode: 200,
      body: err
    }
  });
}
