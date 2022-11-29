import { FC, FormEvent, SetStateAction, Dispatch } from 'react'
import { FaUserEdit } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Ipeoples } from '../pages/NewUser';



///////////INTERFACE////////////////////////
interface Iprops {
    people: Ipeoples
    peoples: Ipeoples[],
    setPeoples: Dispatch<SetStateAction<Ipeoples[]>>
}

////////////////EDIT COMPONENT///////////////////////////////
const Edit: FC<Iprops> = ({ people, peoples, setPeoples }) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [name, setName] = useState<string>(people.name);
    const [age, setAge] = useState<string | number>(people.age);
    const [info, setInfo] = useState<string>(people.info);
    const [imgUrl, setImgUrl] = useState<string | undefined>(people.imgUrl);

    //////////////////FORM VALIDAITION////////////////////////////////////////////////
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!name) {
            return alert("name is requaired!")
        }
        if (!age) {
            return alert("age is requaired!")
        }
        if (!info) {
            return alert("bio is requaired!")
        }
        const persons = [...peoples]
        const index: number = persons.findIndex(p => p.id === people.id)

        persons[index] = {
            id: people.id,
            name,
            age: Number(age),
            imgUrl,
            info
        }
        setPeoples(persons)
        setIsShow(false)
    }


    ////////////////////////////////////////////////////////////
    return (
        <>

            <FaUserEdit size={30} className=" m-2 text-primary" onClick={() => setIsShow(true)} />
            <Modal size='lg' show={isShow} onHide={() => setIsShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{people.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='col-md-6 col-lg-6 mx-aouto   '>

                        <form id='form' className='mb-3' onSubmit={(e) => handleSubmit(e)} >
                            <div className="mb-3">

                                <input
                                    value={name}
                                    placeholder='Name'
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onChange={e => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    value={age}
                                    placeholder='Age'
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    onChange={e => setAge(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <input
                                    placeholder='Photo Url'
                                    value={imgUrl}
                                    type="text"
                                    className="form-control"
                                    id="img"
                                    onChange={e => setImgUrl(e.target.value)}
                                />

                            </div>
                            <div className="mb-3">
                                < textarea
                                    value={info}
                                    className="form-control"
                                    id="info"
                                    placeholder="Bio"
                                    onChange={e => setInfo(e.target.value)}
                                />

                            </div>

                            <div className='col p-1'>
                                <Button variant="primary" type='submit' className=''   >
                                    Save Changes
                                </Button>
                            </div>

                        </form>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <div className='col p-1'>
                        <Button variant="secondary" onClick={() => setIsShow(false)} >
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>



        </>
    )
}



export default Edit;

