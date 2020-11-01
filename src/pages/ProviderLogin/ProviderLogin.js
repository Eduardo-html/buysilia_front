import React from "react";
import Input from "../../Components/Input/Input.js";
import styles from "./ProviderLogin.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";

function ProviderLogin() {
  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>
            Olá, fornecedor! <br />
            Faça seu login
          </h2>
          <form className={styles.form}>
            <Input title="CNPJ" type="text" name="user" percWidth="70%" />
            
            <SubmitButton text="Entrar" minWidth='250px' marginTop='50px' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProviderLogin;
