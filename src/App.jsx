import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Information, AllData } from './pages';

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/information' element={<Information/>} />
                <Route path='/all-data' element={<AllData/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App