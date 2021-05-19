const {order} = require("../models");

const add = async (req,res) => {
    try {
        const {name, amount} = req.body;
        const record = await order.create({
            orderName : name,
            orderAmount: amount
        });
        return res.status(200).json(record);
    } catch(e){
        return res.status(400).json(e);
    }
};

const update = async (req, res) => {
    try{
        const data = await order.update(req.body, {
            where:{orderId: req.params.id},
        });
        return res.status(200).send({message: data !==1 ? "Successfully updated" : "Updation failed"});
    } catch(e){
        return res.status(400).json(e.message);
    }
};


const remove = async (req,res) => {
    try{
        const count = await order.destroy({
            where: { orderId: req.params.id}
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
        const data = await order.findAll();
        return res.status(200).send(data);  
    } catch(e){
        return res.status(400).json(e.message);
    }
};




module.exports = {
    add,
    getAll,
    remove, 
    update,
}