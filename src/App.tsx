import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Accounts } from './pages/Accounts/Accounts';
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
          element={<Accounts />}
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
