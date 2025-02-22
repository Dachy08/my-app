import './App.css';

function App() {
  let cardinfo = {
    Image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    firstname: "dachi",
    lastname: "shavlokhovi"
  };

  return (
    <>
      <div className="card">
        <img src={cardinfo.Image} alt={`${cardinfo.firstname} ${cardinfo.lastname}`} />
        <h2>{cardinfo.firstname} {cardinfo.lastname}</h2>
      </div>
    </>
  );
}

export default App;
