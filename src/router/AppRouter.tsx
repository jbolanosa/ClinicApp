import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import Appointments from "../appointments/pages/Appointments";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Appointments/>} />
      </Route>
    </Routes>
  )
}