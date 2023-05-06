import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from '../../pages/AdminPanel';

const AdminRouter = () => {
  return (
    <ProSidebarProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </ProSidebarProvider>
  )
}

export default AdminRouter;