import Chat from "./components/links/Chat"
import Home from "./components/links/Home"
import Login from "./components/links/Login"
import Register from "./components/links/Register"
import SearchEvents from './components/links/SearchEvents';
import EventsICreated from './components/links/EventsICreated';
import EventsImAttending from './components/links/EventsImAttending';
import MyProfile from './components/links/MyProfile';
import MyEvents from './components/links/MyEvents';
import Logout from './components/links/Logout';
import CreateEvents from './components/links/CreateEvents';
import GenericNavbar from './navbars/GenericNavbar';
import HostNavbar from './navbars/HostNavbar';
import UserNavbar from "./navbars/UserNavbar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <GenericNavbar />
    {/* <UserNavbar /> */}
    {/* <HostNavbar /> */}
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/searchevents' element={<SearchEvents />} />
        <Route path='/createevents' element={<CreateEvents />} />
        <Route path='/eventsicreated' element={<EventsICreated />} />
        <Route path='/eventsimattending' element={<EventsImAttending />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/myprofile' element={<MyProfile />} />
        <Route path='/myevents' element={<MyEvents />} />
      </Routes>
    </div>
    </>
  )
}

export default App