import './App.css';
import pic from './img/pic.png'

function App() {
 
  return (
    <div className="container">
     <><MyComponent />
     <Hobbies />
     <Food/>
     <Slack/>
     <FreeTime/>
     </> 
    </div>
   
  );
}


function MyComponent() {
  const me ={
    name: 'Luis Hernandez',
    Age: '23',
    FavoriteMusic: 'Hillsong Y&F'
  }
  return (
      <div className='data'>
        <ul>
          <img src={pic} alt="" />
        <li><b>Name:</b> {me.name} </li>
        <li> <b>Age :</b> {me.Age} </li>
        <li> <b>Favorite Music: </b> {me.FavoriteMusic} </li>
      </ul>
      </div>
  )
}

function Hobbies() {
  return (
      <div className='data data1'>
        <ul>
        <h3>My Hobbies</h3>
        <li> Leer</li>
        <li> senderismo</li>
        <li> cocinar</li>
      </ul>
      </div>
  )
}

function Food() {
  return (
      <div className='data data2'>
        <ul>
        <h3>My Favorite Food</h3>
        <li> Pasta</li>
        <li> Ramen</li>
        <li> maicitos Gratinados</li>
      </ul>
      </div>
  )
}
function Slack() {
  return (
      <div className='data data3'>
        <ul>
        <h3>My Slackes</h3>
        <li> NodeJS</li>
        <li> Angular</li>
        <li> HTML, CSS, JS</li>
        <li> Python</li>
      </ul>
      </div>
  )
}
function FreeTime() {
  return (
      <div className='data data4'>
        <ul>
        <h3>In My Free Time</h3>
        <li> Salgo con mis amigos</li>
        <li> Escucho Musica</li>
        <li> Veo series</li>
        <li> Estudio</li>
      </ul>
      </div>
  )
}

export default App;
