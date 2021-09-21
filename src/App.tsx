import Modal from 'react-modal'
import { useState } from 'react'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from "./styles/global";
import { NewTrasactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');
export function App() {
  const [isNewTransactionModealOpen,setIsNewTransactionModealOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModealOpen(true); 
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModealOpen(false);
  }
  return (
  <>
    <Header onOpenNewTrasactionModal={handleOpenNewTransactionModal}/>
    <Dashboard />  
    <NewTrasactionModal isOpen={isNewTransactionModealOpen} onRequestClose={handleCloseNewTransactionModal} /> 
    <GlobalStyle />
  </>
  );
}

