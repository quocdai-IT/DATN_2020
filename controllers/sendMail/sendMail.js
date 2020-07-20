module.exports =async (req, res, next) => {
    try {
    const sendMail = require('../../sendMail/sendMail')
    const sendmail = await sendMail();
    if(sendmail === false) {
     return res.success('no recipients defined');
    }
        return res.success("results");
    } catch (error) {
        console.log(error);
       return res.serverError(error)
    }
}