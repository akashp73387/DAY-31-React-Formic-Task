 import React, { useState } from "react";
 import { BrowserRouter, Route, Routes } from "react-router-dom";
 import { Button, Layout, theme } from "antd";
 import Dashboard from "./Pages/Dashboard";
 import Create from "./Pages/Create";
 import Edit from "./Pages/Edit";
 import BookDetails from "./Pages/BookDetails";
 import SideBar from "./Components/SideBar";
 import MenuList from "./Components/MenuList";
 import ToogleTheme from "./Components/ToogleTheme";
 import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
 import Footer from "./Components/Footer";

 const { Header, Sider } = Layout;

 const App = () => {
   const [darkTheme, setDarkTheme] = useState(true);
   const [collapsed, setCollapsed] = useState(false);

   const toggleTheme = () => {
     setDarkTheme(!darkTheme);
   };

   const {
     token: { ColorBgContainer },
   } = theme.useToken();

   //initializing id for updating id from api
   const [id, setId] = useState(0);

   return (
     <div>
       <BrowserRouter>
         <Layout className="layout">
           <Sider
             collapsed={collapsed}
             collapsible
             trigger={null}
             theme={darkTheme ? "dark" : "light"}
             className="sidebar"
           >
             <SideBar />
             <MenuList darkTheme={darkTheme} />
             <ToogleTheme darkTheme={darkTheme} toggleTheme={toggleTheme} />
           </Sider>
           <Layout>
             <Header
               className="d-flex "
               style={{
                 padding: 0,
                 background: ColorBgContainer,
                 backgroundColor: "rgb(28, 17, 41, 1)",
                 color: "whitesmoke",
               }}
             >
               <Button
                 type="text"
                 className="toggle "
                 onClick={() => setCollapsed(!collapsed)}
                 icon={
                   collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                 }
               />{" "}
               <div className="fs-2 d-flex ms-3 container justify-content-center">
                 Library Management System
               </div>
             </Header>
             <Layout className="contents">
               <Routes>
                 <Route path="/" element={<Dashboard />} />
                 <Route path="/create" element={<Create />} />
                 <Route path="/edit/:id" element={<Edit id={id} />} />
                 <Route
                   path="/bookdetails"
                   element={<BookDetails setId={setId} />}
                 />
               </Routes>
             </Layout>
           </Layout>
         </Layout>
         <Footer />
       </BrowserRouter>
     </div>
   );
 };

 export default App;