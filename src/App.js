import './App.css';
import { Header } from './components/header';
import { Main } from './components/main/main';
import { ThemeProvider } from './contexts';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
