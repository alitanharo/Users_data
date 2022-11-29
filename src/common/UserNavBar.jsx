import { FaBatteryFull, FaSignal } from "react-icons/fa";
import "../assets/userNavbar.css";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { RiSignalWifi2Line } from 'react-icons/ri'
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { memo } from 'react'


const UserNavbar = () => {
    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);


    return (

        <div className="parent ">

            <Container fluid >
                <Row sm={3} xs={3} md={3} lg={3} className="d-flex justify-content-between align-items-start">

                    <Col md={5} xs={3} sm={3} lg={5} className="px-2 mx-2 xs sm" >
                        <div className="d-flex flex-row   justify-content-start align-items-start ">
                            <div className="py-2 px-3 my-2 "> <BsFillArrowLeftSquareFill size={17} /></div>
                            <div className="py-2 px-1 m-1 "><b> <i>OmboriTask</i> </b></div>
                            <div className="py-2 px-1 m-1 "><FaSignal size={17} /> </div>
                            <div className="p-2  m-1"><RiSignalWifi2Line size={17} /></div>
                        </div>

                    </Col>
                    <Col md={3} xs={3} sm={3} lg={4} className = "mt-2 px-2 mx-2 xs sm" ><span> {date.toLocaleTimeString()}</span></Col>
                    <Col md={2} xs={2} sm={2} lg={2} >
                        <div className="d-flex flex-row   justify-content-end align-items-start xs  sm md   m-1 px-2 ">
                            <div className=" mt-1  "> <p className=" ml-1 pl-2">100%</p></div>
                            <div className="p-1"> <FaBatteryFull size={23} /></div>
                        </div>
                    </Col>
                </Row>
                <Row sm={1} xs={1} md={1} className=" d-flex  justify-content-center  xs  sm md lg">
                    
                    <Col md={4} xs={4} sm={4} lg={4} className=" d-flex  justify-content-center "  >Users</Col>
                    
                </Row>
            </Container>
        </div>




    );
}

export default memo(UserNavbar) ;



