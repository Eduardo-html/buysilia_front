import React from "react";
import Input from "../../Components/Input/Input.js";
import styles from "./ClientEdit.module.css";
import SideHeader from "../../Components/SideHeader/SideHeader";
import SubmitButton from "../../Components/SubmitButton/SubmitButton";
import PhotoPerfil from '../../Components/PhotoPerfil/PhotoPerfil';

function ClientEdit() {
  return (
    <div className={styles.body}>
      <SideHeader />
      <div className={styles.container}>
        <div className={styles.div}>
          <h2 className={styles.h2}>Seja bem vindo!</h2>

          <PhotoPerfil />

          <form className={styles.form}>
            <Input title="Nome" type="text" name="name" percWidth="100%" />
            <Input title="CPF" type="text" name="cpf" percWidth="50%" />
            <Input title="Celular" type="text" name="phone" percWidth="50%" />
            <Input title="Email" type="email" name="email" percWidth="100%" />
            <Input
              title="Senha"
              type="password"
              name="password"
              percWidth="50%"
            />
            <Input
              title="Confirmação de Senha"
              type="password"
              name="password2"
              percWidth="50%"
            />
            <Input
              title="Endereço"
              type="text"
              name="address"
              percWidth="100%"
            />
            <SubmitButton text="Confirmar" minWidth="250px" marginTop="50px" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClientEdit;