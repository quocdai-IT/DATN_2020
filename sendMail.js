var nodemailer = require('nodemailer');

const datatest =  [
    {
        id: "a3a588f3-c4b9-11ea-841c-b702e86f4df3",
        name: "Dương Quốc Bảo",
        mssv: "5251014005",
        lop: "Cầu đường bộ 1 K52",
        ngayThi: "2020-07-17 17:00:00",
        phongThi: "P104C2",
        lopHocPhan: "Những nguyên lý cơ bản của CN Mác-Lênin F2-2-19-HL",
        giothi: "1-2",
       
    },
    {
        id: "a3a588f4-c4b9-11ea-841c-b702e86f4df3",
        name: "Dương Quốc Bảo",
        mssv: "5251014005",
        lop: "Cầu đường bộ 1 K52",
        ngayThi: "2020-07-19 17:00:00",
        phongThi: "P301C2",
        lopHocPhan: "Những nguyên lý cơ bản của CN Mác-Lênin F1-2-19-HL Lớp 1",
        giothi: "3-4",
      
    } ]
let tdHtml =[] ;
datatest.forEach(item => {
    let subHtml = `<tr><td>${item.lopHocPhan}</td><td>${item.ngayThi}</td><td>${item.giothi}</td><td>${item.phongThi}</td></tr>`
    tdHtml.push(subHtml);
})
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

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});