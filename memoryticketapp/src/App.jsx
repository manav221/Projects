import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Explore from './pages/Explore/Explore.jsx'
import Chats from './pages/Chats/Chats.jsx'
import CreateStub from './pages/CreateStub/CreateStub.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import FloatingBtn from './components/FloatingMenu/FloatingBtn.jsx'

const App = () => {
  const [allStubData, setAllStubData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("allStubs")) {
      let rawData = localStorage.getItem("allStubs");
      let data = JSON.parse(rawData);
      setAllStubData(data);
    }
  }, [allStubData.length])
  return (
    <div className={['app-content']}>
      <Routes>
        <Route path='/create-stub' element={<CreateStub allStubData={allStubData} setAllStub={setAllStubData} />} />
        <Route path='/' element={<Home recieveData={allStubData} />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App