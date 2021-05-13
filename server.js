require("./src/handlers/error-handler");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./src/models");
const {productRouter, userRouter, orderRouter, orderDetailsRouter, paymentRouter, addressRouter} = require("./src/routes");
const authMiddleware = require("./src/middlewares/auth-middleware");
const PORT_NUMBER = 3000;

const ecomm = express();

ecomm.use(cors());
ecomm.use(helmet());
ecomm.use(morgan("dev"));
ecomm.use(authMiddleware);
ecomm.use(express.json());
ecomm.use(express.urlencoded({ extended:true })); 

db.sequelize.sync();

ecomm.use("/products", productRouter);
ecomm.use("/auth", userRouter);
ecomm.use("/order", orderRouter);
ecomm.use("/orderDetails", orderDetailsRouter);
ecomm.use("/payment", paymentRouter);
ecomm.use("/address", addressRouter);

ecomm.listen(PORT_NUMBER, (error) => {
    if(error){
        throw error;
    } else {
        console.log(`Server has started running at http://localhost:${PORT_NUMBER}`);
    }
});