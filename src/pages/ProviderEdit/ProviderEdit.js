import React, {useContext, useEffect, useState} from "react";
import Input from "../../Components/Input/Input.js";
import styles from "./ProviderEdit.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";

import {Context} from '../../SessionContext';


function ProviderEdit() {
  const {session} = useContext(Context)
  const [data, setData] = useState({})

  useEffect(() => {
    ( async () => {
      const data = await fetch(`http://localhost:3333/provider/${session.provider}`).then(data => data.json())
      setData(data)
    })()
  },[session.provider])

  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
          <div className={styles.div}>
              <h2 className={styles.h2}>
                  Seja bem-vindo!!<br/>
                  <span className={styles.span}>{data.name}</span>
              </h2>

              <form className={styles.form}>
                  <Input title="Nome" type="text" name="name" percWidth="100%" >{data.name}</Input>
                  <Input title="CNPJ" type="text" name="cnpj" percWidth="50%" >{data.cnpj}</Input>
                  <Input title="Telefone" type="text" name="phone" percWidth="50%" >{data.phone}</Input>
                  <Input title="Razão Social" type="text" name="company_name" percWidth="100%" >{data.company_name}</Input>
                  <Input title="Endereço" type="text" name="address" percWidth="100%" >{data.address}</Input>

                  <SubmitButton text="Confirmar" minWidth='250px' marginTop='50px' />
              </form>
          </div>
      </div>
    </div>
  );
}

export default ProviderEdit