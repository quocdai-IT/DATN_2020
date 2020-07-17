var nodemailer = require('nodemailer');
const moment = require('moment')


module.exports = function sendMail(data) {

    const tdHtml = [];
    let emails = [];
    let today = moment().format('YYYY-MM-DD')
    let dayThi;
    let daySendMail;
    data.forEach(item => {
        dayThi = moment(item.ngayThi).format('YYYY-MM-DD');
        daySendMail = moment(item.ngayThi).add(-3,'days').format('YYYY-MM-DD');
        if(daySendMail === today) {
          let subHtml = `<tr><td>${item.lopHocPhan}</td><td>${item.ngayThi}</td><td>${item.giothi}</td><td>${item.phongThi}</td></tr>`
          tdHtml.push(subHtml);
          emails.push(item.email)
        }
    })
console.log(tdHtml);
console.log(emails);

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nqdai2904@gmail.com',
        pass: 'ns29041997'
      }
    });

var mailOptions = {
  from: 'nqdai2904@gmail.com',
  to: emails,
  subject: 'UTC2 Remind',
  html: `<table style="width:100%"  class="w3-table"">  
    <tr>
        <th>Lớp Học Phần</th>
        <th>Ngày Thi</th>
        <th>Giờ Thi</th>
        <th>Phòng Thi</th>
    </tr>
    ${tdHtml.join('')}
 </table>`
 
 
};
// return true

return transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
