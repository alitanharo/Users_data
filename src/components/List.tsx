import { FC } from 'react'
import { Ipeoples } from '../pages/NewUser';
import { AiOutlineUsergroupDelete } from 'react-icons/ai'
import { Dispatch, SetStateAction } from 'react'
import Edit from './Edit'
import NewUserCard from './NewUserCard'



///////////Interface/////////////////////////////////////////////
interface Iprops {
    peoples: Ipeoples[]
    setPeoples: Dispatch<SetStateAction<Ipeoples[]>>

}

///////////////NEW USER LIST//////////////////////////////

const List: FC<Iprops> = ({ peoples, setPeoples }) => {

    /////// /////////DELETE OPTION /////////////////////////////////////
    const handelDelete = (id: number): void => {
        const persons: Ipeoples[] = [...peoples]
        const filteredPersons: Ipeoples[] = persons.filter(p => p.id !== id)
        setPeoples(filteredPersons)
    }
    ///////////////////NEW USER CARD///////////////////////////////////
    const card: JSX.Element[] = peoples.map(people => {
        return (

            <div className='container d-flex  justify-content-center   p-3 m-3 '>
                <div className='  card bg-light  d-flex  flex-column mb-3 ' style={{ width: '26rem', height: '36rem' }} key={people.id}>

                    <div className='card-item mb-3'>
                        <div className="d-flex flex-row m-3">
                            <div className='  p-2  '>
                                <AiOutlineUsergroupDelete className='text-danger m-1  ' size={30} onClick={() => handelDelete(people.id)} />
                            </div>
                            <div className='p-2 mx-4  '>

                                <Edit people={people} peoples={peoples} setPeoples={setPeoples} />
                            </div>
                        </div>
                        <div className='card-item  mt-2 pt-2'>
                            <NewUserCard imgUrl={people.imgUrl} name={people.name} age={people.age} info={people.info} />
                        </div>
                    </div>


                </div>
            </div>

        )

    })
    ////////////////////////////////////////////////////////////////////////////////////
    return (
        <div className='container'>
            {card}
        </div>
    )
}


export default List;