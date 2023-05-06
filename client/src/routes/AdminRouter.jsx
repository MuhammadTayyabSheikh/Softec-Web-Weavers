import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from '../pages/AdminPanel';

const AdminRouter = () => {
  return (
    <ProSidebarProvider>
        <Routes>
          <Route path="/" element={<AdminPanel />} />
        </Routes>
    </ProSidebarProvider>
  )
}

export default AdminRouter;