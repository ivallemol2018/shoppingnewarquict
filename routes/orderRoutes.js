const express = require('express')
const sendEmail = require('../utils/email')
const sendWhatapp = require('../utils/twilio')

const { Router } = express

const router = Router()

router.post('/',(request,response)=>{
    try{
      const { buyer,products} = request.body

      sendEmail(request.body,'Resumen Orden','email.order.template.ejs',buyer.username)

      const message = `Hola ${buyer.name} .Gracias por comprar con nosotros. Te enviaremos una confirmación cuando tu artículo se envíe.`

      sendWhatapp(message,buyer.phone)

      response.status(200).json({message:'successful'})
      
    }catch(error){
   
      return response.status(500).json({errors:[error]})
    }
  })

module.exports=router;