const authServices = require("../services/authServices");


const refreshTokenKey = process.env.JWT_REFRESH_KEY;
const accessTokenKey = process.env.JWT_ACCESS_KEY;

const login = (req,res)=>
{
  const {login,password} = req.body;
  if(!login||!password){
    res.status(400).send("Login or password not found");
    return;
  }

  const data = authServices.login({login,password});
  res.send(data);
};

const register = (req,res)=>
{
    //const {login,password} =req.body
};

const refresh = (req,res)=>
{
    //const {login,password} =req.body
};

module.exports = {
  login,
  register,
  refresh
}