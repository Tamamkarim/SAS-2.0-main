import { ConfigProvider, Layout } from "antd";
import Profile from "pages/profile/Profile";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import EditHotels from "./pages/dashboard/edit_hotels/EditHotels";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import Hotels from "./pages/hotels/Hotels";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Room from "./pages/room/room";
import { ProtectedRoute, PublicRoute } from "./routes/route-helpers";

const { Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <Layout>
          <Navbar />
          <Content style={{ minHeight: "90dvh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/hotel/:id" element={<Hotel />} />
              <Route path="/room" element={<Room />}/>
              <Route element={<PublicRoute />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/dashboard" element={<Dashboard />}>
                  <Route path="edit-hotels" element={<EditHotels />} />
                </Route>
              </Route>
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            SAS ©{new Date().getFullYear()} Created by Arslan.
          </Footer>
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
