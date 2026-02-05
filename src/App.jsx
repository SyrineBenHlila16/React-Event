import './App.css'
import Traitement from './Ecmascript/Traitement';
import Hooks from './Hooks';
import LifecycleDemo from './LifecycleDemo';
import ColorBox from './State_Props/ColorBox';
import Counter from './State_Props/Counter';
import ListManager from './State_Props/ListManager';
import ToDoList from './State_Props/TodoList';
import UpdatingDemo from './UpdatingDemo';
function App() {

  return (
    <div>
      {/* <Hooks name="MyComponent"
        description="This is a sample component."
        link="https://www.esprit.tn"
     /> */}
     <Counter initialCount={10} step={5} />
     <ListManager initialItems={["React", "Angular", "VueJs"]} />
     <ColorBox initialColor="#ff0000" colorOptions={["#ff0000", "#00ff00", "#0000ff", "#ffff00"]} />
     <ToDoList />
      {/* <Traitement />
      <LifecycleDemo/>
      <UpdatingDemo/> */}
    </div>
  )
}

export default App;
