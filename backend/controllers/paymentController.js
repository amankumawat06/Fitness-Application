const razorpay = require("../config/razorpay")
const { status } = require("http-status")

exports.createOrder = async (req,res) => {
    try{
        let options = {
            amount: 1 * 100,  //1 paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        }

    let order = await razorpay.orders.create(options)

    return res.status(status.OK).json({
        success:true,
        message:"Order created successfully!",
        orderId: order.id,
        amount: order.amount,
        currency: order.currency
    })

    }catch(err){
        return res.status(status.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Order creation failed",
        }) 
    }   
}
