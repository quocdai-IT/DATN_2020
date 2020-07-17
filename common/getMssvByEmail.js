const MailRepository = require('../repositories/mail-repository');
const LichThiRepository = require('../repositories/lichThi-repository');
const sendMail = require('../sendMail/sendMail');
const lichThi = require('../models/lichThi');
const { groupBy } = require('lodash');

async function getMail() {
  try {
    const mailRepository = new MailRepository();
    const mail =await mailRepository.findBy({});
    return mail;
  } catch(error){
    console.log(error)
  }
}

async function getAllLichThi () {
  try {
    const lichThiRepository = new LichThiRepository();
    const results = await lichThiRepository.findBy({});
    return results;
    
  } catch (error) {
    console.log(error)
  }
}

async function getLichThiByEmail(emails) {
  try {
    const lichThiRepository = new LichThiRepository();
    let promises = [];
    emails.forEach(email => {
      promises.push(lichThiRepository.findBy({mssv: email.mssv}))
    })
    const result = await Promise.all(promises)
    return result;
  } catch (error) {
    console.log(error)
  }
}

// async function mapping
async function linkEmail() {
  const _ = require('lodash');
  const emails = await getMail();
  const licthis = await getAllLichThi();

  let data = [];
  _.forEach(emails, email => {
    _.forEach(licthis, licthi => {
      if(email.mssv === licthi.mssv) {
        data.push({
          email: email.email,
          name: licthi.name,
          lopHocPhan: licthi.lopHocPhan,
          ngayThi: licthi.ngayThi,
          giothi: licthi.giothi,
          phongThi: licthi.phongThi,
          mssv: email.mssv
        })
      }
    })
  })

 return data
  
}
module.exports = linkEmail;