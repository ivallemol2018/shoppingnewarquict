const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const { getUserByCriteria, createUser,getUserById } = require('../services/userServices')

passport.use('login', new LocalStrategy(
  async (username,password,done)=>{
    try{  

      const user = await getUserByCriteria({username})

      if(bcrypt.compareSync(password,user.password)) return done(null,user)

      return done(null,false, { message: 'user or password are incorrect'})

    } catch(error){

      return done(null,false, { message: 'user or password are incorrect'})
    }    
  }
))

passport.use('signup', new LocalStrategy({
    passReqToCallback : true
  },
  async (req,username,password,done)=>{
    try{  

      const {name,address,age,phone }  = req.body

      newUser = await createUser({username,
                                  name,
                                  address,
                                  age,
                                  phone,
                                  password: bcrypt.hashSync(password,bcrypt.genSaltSync(10))
                                })
                        
      return done(null,newUser)

    } catch(error){
      return done(null,false,{ message: 'user already exists'})
    }    
  }
))

passport.serializeUser((user,done)=>{
  done(null,user._id)
})

passport.deserializeUser(async (id,done)=>{
  try{
    const user = await getUserById(id,done)
    if(user) return done(null,user)  
    done('No exists user',null)
  }catch(error){
    return done(error,false)
  }
  
})

module.exports = passport