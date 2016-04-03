var nodemailer = require('nodemailer'),
	transporter = nodemailer.createTransport('smtps://priya.khandelwal.it@gmail.com:pass@smtp.gmail.com');

var mailOptions = {
	from: 'Priya Khandelwal <priya.khandelwal.it@gmail.com>',
	to: 'Priya Khandelwal <priya.khandelwal.it@gmail.com>',
	subject: 'Hello Priya',
	text: 'Sample email',
	html: '<b>Hello! how are you?</b>'
};
module.exports = {
	sendemail: function(req, res) {
		debugger;
		transporter.sendMail(mailOptions, function(err, info) {
			if(err) {
				debugger;
				res.send('Error sending email = %j', err); 
			} else {
				debugger;
				res.send('Mail sent successfully');
			}
		});
	}	
}
