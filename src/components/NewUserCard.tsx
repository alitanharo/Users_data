import Card from 'react-bootstrap/Card';

/////////////INTERFACE////////////////////////////
interface NewUserProps {
    name: string;
    age: number | string;
    info: string | undefined;
    imgUrl: string | undefined;
}
//////////////////////////////////////////

const NewUserCard = (props: NewUserProps) => {
    return (
        <Card style={{ width: '26rem' }}>
            <Card.Img variant="top" src={props.imgUrl} />
            <Card.Body>
                <Card.Title> {props.name} </Card.Title>
                <Card.Title> {props.age} <i>Years Old</i> </Card.Title>
                <Card.Text>{props.info}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NewUserCard;