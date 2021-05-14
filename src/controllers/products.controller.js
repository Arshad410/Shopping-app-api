const {products} = require("../models");

const add = async (req,res) => {
    try {
        const record = await products.create({...req.body});
        return res.status(200).json(record);
    } catch(e){
        return res.status(400).json(e);
    }
};

const update = async (req, res) => {
    try{
        const data = await products.update(req.body, {
            where:{productId: req.params.id},
        });
        return res.status(200).send({message: data !==1 ? "Successfully updated" : "Updation failed"});
    } catch(e){
        return res.status(400).json(e.message);
    }
};


const remove = async (req,res) => {
    try{
        const count = await products.destroy({
            where: { productId: req.params.id}
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
        const data = await products.findAll();
        return res.status(200).send(data);  
    } catch(e){
        return res.status(400).json(e.message);
    }
};


const getById = async (req,res) => {
    try{
        const data = await products.findByPk(req.params.id);
        if(data){
            return res.status(200).send(data);
        } else {
            return res.status(204).send();
        }
        
    } catch(e){
        res.status(400).json(e.message);
    }
};

const bulkInsert = async (req, res) => {
    try {
        await products.bulkCreate(req.body);
        return res.status(200).json({ message: "Success" });
    } catch(e) {
        return res.status(400).json(e);
    }
};

module.exports = {
    add,
    getAll,
    getById,
    remove, 
    update,
    bulkInsert
}