import "./App.css";
import calculator from "../src/assets/Icon metro-calculator2.png";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Login } from "./pages/login/Login";
import { ResetPassword } from "./pages/resetPassword/ResetPassword";
import GroupIcon from "@mui/icons-material/Group";
import { Image, Layout, Menu, theme, message } from "antd";
import React, { useState, useEffect } from "react";
import { CalculateTwoTone } from "@mui/icons-material";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { HeaderComponent } from "./components/Header/Header";
import { Sale } from "./pages/bills/Sale/Sale";
import { Purchase } from "./pages/bills/Purchase/Purchase";
import { OpCommands } from "./pages/OPeratingCommands/OpCommands";
import { AddItem } from "./pages/addItem/AddItem";
import { AddStore } from "./pages/addStore/AddStore";
import { AddEmp } from "./pages/addEmp/AddEmp";
import { AddOpCommand } from "./pages/addOpCommand/AddOPCommand";
import { ClientsList } from "./pages/clientsList/ClientsList";
import { SuppliersList } from "./pages/suppliersList/SupplieresList";
import { Supplies } from "./pages/supplies/Supplies";
import { ClientsAccounting } from "./pages/counts/clientsAccounting/ClientsAccounting";
import { SupplieresAccounting } from "./pages/counts/suppliersAccounting/SupplieresAccounting";
import { RunToOther } from "./pages/bills/RunToOther/RunToOther";
import { RawPurchases } from "./pages/bills/RawPurchases/RawPurchases";
import { SalariesCounting } from "./pages/counts/salariesCounting/SalariesCounting";
import { SalesCounting } from "./pages/counts/salesCounting/SalesCounting";
import { StoresCounting } from "./pages/counts/storesCounting/StoresCounting";
import { PurchasesCounting } from "./pages/counts/purchasesCounting/PurchasesCounting";
import { DailyVoucherReceipt } from "./pages/Safe/dailyVoucherReceipt/DailyVoucherReceipt";
import { DailyCatchReceipt } from "./pages/Safe/dailyCatchReceipt/DailyCatchReceipt";
import { useNavigate, useHref } from "react-router-dom";
const { Content } = Layout;
const token = localStorage.getItem("token");

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [isLogined, setIsLogined] = useState(false);
  const [urlPath, setUrlPath] = useState("");
  const [resetPasswordVisible, setResetPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useHref();

  useEffect(() => {
    console.log("params", location);
    console.log(token);
    // if (!token) {
    //   navigate("/login");
    // }
  }, [token,location]);

  const showResetPassword = () => {
    // setResetPasswordVisible(!resetPasswordVisible);
    navigate("/reset-password");
  };
  const handleClic = () => {
    // setResetPasswordVisible(!resetPasswordVisible);
    navigate("/login");
  };
  const handleLogin = () => {
    setIsLogined(true);
    localStorage.setItem(
      "token",
      "#435345534&cbvcnvnbvf5nvnvdfs6rvsvd5fghdcdrt"
    );
    setTimeout(() => {
      navigate("/home");
      message.success("تم تسجيل الدخول بنجاح");
    }, 100);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLogined(false);
    setTimeout(() => {
      navigate("/login");
      message.success("تم تسجيل الخروج بنجاح");     
    }, 100);
  };

  return (
    //   <div className="App" style={{width: "100%", height: "100vh"}}>
    //     <Router>
    //       <Routes>
    //           <Route path='/' element={<Main />}/>
    //           <Route path='/login' element={<Login />}/>

    //       </Routes>
    //     </Router>
    //   </div>
    // );

    <>
      {token == null || localStorage.getItem("token") == null ? (
        <Routes>
          <Route
            path="/login"
            element={
              <Login
                login={handleLogin}
                handleResetPassword={showResetPassword}
              />
            }
          />
          <Route
            path="/reset-password"
            element={<ResetPassword handleLogin={handleClic} />}
          />
            <Route
            path="*"
            element={<Navigate to={'/login'} replace/>}
          />
        </Routes>
      ) : (
        <Layout
          hasSider
          style={{
            position: "absolute",
            minHeight: "100%",
            width: "100%",
            display: "flex",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          {location !== "/home" && location !== "/" && token ? <Sidebar /> : null}

          <Layout
            style={{
              overflowY: "auto",
            }}
          >
            <Content
              style={{
                margin: "0",
                overflow: "auto",
                background: "#FCFCFC",
              }}
            >
              <div
                style={{
                  padding: 0,

                  background: "#FCFCFC",
                  position: "relative",
                }}
              >
                <Routes>
                  <Route path="/" element={<Main logout={handleLogout}/>} />
                  <Route
                    path="/home"
                    element={<Main logout={handleLogout} />}
                  />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="/sale-bill" element={<Sale />} />
                  <Route path="/purchase-bill" element={<Purchase />} />
                  <Route path="/op-commands" element={<OpCommands />} />
                  <Route path="/add-item" element={<AddItem />} />
                  <Route path="/add-store" element={<AddStore />} />
                  <Route path="/add-emp" element={<AddEmp />} />
                  <Route path="/add-op-command" element={<AddOpCommand />} />
                  <Route path="/clients-list" element={<ClientsList />} />
                  <Route path="/runtoOther-bill" element={<RunToOther />} />
                  <Route path="/row-purchases" element={<RawPurchases />} />
                  <Route path="/supplieres-list" element={<SuppliersList />} />
                  <Route path="/supplies" element={<Supplies />} />
                  <Route
                    path="/clients-accounting"
                    element={<ClientsAccounting />}
                  />
                  <Route
                    path="/supplieres-accounting"
                    element={<SupplieresAccounting />}
                  />
                  <Route
                    path="/salaries-counting"
                    element={<SalariesCounting />}
                  />
                  <Route path="/stores-counting" element={<StoresCounting />} />
                  <Route path="/sales-accounting" element={<SalesCounting />} />
                  <Route
                    path="/purchases-accounting"
                    element={<PurchasesCounting />}
                  />
                  <Route
                    path="/daily-voucherReceipt"
                    element={<DailyVoucherReceipt />}
                  />
                  <Route
                    path="/daily-catchReceipt"
                    element={<DailyCatchReceipt />}
                  />
                </Routes>
              </div>
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
}

export default App;
