import Card from 'react-bootstrap/Card';

function Movie(props) {
    
    return (
        <>
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.year} <br></br>
                    {props.rating}
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    );
  }

export default Movie;