import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import PrivateRoute from './pages/PrivateRoute';
import Home from './pages/Home';
import Login from './components/Login';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


// App Component
const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
        } />
        {/* <Route path='/home' element={<PrivateRoute><Home /></PrivateRoute>} /> */}
        {/* <Route path='*' element={<Navigate to='/login' />} /> */}
      </Routes>
    </Router>
  </Provider>
);

export default App;