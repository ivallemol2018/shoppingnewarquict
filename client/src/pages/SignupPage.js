import React,{useState} from 'react'
import { Link  } from 'react-router-dom'
import {Formik} from 'formik'
import { useCartContext } from '../context/CartContext'
import Thumb from '../components/Util/Thumb';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const SignupPage = () => {

  const { signup, error } = useCartContext();
  const [phone, setPhone] = useState()

  const onSubmit = (values) =>{

      //let formData = new FormData();

      //formData.append("image", values.file);
      //for (let value in values) {
      //  formData.append(value, values[value]);
      //}

      values = {...values,phone}
    
      signup(values)
  }

  return (
    <>
    <div className='bg-white h-screen w-screen flex flex-col justify-center items-center'>
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md">
        <div className="flex flex-col items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-2xl font-bold">Join us Now</h2>
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your credentials to get access account
        </div>
        <div className="mt-10">
        <Formik
            initialValues={{
                username:'',
                password:'',
                name:'',
                address:'',
                age: null,
                file: null,
            }}
            onSubmit={onSubmit}
        >
            {({values,handleSubmit,handleChange,setFieldValue})=>(
          <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-5">
                  <label for="username" className="mb-1 text-xs tracking-wide text-gray-600">Username</label>
                  <div className="relative">
                    <div
                      className="
                        inline-flex
                        items-center
                        justify-center
                        absolute
                        left-0
                        top-0
                        h-full
                        w-10
                        text-gray-400
                      "
                    >
                      <i className="fas fa-at text-blue-500"></i>
                    </div>                  
                    <input 
                      id="username"
                      className="
                            text-sm
                            placeholder-gray-500
                            pl-10
                            pr-4
                            rounded-2xl
                            border border-gray-400
                            w-full
                            py-2
                            focus:outline-none focus:border-blue-400
                            "
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      required
                      type="email"
                      placeholder="Enter your email"/>
                  </div>

              </div>

              <div className="flex flex-col mb-6">
                  <label for="password" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password</label>
                    <div className="relative">
                        <div className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-gray-400
                        ">
                          <span>
                            <i className="fas fa-lock text-blue-500"></i>
                          </span>
                        </div>                  
                        <input 
                        className="
                          text-sm
                          placeholder-gray-500
                          pl-10
                          pr-4
                          rounded-2xl
                          border border-gray-400
                          w-full
                          py-2
                          focus:outline-none focus:border-blue-400"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                        type="password"
                        placeholder="Enter your password"
                        />
                  </div>
              </div>

              <div className="flex flex-col mb-6">
                  <label for="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Name</label>
                    <div className="relative">
                        <div className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-gray-400
                        ">
                          <span>
                            <i className="fas fa-lock text-blue-500"></i>
                          </span>
                        </div>                  
                        <input 
                        className="
                          text-sm
                          placeholder-gray-500
                          pl-10
                          pr-4
                          rounded-2xl
                          border border-gray-400
                          w-full
                          py-2
                          focus:outline-none focus:border-blue-400"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Enter your name"
                        />
                  </div>
              </div>

              <div className="flex flex-col mb-6">
              <label for="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Phone</label>
                    <div className="relative">
                    {
                      <PhoneInput
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}/>
                    }  
                    </div>   
              </div>

              <div className="flex flex-col mb-6">
                  <label for="address" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Age</label>
                    <div className="relative">
                        <div className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-gray-400
                        ">
                          <span>
                            <i className="fas fa-lock text-blue-500"></i>
                          </span>
                        </div>                  
                        <input 
                        className="
                          text-sm
                          placeholder-gray-500
                          pl-10
                          pr-4
                          rounded-2xl
                          border border-gray-400
                          w-full
                          py-2
                          focus:outline-none focus:border-blue-400"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        required
                        type="number"
                        placeholder="Enter your age"
                        />
                  </div>
              </div>


              <div className="flex flex-col mb-6">
                  <label for="address" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Address</label>
                    <div className="relative">
                        <div className="
                          inline-flex
                          items-center
                          justify-center
                          absolute
                          left-0
                          top-0
                          h-full
                          w-10
                          text-gray-400
                        ">
                          <span>
                            <i className="fas fa-lock text-blue-500"></i>
                          </span>
                        </div>                  
                        <input 
                        className="
                          text-sm
                          placeholder-gray-500
                          pl-10
                          pr-4
                          rounded-2xl
                          border border-gray-400
                          w-full
                          py-2
                          focus:outline-none focus:border-blue-400"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Enter your address"
                        />
                  </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Cover photo</label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label for="file" cfileUploadlass="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                        <span>Upload a file</span>
                        <input id="file" name="file" type="file" class="sr-only" onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }}/>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                <Thumb file={values.file} />
              </div>

              <div className="mt-4 text-xl sm:text-sm text-red-500">
                { (typeof error.message === 'undefined') ? '' : error.message  }
              </div> 

              <div className="flex w-full">
                  <button 
                    className="
                      flex
                      mt-2
                      items-center
                      justify-center
                      focus:outline-none
                      text-white text-sm
                      sm:text-base
                      bg-blue-500
                      hover:bg-blue-600
                      rounded-2xl
                      py-2
                      w-full
                      transition
                      duration-150
                      ease-in"
                    type="submit">
                      <span className="mr-2 uppercase">Sign Up</span>
                      <span>
                        <svg className="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </span>
                  </button>              
              </div>
          </form>
            )}

          </Formik>
        </div>
        </div>
    <div className="flex justify-center items-center mt-6">
      <a
        href="#"
        target="_blank"
        className="
          inline-flex
          items-center
          text-gray-700
          font-medium
          text-xs text-center
        "
      >
        <span className="ml-2">You have an account?
          <Link to={'/login'}> 
          <span className="text-sm ml-2 text-blue-500 font-semibold">Login here</span>
          </Link>
      </span>
      </a>
    </div>    
</div>
</>
  )
}

export default SignupPage