import {asyncHandler} from "../utils/asyncHandler.js"


const registerUser = asyncHandler(async (req, res) => {
    req.status(200).json({
        message: "Ok"
    })
})


export {registerUser}