const {payment} = require("../models");

const checkStatus = async (req, res) => {
    try{
        const {ready} = req.body;
        const data = await payment.findOne({where : {paymentReady: ready}});
        let message = data.paymentReady;
        if(message === "pending"){
            message = "completed"
        }
        return res.status(200).json({message})
    } catch(e) {
        return res.status(400).json(e);
    }
}

module.exports = {
    checkStatus
}