import './App.css';
import MyComponent from './components/MyComponent';
import Hobbies from './components/hobbies';
import Food from './components/Food';
import Slack from './components/Slackes';
import FreeTime from './components/FreeTime';

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
export default App;
