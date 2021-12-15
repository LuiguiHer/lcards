import './App.css';
import MyComponent from './components/MyComponent';
import Cards from './components/Cards';

function App() {
 
  return (
    <div className="container">
     <><MyComponent />
     <Cards tittle="My Hobbies" item1="Leer" item2="senderismo" item3="cocinar" background="#8700f5"/>
     <Cards tittle="My Favorite Food" item1="Pasta" item2="Ramen" item3="maicitos Gratinados" background="#5ef1b4"/>
     <Cards tittle="My Slackes" item1="NodeJS" item2="Angular" item3="Python" background="#fd9b74"/>
     <Cards tittle="In My Free Time" item1="Escucho Musica" item2="Veo series" item3="Estudio" background="#7375d1"/>
     </> 
    </div>
   
  );
}
export default App;
