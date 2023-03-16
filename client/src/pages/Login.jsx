import React from 'react'
import { Button, Typography} from '@mui/material'
import { GoogleAuthProvider,signInWithPopup,getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
export default function Login() {
  const auth = getAuth();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginWithGoogle = async () => {
    
    const provider = new GoogleAuthProvider();
  
    
    const res = await signInWithPopup(auth,provider);
    
  
  };
  if (user?.uid){
    navigate('/');
    return;
  }


  return (
    <>
    <Typography variant='h5' sx={{marginBottom : '50px'}}>Welcome to NoteQH</Typography>
    <Button variant='contained' color='success' onClick={handleLoginWithGoogle}>Login</Button>
    </>
    )
}

