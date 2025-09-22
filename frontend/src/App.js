// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import HomePage from './pages/HomePage/HomePage';
import ProtectedRoute from './routes/ProtectedRoute';
import CalendarPage from './pages/CalendarPage/CalendarPage';
import DailyMealPage from './pages/DailyMealPage/DailyMealPage';
import GoalSelectionPage from './pages/GoalSelectionPage/GoalSelectionPage'
import EnterPage from './pages/EnterPage/EnterPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import StartDataPage from './pages/StartDataPage/StartDataPage';
import Layout from './components/Layout';


function App() {
  const isLoggedIn = true;
  // localStorage.getItem('accessToken');
  return (
    <Layout>
      <Router>
        { isLoggedIn && <Navbar /> }
        <Routes>
          <Route path="/start-data" element={<StartDataPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/enter" element={<EnterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />
          <Route path="/day/:date" element={<ProtectedRoute><DailyMealPage /></ProtectedRoute>} />
          <Route path="/goals" element={<ProtectedRoute><GoalSelectionPage /></ProtectedRoute>} />
          <Route path="*" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
