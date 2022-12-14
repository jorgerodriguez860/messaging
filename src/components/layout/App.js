// -------------------------
// To route
import { Route, Routes } from "react-router-dom";
// -------------------------
// Navbars
import PublicNavbar from './navbars/PublicNavbar';
import HostNavbar from './navbars/HostNavbar';
import UserNavbar from "./navbars/UserNavbar";
// -------------------------
// Major components
import Home from "../pages/Home"
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import CreateEvents from '../pages/CreateEvents';
import EventsICreated from '../pages/EventsICreated';
import SearchEvents from '../pages/SearchEvents';
import MyEvents from '../pages/MyEvents';
import MyProfile from '../pages/MyProfile';
import '../../css/App.css'

function App() {
  return (
    <>
      {/* <PublicNavbar />
      <HostNavbar />
      <UserNavbar /> */}

      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/createevents' element={<CreateEvents />} />
          <Route path='/eventsicreated' element={<EventsICreated />} />
          <Route path='/searchevents' element={<SearchEvents />} />
          <Route path='/myevents' element={<MyEvents />} />
          <Route path='/myprofile' element={<MyProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App