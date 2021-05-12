const {orderDetails} = require("../models");


const update = async (req, res) => {
    try{
        const data = await orderDetails.update(req.body, {
            where:{detailsId: req.params.id},
        });
        return res.status(200).send({message: data !==1 ? "Successfully updated" : "Updation failed"});
    } catch(e){
        return res.status(400).json(e.message);
    }
};


const remove = async (req,res) => {
    try{
        const count = await orderDetails.destroy({
            where: { detailsId: req.params.id}
        }) 

        if(count ===1){
            return res.status(200).json({"message":"Successfully Deleted"});
        } else {
            return res.status(404).send();
        }
    } catch(e){
        return res.status(400).json(e.message);
    }
};

const getAll = async (req,res) => {
    try{
        const data = await orderDetails.findAll();
        return res.status(200).send(data);  
    } catch(e){
        return res.status(400).json(e.message);
    }
};

module.exports = {
    update,
    remove,
    getAll
}