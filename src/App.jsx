import { ThemeProvider } from './contexts';
import { AppRoutes } from './pages/routes';


function App() {
  return (
    <>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;