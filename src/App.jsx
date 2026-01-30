import './App.css'
import Traitement from './Ecmascript/Traitement';
import Hooks from './Hooks';
import LifecycleDemo from './LifecycleDemo';
import UpdatingDemo from './UpdatingDemo';
function App() {

  return (
    <div>
      <Hooks name="MyComponent"
        description="This is a sample component."
        link="https://www.esprit.tn"
     />
      {/* <Traitement />
      <LifecycleDemo/>
      <UpdatingDemo/> */}
    </div>
  )
}

export default App;
