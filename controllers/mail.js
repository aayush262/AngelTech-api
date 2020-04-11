const sendMail = require('./../utils/sendMail');

module.exports={
    postMail:async(req,res,next)=>{
        try{
            const {
                firstName,
                lastName,
                email,
                message
            } = req.body;

            const html = `<div link="#c6d4df" alink="#c6d4df" vlink="#c6d4df" text="#c6d4df" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;color:#c6d4df">
            <table style="width:538px;background-color:#393836" align="center" cellspacing="0" cellpadding="0">
                <tbody><tr>
                    <td style="height:65px;background-color:#000000;border-bottom:1px solid #4d4b48">
                          Angel Tech Web
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#17212e">
                        <table width="470" border="0" align="center" cellpadding="0" cellspacing="0" style="padding-left:5px;padding-right:5px;padding-bottom:10px">
            
                            <tbody><tr bgcolor="#17212e">
                                <td style="padding-top:32px">
                                <span style="padding-top:16px;padding-bottom:16px;font-size:24px;color:#66c0f4;font-family:Arial,Helvetica,sans-serif;font-weight:bold">
                                    Dear Dipanker,
                                </span><br>
                                </td>
                            </tr>
                            
                            <tr>
                                <td style="padding-top:12px">
                                <span style="font-size:17px;color:#c6d4df;font-family:Arial,Helvetica,sans-serif;font-weight:bold">
                                    <p>Here is the message from your website</p>
                                </span>
                                </td>
                            </tr>
            
            
                            <tr>
                                <td>
                                    <div>
                                        <span style="font-size:12px;color:#66c0f4;font-family:Arial,Helvetica,sans-serif;font-weight:bold">POWERED BY SACK THE SENDER.</span>
                                    </div>
                                </td>
                            </tr>
            
            
                            <tr bgcolor="#121a25">
                                <td style="padding:20px;font-size:12px;line-height:17px;color:#c6d4df;font-family:Arial,Helvetica,sans-serif">
                                        <p style="padding-bottom:10px;color:#c6d4df">The user entered the following information.  <span style="color:#ffffff;font-weight:bold">FirstName: ${firstName} LastName: ${lastName}</span></p>
                                        <p style="padding-bottom:10px;color:#c6d4df"><span style="color:#ffffff;font-weight:bold">${email}</span> is the provided email.</p>
                                        <p style="padding-top:10px;color:#61696d">User Message: <span style="color:#ffffff;font-weight:bold">${message}</span>.</p>
                                </td>
            
                            </tr>
            
            
                            <tr>
                                <td style="font-size:12px;color:#6d7880;padding-top:16px;padding-bottom:60px">
                                            The Angel Tech Team<br>
                                            <a style="color:#8f98a0" href="https://google.com" target="_blank" >https://angeltech.com</a><br>
                                </td>
                            </tr>
            
                        </tbody></table>
                    </td>
                </tr>
              
            </tbody></table><div class="yj6qo"></div><div class="adL">
            
            </div></div>`
            await sendMail({
                email:'angeltechnepal@gmail.com',
                subject:'From AngelTech Website',
                html
            })
            res.status(201).json({
                data: 'email sent succesfully'
            })
        }catch(err){
            res.status(401).json({
                data: err
            })
        }
    }
}