import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ErrorPage from './components/ErrorPage'
function App() {

  return (
    <>
      <div className='app'>
        <Router>
          {/* Header */}
          <Header />

          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>

          {/* Footer */}
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App
