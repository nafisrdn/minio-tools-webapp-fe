import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import AliasesPage from './pages/aliases';
import BucketsPage from './pages/buckets';
import Layout from './Components/Layout';
import UsersPage from './pages/users';
import PoliciesPage from './pages/policies';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Layout>
          <Routes>
            <Route path="/" element={<h1>home</h1>} />

            <Route path="/aliases" element={<AliasesPage />} />
            <Route path="/buckets" element={<BucketsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
