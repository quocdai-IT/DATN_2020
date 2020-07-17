module.exports =async (req, res, next) => {
    try {
    const getLichThiByEmail = require('../../common/getMssvByEmail')
    const results = await getLichThiByEmail();
    // const email = results.map(items => console.log(items));
    const sendMail = require('../../sendMail/sendMail')
    sendMail(results)
    
res.success(results);
    } catch (error) {
        console.log(error);
        res.serverError(error)
    }
}