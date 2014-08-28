module.exports = function(app) {
	app.get("/", function (req, res){
		var database = "myo_meetup";
		var host = "http://rafamelo12.cloudant.com";
		var cradle = require('cradle');
		var c = new(cradle.Connection)(host, 443, {
			// auth: {username: 'ationdsitedownsallationc', password: 'N0o2Y1IrvW4khxNmkHPO0leL'} - myocapture API
			auth: {username: 'sweenythearionedgessides', password: 'I8LmdhF8dKwrGIACdFw3YlGa'}
		});
		var db = c.database(database);
		var chartsNumbers = [];
		var chartTimes = [];
		var i = 0;
		db.all({include_docs: true, ascending: true}, function (err, alldocs){
			// console.log(alldocs);
			alldocs.forEach(function (row){
				chartsNumbers[i] = row.chartNumber;
				chartTimes[i] = row.time;
				// console.log("You have spent "+chartTimes[i]+" on chart number "+chartsNumbers[i]);
				i++;
			});
			res.render('index.ejs', {
				chartsNumbers: chartsNumbers,
				chartTimes: chartTimes
			});
		});
		
	});
	app.post
}