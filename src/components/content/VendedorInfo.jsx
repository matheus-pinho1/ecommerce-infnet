import React from 'react';
import styles from './VendedorInfo.module.css';

export default function VendedorInfo({ vendedor }) {

  const nome = vendedor.nome;
  const nota = vendedor.nota;
  const email = vendedor.email;
  const telefone = vendedor.telefone;

  return (
    <>
      <div className={styles.cardPai}>
        <h3>Informações do Vendedor:</h3>
        <div className="vendedor-image">
          <img src="https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Foto do Vendedor" className={styles.avatar} />
        </div>
        <h4>{nome}</h4>
        <span>{nota}</span>
        <p>{email}</p>
        <p>{telefone}</p>
      </div>
    </>
  );
}