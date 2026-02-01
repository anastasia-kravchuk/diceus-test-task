import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Account } from './pages/Account';
import { NotFound } from './pages/NotFound';
import { AppLayout } from './components/layout/AppLayout';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={<Dashboard />}
        />
        <Route
          path="/accounts"
          element={<Account />}
        />
      </Route>

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;
