import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminRouter from "./AdminRouter";
import ClientRouter from "./ClientRouter";

const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route path="/admin" element={<AdminRouter />} />
        <Route path="*" element={<ClientRouter />} />
      </Routes>
    </Router>
  )
}

export default AppRouter;