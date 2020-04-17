const { GoogleSpreadsheet } = require('google-spreadsheet');
const moment = require('moment');
module.exports = async(options)=>{
    try{
        const doc = new GoogleSpreadsheet(process.env.spreadsheetId);
        await doc.useServiceAccountAuth({
            client_email: process.env.client_email,
            private_key: process.env.private_key
          });
        
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        var cAt= moment(Date.now()).format('YYYY-MM-DD');
        await sheet.addRow({
            FirstName: options.firstName,
            LastName: options.lastName,
            Email: options.email,
            Message: options.message,
            CreatedAt: cAt
        })
    }catch(err){
        console.log(err);
    }
}