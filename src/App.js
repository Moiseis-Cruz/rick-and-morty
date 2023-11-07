import './App.css';
import { Header } from './components/header';
import { Main } from './components/main/main';
import { ThemeProvider } from './themes-toggler';

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
