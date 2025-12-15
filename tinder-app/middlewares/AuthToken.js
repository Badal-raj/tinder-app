const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.JWT_SECRET;

const GenerateToken = (args) =>{
  return jwt.sign(args, SECRET_KEY, { expiresIn: "2h" })
}

const AuthenticateUser = async(req, res, next) =>{
  try {
     const token = req.headers['authorization']?.split(' ')[1];
  if(!token){
    res.status(200).json({message: "not authorised, Please login or signup"})
  }
  await jwt.verify(token, SECRET_KEY,(err, decode)=>{
    if(err){
      res.status(400).json({message: "Invalid or Expired token"})
    }
    req.user = decode;
  })
   next()
  } catch (error) {
     res.status(400).json({message: error.message});
  }
 
}

module.exports ={
    GenerateToken,
    AuthenticateUser
}