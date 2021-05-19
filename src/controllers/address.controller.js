const {address} = require("../models");

const add = async (req,res) => {
    try {
        const {no, name, street, locality, city, state, pincode} = req.body;

        const record = await address.create({
            aptNo: no,
            aptName: name,
            street: street,
            locality: locality,
            city: city,
            state: state,
            pincode: pincode
        });
        return res.status(200).json(record);
    } catch(e){
        return res.status(400).json(e);
    }
};

const update = async (req, res) => {
    try{
        const data = await address.update(req.body, {
            where:{addressId: req.params.id},
        });
        return res.status(200).send({message: data !==1 ? "Successfully updated" : "Updation failed"});
    } catch(e){
        return res.status(400).json(e.message);
    }
};


const remove = async (req,res) => {
    try{
        const count = await address.destroy({
            where: { addressId: req.params.id}
        }) 

        if(count === 1){
            return res.status(200).json({"message":"Successfully Deleted"});
        } else {
            return res.status(404).send();
        }
    } catch(e){
        return res.status(400).json(e.message);
    }
};

module.exports = {
    add,
    update,
    remove
}