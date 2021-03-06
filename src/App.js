
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import CourseBook from './Pages/CourseBook/CourseBook';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Advanced from './Pages/Advanced/Advanced';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/advanced' element={
          <RequireAuth>
            <Advanced></Advanced>
          </RequireAuth>}>
        </Route>
        <Route path='/course/:courseId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
