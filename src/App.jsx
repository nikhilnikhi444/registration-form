import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[Password,setPassword]=useState('')
  // for conditionally render
  const[isname,setIsName]=useState(true)
  const[isemail,setIsEmail]=useState(true)
  const[ispassword,setIsPassword]=useState(true)


  const ValidateName =(e)=>{
     const {name,value}= e.target
     console.log(name,value); 

    if(!!value.match(/^[A-Za-z]*$/)){
        if(name=='Name'){
          setName(value)
          setIsName(true)
        }
    }
    else{
      if(name=='Name'){
        setName(value)
        setIsName(false)
      }
    }

  }
  

  const ValidateEmail=(e)=>{
    const {name,value}= e.target
    console.log(name,value);
    if(!!value.match(/(?:.\.com)(?!.\.com)/)){
      if(name=='Email'){
        setEmail(value)
        setIsEmail(true)
      }else{

      }
    }else{
      if(name=='Email'){
        setEmail(value)
        setIsEmail(false)
      }
    }
  }
  
  const ValidatePassword=(e)=>{
    const {name,value}= e.target
    console.log(name,value);
    if(!!value.match(/^[0-9 A-Za-z@#$%!~&*]*$/)){
      if(name=='Password'){
        setPassword(value)
        setIsPassword(true)
      }
    }
    else{
      if(name=='Password'){
        setPassword(value)
        setIsPassword(false)
      }
    }
  }
  

  const handleclick =()=>{
    setName('')
    setEmail('')
    setPassword('')
    alert('user registered successfully')
  }
  
  const handleReset=()=>{
    setName('')
    setEmail('')
    setPassword('')
    
  }
  
  return (
    <>
     <div className='container'>
        <div className='main rounded p-4'>
          <h1 className='text-center text-primary mt-1'>Register</h1>

          <TextField id="outlined-basic" name='Name' value={name ||''} label="User Name" variant="outlined" className='mt-3 w-100' onChange={(e)=>ValidateName(e)} />
         {!isname && <p className='text-danger'>Invalid Input</p>}

          <TextField id="outlined-basic" name='Email' value={email || ''} label="Email" variant="outlined" className='mt-3 w-100' onChange={(e)=>ValidateEmail(e)} />
         {!isemail && <p className='text-danger'>Invalid Email</p>}

          <TextField id="outlined-basic" name='Password' value={Password ||''} label="Password" variant="outlined" type='password' className='mt-3 w-100' onChange={(e)=>ValidatePassword(e)} />
         {!ispassword && <p className='text-danger'>Invalid Input</p>}

          <Button variant="contained" className='mt-4 p-2 me-3 w-25 ' onClick={handleclick}  disabled={!(isname && isemail && ispassword && name !== '' && email !== '' && Password !== '')}>Register</Button>
          <Button variant="outlined" className='mt-4 p-2 w-25' onClick={handleReset} >reset</Button>
        </div>
     </div>
    </>
  )
}

export default App
