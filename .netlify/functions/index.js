exports.handler = async function(event) {
  const pg = require('pg');
  const conString = "postgres://pkqsbedc:CxPicJdBE6x4gh_rEyNurjkLf5awPMzF@batyr.db.elephantsql.com/pkqsbed";
  const client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {console.log('err');}
  })
}
