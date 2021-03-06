import React, { useEffect, useState } from "react";
import styles from "./PhotoPerfil.module.css";

export default function PhotoPerfil(props) {
  const [photo, setPhoto] = useState(false);

  useEffect(() => {
    setPhoto(props.urlPhoto)
  },[props.urlPhoto])

  return (
    <div className={styles.div}>
      {photo ? (<img className={styles.img} src={photo} alt='Perfil'/>) : null}
      <div styles={{ display: "flex" }}>
        <p className={styles.p}>Adicionar Imagem</p>
        <p className={styles.p}>Remover Imagem</p>
      </div>
    </div>
  );
}
