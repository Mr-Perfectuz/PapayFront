import React, { useEffect, useState } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestaurantPage from "./screens/RestaurantPage";
import CommunityPage from "./screens/CommunityPage";
import OrdersPage from "./screens/OrdersPage";
import MemberPage from "./screens/MemberPage";
import HelpPage from "./screens/HelpPage";
import LoginPage from "./screens/LoginPage";
import HomePage from "./screens/HomePage";
import NavbarHome from "./components/header";
import NavbarRestaurant from "./components/header/restaurant";
import NavbarOthers from "./components/header/others";
import Footer from "./components/footer";
import AuthenticationModal from "./components/auth";
// import { sign } from "crypto";
import { Member } from "../types/user";
import { serviceApi } from "../lib/config";
import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "../lib/sweetAlert";
import { Definer } from "../lib/Definer";
// import assert from "assert";
import MemberApiService from "./apiServices/memberApiService";
import "../app/apiServices/vertify";

function App() {
  // INITIALIZATION
  const [verifierMemberData, setVerifierMemberData] = useState<Member | null>(
    null
  );
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    console.log("--------- useEffect: App--------- ");
    const memberDataJson: any = localStorage.getItem("member_data")
      ? localStorage.getItem("member_data")
      : null;

    const member_data = memberDataJson ? JSON.parse(memberDataJson) : null;
    if (member_data) {
      member_data.mb_image = member_data.mb_image
        ? `${serviceApi}/${member_data.mb_image}`
        : "/auth/user.svg";
      setVerifierMemberData(member_data);
    }
  }, [signUpOpen, loginOpen]); //componentDidUpdate

  // HANDLERS
  const handleSignUpOpen = () => setSignUpOpen(true);
  const handleSignUpClose = () => setSignUpOpen(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleLogoutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCLoseLogout = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };
  const handleLogoutRequest = async () => {
    try {
      const memberApiService = new MemberApiService();
      await memberApiService.logoutRequest();
      await sweetTopSmallSuccessAlert("sucess", 700, true);
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.geteral_err);
    }
  };

  return (
    <Router>
      {main_path === "/" ? (
        <NavbarHome
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          verifierMemberData={verifierMemberData}
          handleLogoutClick={handleLogoutClick}
          handleCLoseLogout={handleCLoseLogout}
          anchorEl={anchorEl}
          open={open}
          handleLogoutRequest={handleLogoutRequest}
        />
      ) : main_path.includes("/restaurant") ? (
        <NavbarRestaurant
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          verifierMemberData={verifierMemberData}
          handleLogoutClick={handleLogoutClick}
          handleCLoseLogout={handleCLoseLogout}
          anchorEl={anchorEl}
          open={open}
          handleLogoutRequest={handleLogoutRequest}
        />
      ) : (
        <NavbarOthers
          setPath={setPath}
          handleLoginOpen={handleLoginOpen}
          handleSignUpOpen={handleSignUpOpen}
          verifierMemberData={verifierMemberData}
          handleLogoutClick={handleLogoutClick}
          handleCLoseLogout={handleCLoseLogout}
          anchorEl={anchorEl}
          open={open}
          handleLogoutRequest={handleLogoutRequest}
        />
      )}

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <MemberPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>

      <Footer />
      <AuthenticationModal
        signUpOpen={signUpOpen}
        loginOpen={loginOpen}
        handleSignUpOpen={handleSignUpOpen}
        handleSignUpClose={handleSignUpClose}
        handleLoginOpen={handleLoginOpen}
        handleLoginClose={handleLoginClose}
      />
    </Router>
  );
}

export default App;
