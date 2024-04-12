import { } from 'react'
import { Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import GameServer from './Pages/GameServer'
import Admin from './Pages/Admin'
import Dashboard from './components/dashboard/Dashboard'
import Forms from './components/forms/Forms.jsx'
import Template from './components/template/Template.jsx'
import Servers from './components/tables/Servers.jsx'
import Users from './components/tables/Users.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/gameserver" element={<GameServer />} />
        <Route path="/admin" element={<Admin />} >
          <Route path="dashboard" element={
            <>
              <Template>
                <Dashboard />
              </Template>
            </>
          } />
          <Route path="forms" element={<>
            <Template>
              <Forms />
            </Template>
          </>} />

          <Route path="servers" element={<>
            <Template>
              <Servers />
            </Template>
          </>} />
          <Route path="users" element={<>
            <Template>
              <Users />
            </Template>
          </>} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
