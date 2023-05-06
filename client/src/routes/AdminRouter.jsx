import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import InventoryPage from '../pages/AdminPages/InventoryPage';
import CustomersPage from '../pages/AdminPages/CustomersPage';
import ComplaintsPage from '../pages/AdminPages/ComplaintsPage';
import CustomSidebar from '../components/adminPanelComponents/CustomSidebar';
import OrdersPage from './../pages/AdminPages/OrdersPage';
import AdminNavBar from '../components/adminPanelComponents/AdminNavBar';

const AdminRouter = () => {
  return (
    <ProSidebarProvider>
      <div className='d-flex flex-column h-100'>

        <AdminNavBar />
        <div className='d-flex h-100' style={{minHeight: '100vh'}}>
          <CustomSidebar />
          <Routes>
            <Route path="" element={<InventoryPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
          </Routes>
        </div>
      </div>
    </ProSidebarProvider>
  )
}

export default AdminRouter;