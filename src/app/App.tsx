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
import { CartItem } from "../types/others";
import { Product } from "../types/products";

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

  //CART ITEMS
  const cartJson: any = localStorage.getItem("cart_data");
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
  const [cartItems, setcartItems] = useState<CartItem[]>(current_cart);

  const [orderRebuild, setOrderRebuild] = useState<Date>(new Date());

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
      sweetFailureProvider(Definer.general_err);
    }
  };

  const onAdd = (product: Product) => {
    console.log("product::", product);
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === product._id
    );
    if (exist) {
      const cart_updated = cartItems.map((item: CartItem) =>
        item._id === product._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      setcartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const new_item: CartItem = {
        _id: product._id || "",
        quantity: 1,
        name: product.product_name,
        price: product.product_price,
        image: product.product_images[0],
      };
      const cart_updated = [...cartItems, { ...new_item }];
      setcartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onRemove = (item: CartItem) => {
    const item_data: any = cartItems.find(
      (ele: CartItem) => ele._id === item._id
    );
    if (item_data.quantity === 1) {
      const cart_updated = cartItems.filter(
        (ele: CartItem) => ele._id !== item._id
      );
      setcartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const cart_updated = cartItems.map((ele: CartItem) =>
        ele._id === item._id
          ? { ...item_data, quantity: item_data.quantity - 1 }
          : ele
      );
      setcartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onDelete = (item: CartItem) => {
    const cart_updated = cartItems.filter(
      (ele: CartItem) => ele._id !== item._id
    );
    setcartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
  };
  const onDeleteAll = () => {
    setcartItems([]);
    localStorage.removeItem("cart_data");
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
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
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
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
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
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setOrderRebuild={setOrderRebuild}
        />
      )}

      <Switch>
        <Route path="/restaurant">
          <RestaurantPage onAdd={onAdd} cartItems={cartItems} />
        </Route>
        <Route path="/community">
          <CommunityPage />
        </Route>
        <Route path="/orders">
          <OrdersPage
            orderRebuild={orderRebuild}
            setOrderRebuild={setOrderRebuild}
            verifierMemberData={verifierMemberData}
          />
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
