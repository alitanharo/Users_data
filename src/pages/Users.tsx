import { useContext, useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { MainContext } from '../provider/MainProvider';
import styles from '../assets/images.module.css'
import Loding from '../components/Loding';
import UserList from '../components/UserList';

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////


const Users = () => {

    const userContext = useContext(MainContext)
    const [pageLimit, setPageLimit] = useState<number>(6)
    /////////////////////////////////////////////////////////

    const handleGetData_G2: () => Promise<void> = async () => {
        const response: Response = await fetch("https://reqres.in/api/users?page=2")
        const Data = await response.json()
        const limit: number = Data.data.length
        setPageLimit(limit)
        if (userContext?.users) {
            userContext?.setUsers([...userContext.users, ...Data.data])
        }

    }
    /////////////////////////////////////////////////////////////////////
    const handleScroll: () => void = () => {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight - 2) {
            userContext?.setUsers(null)
            setTimeout(handleGetData_G2, 3000)
        }
    }

    //////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const handleGetData_G1 = async () => {
            const response = await fetch("https://reqres.in/api/users?page=1")
            const Data = await response.json()
            userContext?.setUsers(Data.data)
        }
        handleGetData_G1()
    }, [])
    /////////////////////////////////////////////////////////////////////

    if (!userContext?.users) {
        return <Loding />
    }
    //////////////////////////////////////////////////////////////////
    const row: JSX.Element[] = userContext?.users.map((user) => {
        return (

            <ListGroup.Item key={user.id}>
                <img src={user.avatar} alt="Lana" className={styles.img} />
                <p className="px-5 mx-5 m-4"> {user.first_name} {user.last_name}</p>
            </ListGroup.Item>
        )
    })
    //////////////////////////////////////////////////////////////////////////////
    return <UserList row={row} onScroll={handleScroll} pageLimit={pageLimit} />
}


export default Users;