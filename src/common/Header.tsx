import NavBar from "../components/NavBar";
import  { memo } from 'react'

const Header = () => {
    return (
    <header>
        <NavBar/>
    </header>  );
}
 
export default memo(Header) 