const dbConnect = require('./../models/employee');
const client = dbConnect.myconnection;

exports.getdefault = (req, res) => res.send('Hello APPSDBA !!!');
exports.addemployee = (req, res) => {
	let empName = req.body.empName;
	let empPass = req.body.empPass;
	res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
};
exports.getaboutus = (req, res) => res.send('You are on the about us route');
exports.getemployees = function(req, res) {
	// res.send(' You are on the employees route')
	client.query('SELECT empName, empPass from ftemployees', (err, result) => {
		console.log("result!")
		res.send(result.rows);
		// client.end;
		// console.log("Client as disconnected")
	})
	client.end;
	console.log("Client as disconnected")
};
	