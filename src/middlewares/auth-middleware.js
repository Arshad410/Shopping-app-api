const jwt = require("jsonwebtoken");
const {SECRET_KEY} = require("../config");
const checkIfToBeSkipped = require("../utils/skip-urls.util");

module.exports = function(req,res,next) {
    if(checkIfToBeSkipped(req)){
        next(); 
    }

    else {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, SECRET_KEY);
            console.log("Decoded token", decoded);

            res.locals.user = { id: decoded.subject};
            next();
        } catch(err) {
            return res.status(401).send({message: "UNAUTHORISED ACCESS"});
        }
    }
};