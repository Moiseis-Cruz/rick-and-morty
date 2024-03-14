import { ThemeProvider } from './contexts';
import { AppRoutes } from './pages/routes';
import { GlobalStyles } from './Styles/GlobalStyles';

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