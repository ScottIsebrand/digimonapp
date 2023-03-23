### codescraps

## DigimonCard.js

function DigimonCard(props) {
const { digimon } = props;
return (

<div>
<h3>{digimon.name}</h3>
<img src={digimon.img} alt={digimon.name} />
<p>{digimon.level}</p>
</div>
);
}

export default DigimonCard;

## Attempt at Using React Bootstrap

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DigimonCard(props) {
const { digimon } = props;
return (
<Card
border="primary"
bg="info"
border="dark"
className="mb-2"
style={{ width: '18rem' }} >
<Card.Img src={digimon.img} alt={digimon.name} />
<Card.Body>
<Card.Title as="h2">{digimon.name}</Card.Title>
<Card.Text>{digimon.level}</Card.Text>
</Card.Body>
<Button variant="primary">Go somewhere</Button>
</Card>
);
}

export default DigimonCard;
