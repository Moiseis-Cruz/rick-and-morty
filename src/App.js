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


