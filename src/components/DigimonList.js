import DigimonCard from './DigimonCard';

function DigimonList(props) {
  const { digimonData } = props;
  console.log(digimonData);
  return (
    <div className="digimon-list">
      <h2>Digimon List</h2>
      {digimonData.map((item) => (
        <DigimonCard digimon={item} />
      ))}
    </div>
  );
}

export default DigimonList;
