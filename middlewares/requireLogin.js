module.exports = (req,res,next) =>{

  if(!('admin' in req.headers)){
      return res.status(401).send({error: '-2', description:`ruta ${req.originalUrl} metodo ${req.method} no implementada `});
  }
  next();
}