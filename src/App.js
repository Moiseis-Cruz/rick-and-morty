import './App.css';
import { Main } from './components/main/main';
import { ThemeProvider } from './themes-toggler';

function App() {
  return (
    <>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
