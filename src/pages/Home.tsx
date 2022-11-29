import Header from "../common/Header";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";
import React from 'react'

const Home = () => {
    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate("/users")

    }

    return (<div>
        <Header />

        <main className="my-5"  >
            <div className="d-flex justify-content-center  mb-3 " >
                <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Hello There!</Card.Title>
                        <Card.Text>
                      
                        </Card.Text>
                        <Button onClick={handleClick} variant="primary">Start</Button>
                    </Card.Body>
                </Card>

            </div>
        </main>
    </div>);
}

export default Home;




