var nodemailer = require('nodemailer');


module.exports = function sendMail(data) {

    const tdHtml = [];
    data.forEach(items => {
      items.forEach(item => {
        let subHtml = `<tr><td>${item.lopHocPhan}</td><td>${item.ngayThi}</td><td>${item.giothi}</td><td>${item.phongThi}</td></tr>`
        tdHtml.push(subHtml);
      })
    })
    console.log(tdHtml);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nqdai2904@gmail.com',
        pass: 'ns29041997'
      }
    });

var mailOptions = {
  from: 'nqdai2904@gmail.com',
  to: 'nqdai1997@gmail.com',
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

return transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}
