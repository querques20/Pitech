import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import { greetings } from './Utils/greetings';

export default function App () {
  const saludo = greetings(); 
  return (
    <>
    
    <Header
    title="Pitech store"
    subtitle={`todo el hardware que necesites!,${saludo}`}
    />

    </>
  );
}

