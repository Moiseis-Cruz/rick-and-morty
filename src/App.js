import './App.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from './contexts';
import { AppRoutes } from './pages/routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <AppRoutes />
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

  a {
    text-decoration: none;
  }
`