const {products} = require("../models");

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows } = data;
    const totalPages = Math.ceil(totalItems / limit);
    return { totalItems, rows, totalPages, currentPage: page ? page : 1 };
};

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
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);
        const data = await products.findAndCountAll({ offset, limit });
        const response = getPagingData(data, page, limit);
        return res.status(200).send(response);  
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