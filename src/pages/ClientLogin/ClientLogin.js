import React, { useContext,  useState } from "react";
import {useHistory} from 'react-router-dom';

import Input from "../../Components/Input/Input.js";
import styles from "./ClientLogin.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";

import { Context } from '../../SessionContext'

function ClientLogin() {
  const { handleLoginProvider } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()


  const checkLogin = async (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: password
    }

    const clientID = await fetch('http://localhost:3333/login/client', { method: 'POST',
                      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
                      body: JSON.stringify(body), mode: 'cors', cache: 'default' })
                        .then(data => data.json())
                        .then((row) => {
                          handleLoginProvider(row.client_id)                          
                          return row.client_id                          
                        }).catch((err)=>{
                          console.log(err)
                        })
    
    if(clientID>0){
      history.push('/edit/client')
    }   
    
  }

  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>
            Olá!! <br />
            Faça seu login
          </h2>
          <form className={styles.form} onSubmit={checkLogin}  >
            <Input title="Email" type="text" name="email" percWidth="70%" setField={setEmail} />
            <Input title="Senha" type="password" name="password" percWidth="70%" setField={setPassword} />
            
            <SubmitButton text="Entrar" minWidth='250px' marginTop='50px' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientLogin;