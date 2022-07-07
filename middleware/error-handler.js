const {CustomAPIError} = require('../errors/custom-error') 
const errorHandlerMiddleware = (err,req,res,next) => {
    // console.log(err);
    // return res.status(500).json({msg:err})
    // return res.status(err.status).json({msg:err.message})
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg:err.message})
    }
    // return res.status(err.status).json({msg:err.message})
    return res.status(500).json({msg:'Something wet wrong, please try again!'})
}

module.exports = errorHandlerMiddleware 