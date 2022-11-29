
import { useState } from 'react';
import List from '../components/List';
import AddPeople from '../components/AddPeople';



//////////interface///////////////////////////
export interface Ipeoples {
    id: number;
    name: string;
    age: number;
    info: string;
    imgUrl: string | undefined;

}

///////////////////STATE LIFT UP!/////////////////////////


function NewUser() {
    const [peoples, SetPeaples] = useState<Ipeoples[]>([{
        id: 1,
        name: "Lana Del Ray",
        age: 37,
        info: "Elizabeth Woolridge Grant was born on June 21, 1985, in Manhattan, New York City, to Robert England Grant Jr., a Grey Group copywriter, and Patricia Ann  (née Hill), an account executive at Grey Group. She has a younger sister, Caroline Chuck Grant, and a younger brother, Charlie Grant. She was raised Roman Catholic and is of Scottish descent. ",
        imgUrl: "data:image/jpeg;base64,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"
    }])


    return (


        <div className="container d-flex flex-column   mt-3 border" >

            <header>
                <h3 className="alert alert-dark mt-2 "> New Users</h3>
                <h5>Here you can add new users to the list below and edit or remove them by icons as well!</h5>
            </header>
            <main className='mt-3'>
                <AddPeople peoples={peoples} setPeoples={SetPeaples} />
                <List peoples={peoples} setPeoples={SetPeaples} />
            </main>

        </div>
    );
}

export default NewUser;
