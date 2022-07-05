import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from './pages/mainPage';
import CreateNewUser from './pages/createNewUser';
import EditUserPage from './pages/editUserPage';
import ErrorBoundary from './errorBoundary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ErrorBoundary>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/createNewUser" element={<CreateNewUser />} />
                <Route path="/EditUserPage/:index" element={<EditUserPage />} />
            </Routes>
        </BrowserRouter>
      
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
