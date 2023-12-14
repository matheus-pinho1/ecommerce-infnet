import styles from './App.module.css'
import InfoProdutoPage from './pages/InfoProdutoPage'
import Header from './components/header/Header'
import Alert from './components/assets/Alert'

// import styled from 'styled-components';
import { BaseButton } from './components/assets/Componentes';

/* export const BaseButton = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  padding: 5px 10px 5px 12px;
  border: none;
  box-shadow: 5px 9px 50px -15px rgba(0,0,0,0.75);
  border-radius: 2px;
  cursor: pointer;
` */

// Declaração de um Componente React
export default function App() {
  // JSX
  return (
    <>
      <Header />
      <main>
        <InfoProdutoPage />
      </main>
    </>
  )
}