import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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

// function DigimonCard(props) {
//   const { digimon } = props;
//   return (
//     <Card bg="info" border="primary" style={{ width: '18rem' }}>
//       <Card.Img src={digimon.img} alt={digimon.name} />
//       <Card.Body className="square border">
//         <Card.Title as="h1">{digimon.name}</Card.Title>
//         <Card.Text>{digimon.level}</Card.Text>
//       </Card.Body>
//       <Button variant="primary">Go somewhere</Button>
//     </Card>
//   );
// }

// export default DigimonCard;
