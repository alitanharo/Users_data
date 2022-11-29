import { Outlet } from "react-router";
import Header from "../common/Header";

const MainLayout = () => {
    return ( <div>
        <Header/>
        <Outlet/>
    </div> );
}
 
export default MainLayout;