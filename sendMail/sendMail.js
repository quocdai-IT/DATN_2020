var nodemailer = require('nodemailer');
const moment = require('moment')
const getLichThiByEmail = require('../common/getMssvByEmail')
const _ = require('lodash');
async function sendMailAction(name,email,tdHtml) {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nqdai2904@gmail.com',
      pass: 'ns29041997'
    }
  });
  console.log(tdHtml.join(''));
  var mailOptions = {
    from: 'nqdai2904@gmail.com',
    to: email,
    subject: '[UTC2] Reminder Exam Schedule',
    html: `
      <h4>Chào ${name}</h4>
      <p>Bạn còn nhớ hay bạn đã quên? Thời gian trong vòng vài ngày tới bạn có lịch thi cho các lớp học phần sau nè!</p>
      <p>Nhớ đi thi đúng ngày đúng giờ nha</P>
      <p>Chúc bạn một kì thi thành công <3</p>
      <table style="width:100%"  class="w3-table"">  
      <tr>
          <th>Lớp Học Phần</th>
          <th>Ngày Thi</th>
          <th>Giờ Thi</th>
          <th>Phòng Thi</th>
      </tr>
      ${tdHtml.join('')}
  </table>`
  };

  try {
    return transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  
  } catch (error) {
    console.log(error);
  }
}
module.exports =async function sendMail() {
    const licthis = await getLichThiByEmail(); 
    let today = moment().format('YYYY-MM-DD')
    let dayThi;
    let daySendMail;
    let data = _.groupBy(licthis, 'email')
    let checkEmail = 0;
    for(const sv in data) {
    let tdHtml = [];
    let name 
    let emails = [];
      data[sv].forEach(item => {
            dayThi = moment(item.ngayThi).format('YYYY-MM-DD');
            daySendMail = moment(item.ngayThi).add(-3,'days').format('YYYY-MM-DD');
           
            if(daySendMail === today) {
              let subHtml = `<tr><td>${item.lopHocPhan}</td><td>${item.ngayThi}</td><td>${item.giothi}</td><td>${item.phongThi}</td></tr>`
              tdHtml.push(subHtml);
              emails.push(item.email)
              name = item.name;
            }
           
        })
        sendMailAction(name, emails, tdHtml)
    }
}
