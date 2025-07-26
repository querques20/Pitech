import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import greetings  from './Utils/greetings';
import Count from './Components/counter';
import TabTitle from './Components/tabTitle';
import ThemeToggle from './Components/ThemeToggle';

export default function App () {
  const saludo = greetings(); 
  return (
    <>
    
    <Header
    title="Pitech store"
    subtitle={`todo el hardware que necesites!,${saludo}`}
    />
    <TabTitle title={`Clicks:${saludo}`} />
   <Count/>
    </>
  );
}

