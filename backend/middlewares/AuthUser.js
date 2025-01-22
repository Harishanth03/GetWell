import jwt from 'jsonwebtoken'; //import jwt to generate token

//============================================== Admin authendication middleware =============================================

const AuthUser = async(req , res , next) => {

    try 
    {

        const {token} = req.headers; //get the token from the headers

        if(!token) 
        {

            return res.json({success: false , message: "Access Denied"}); //if no token is provided then return this message

        }

        const tokenDecode = jwt.verify(token , process.env.JWT_SECRET); //verify the token

        req.body.userId = tokenDecode.id

        next(); //if token is valid then call the next middleware
        
    } catch (error) 
    {

        console.log(error);

        res.json({success: false , message: error.message}); 
        
    }
}

export default AuthUser; //export the middleware