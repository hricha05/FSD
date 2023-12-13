exports.getdefault = (req, res) => res.send('Hello APPSDBA !!!');
exports.addemployee = (req, res) => {
	let empName = req.body.empName;
	let empPass = req.body.empPass;
	res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);
};
exports.getaboutus = (req, res) => res.send('You are on the about us route');
exports.getemployees = (req, res) =>
	res.send(' You are on the employees route');
