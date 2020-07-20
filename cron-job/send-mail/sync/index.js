const sendMail = require("../../../sendMail/sendMail");

async function sync() {
  try {
    let send = await sendMail();
    if(send === false) {
        console.log('No recipients defined');
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = sync;
