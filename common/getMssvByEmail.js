const MailRepository = require('../repositories/mail-repository');
const LichThiRepository = require('../repositories/lichThi-repository');
const sendMail = require('../sendMail/sendMail');

async function getMail() {
  try {
    const mailRepository = new MailRepository();
    const mail =await mailRepository.findAll();
    return mail;
  } catch(error){
    console.log(error)
  }
}

// async function getLichThi(mssv) {
//   try {
//     const lichThiRepository = new LichThiRepository();
//     const lichThi = await lichThiRepository.findBy({mssv})
//     return lichThi; 
//   } catch (error) {
//     console.log(error)
//   }
// }

async function getLichThiByEmail() {
  try {
    const lichThiRepository = new LichThiRepository();
    const emails = await getMail();
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
module.exports = getLichThiByEmail;