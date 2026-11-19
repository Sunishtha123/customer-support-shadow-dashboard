import{useState}from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";
import Settings from "./components/Settings";
function App(){
  const[activePage,setActivePage]=useState("Dashboard");
  const renderPage=()=>{
    if(activePage==="Users"){
      return <Users/>;
    }
    if(activePage==="Products"){
      return <Products/>;
    }
    if(activePage==="Settings"){
      return <Settings/>;
    }
    return <Dashboard/>;
  };
  return(
    <div>
      <Sidebar setActivePage={setActivePage} activePage={activePage}/>
      <main className="main-content">
        <Header/>
        {renderPage()}
      </main>
    </div>
  );
}
export default App;
