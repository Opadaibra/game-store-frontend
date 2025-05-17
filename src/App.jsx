import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GamesPage } from './components/games/GamesPage';
import { CompaniesPage } from './components/companies/companies';
import Layout from './components/layout/Layout';
import GameDetail from './components/games/GameDetail';
import { Provider } from 'react-redux';
import { store } from './Store';
import { LoginPage } from './components/auth/LoginPage';
import {  SignUpPage } from './components/auth/SignUpPage';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index path='' element={<GamesPage />} />
            <Route path='games' element={<GamesPage />} />
            <Route path="games/:id" element={<GameDetail />} />
            <Route path='companies' element={<CompaniesPage />} />
          </Route>
          <Route path='auth'>
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
