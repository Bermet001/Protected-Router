import { Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import Profile from "../components/Profile";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import MobileStore from "../components/mobileStore/MobileStore";

const AppRoutes = () => {
  const { isAuth } = useSelector((state) => state.signIn);

  return (
    <Routes>
      <Route path="/" element={<MobileStore />} />
      <Route path="signIn" element={<SignIn />} />
      <Route
        element={<ProtectedRoute isAuth={isAuth} fallbackPath="/signIn" />}
      >
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
