import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import UserNavbar from '../common/UserNavBar';



///////////////// UserProps Interface//////////////////////////////////
interface UserListProps {
    pageLimit: number;
    row: JSX.Element[];
    onScroll: EventListener;
}
////////////////////////////////////////////////////////////////////////
/////////////////Userlist component/////////////////////////////////////

const UserList = (props: UserListProps) => {

    const [message, setMessage] = useState<string>("")
    

/////////////////////// second scrollHandler which show "No More User" /////////////////////////////////
    const showEnd: () => void = () => {
        window.removeEventListener('scroll', props.onScroll)
        setMessage("No More Users")

    }
 ////////////////////Adding event listener to window wich will be handle in User page and  calling seconed scrollHandler in useeffect ///////////////////////////////

    useEffect(() => {
        if (props.row.length <= props.pageLimit) {

            window.addEventListener('scroll', props.onScroll);
        }
        else{

            setTimeout(showEnd,4000)
            
        }
       
        return () => window.removeEventListener('scroll', props.onScroll)
    }, [props.onScroll]);
    ////////////////////////////// JSX Elements/////////////////////////////////////////


    return (

        <div className='container mt-3' >
            <ListGroup>
                 <UserNavbar/>
                <div  >
                    {props.row}
                </div>
            </ListGroup>
            <div   className='conteiner text-success text-center m-3 p-3'>{message} </div>

        </div>
    );
}

export default UserList;