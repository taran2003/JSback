const authServices = require("../services/authServices");
const authRepositories = require("../repositories/authRepositories")


const login = async (req,res)=> {
  const {login,password} = req.body;
  if(!login||!password){
    res.status(400).send("Login or password not found");
    return;
  }
  const user = await authRepositories.verifyLogin({login,password});
  if(!authServices.confirmPassword(password,user)) {
    res.status(401).send("invalid login or password");
    return;
  }
  const data = authServices.login(user);
  res.send(data);
};

const register = (req,res)=>
{
  const {login,password} = req.body;
  if(!login||!password){
    res.status(400).send("Login or password not found");
    return;
  }
  authRepositories.write({login, password}).then(authRepositories.disconnect);
  res.send({login,password});
};

const refresh = async (req,res)=>
{
  const {login,password,accessToken,refreshToken,newLogin,newPassword} = req.body;
  const id = authServices.parseId({accessToken,refreshToken});
  console.log(id);
  const userById = await authRepositories.verifyId(id);
  const userByLogin = await authRepositories.verifyLogin({login,password})
  if(!userById || !userByLogin) {
    res.status(404).send("not found")
    return;
  }
  console.log(userById);
  console.log(userByLogin);
  if(!authServices.confirmId(userByLogin,userById)) {
    res.status(406).send("access denied")
    return;
  }
  await authRepositories.update({login,newLogin,password,newPassword});
  res.send("successes");
};

module.exports = {
  login,
  register,
  refresh
}