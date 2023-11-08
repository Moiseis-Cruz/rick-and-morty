import './App.css';
import { createGlobalStyle } from 'styled-components';
import { Header } from './components/header';
import { Main } from './components/main/main';
import { ThemeProvider } from './contexts';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }
`