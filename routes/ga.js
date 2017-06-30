var express = require('express');
var router = express.Router();
var google = require('googleapis');
var analytics = google.analytics('v3');
var jwtClient = new google.auth.JWT(
  'api-project@api-project-277709028300.iam.gserviceaccount.com',
  'notasecret.pem',
  null,
  ['https://www.googleapis.com/auth/analytics.readonly'] //scope
);
jwtClient.authorize(function (err, tokens) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(tokens);
  }
})

router.get('/', function (req, res, next) {
  console.info("connecting to google analytics");
  analytics.data.ga.get({
    auth: jwtClient,
    'ids': 'ga:79229473',
    'metrics': 'ga:pageviews,ga:sessions,ga:bounceRate',
    'start-date': '2010-05-15',
    'end-date': '2017-06-15'
//  'dimensions': 'ga:browser,ga:country'
  }, function (err, response) {
    console.log(response.totalsForAllResults);
    return res.status(201).json(
      response.totalsForAllResults
    );
  });

});
module.exports = router;




