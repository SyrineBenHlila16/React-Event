// import { Outlet } from 'react-router-dom';
// import './App.css'
// import Events from './Composants_fonctionnels/Events';
// import ColorBox from './State_Props/ColorBox';
// import Counter from './State_Props/Counter';
// import ListManager from './State_Props/ListManager';
// import Notes from './State_Props/Notes';
// import ToDoList from './State_Props/TodoList';
// import NavigationBar from './Composants_fonctionnels/NavigationBar';
// import { Suspense } from 'react';
// function App() {

//   return (
//     <>
//       <NavigationBar />
//       <main className="container mt-3">
//         <Suspense fallback={<div>Chargement...</div>}>
//           <Outlet />
//         </Suspense>
//       </main>


//       {/* <Counter initialCount={10} step={5} />
//       <ListManager initialItems={["React", "Angular", "VueJs"]} />
//       <ColorBox initialColor="#ff0000" colorOptions={["#ff0000", "#00ff00", "#0000ff", "#ffff00"]} />
//       <Notes initialNotes={[15, 18, 12, 14]} />     <ToDoList initialTasks={[
//         { id: 1, name: "Finaliser le projet React", priority: "Haute", completed: false },
//         { id: 2, name: "Préparer le repas", priority: "Moyenne", completed: false },
//         { id: 3, name: "Aller courir", priority: "Basse", completed: false }
//       ]} /> */}


//       {/* <Traitement />
//       <LifecycleDemo/>
//       <UpdatingDemo/> */}

//       {/* <Hooks name="MyComponent"
//         description="This is a sample component."
//         link="https://www.esprit.tn"
//      /> */}
//     </>
//   )
// }

// export default App;
import { Outlet } from 'react-router-dom'
import NavigationBar from './Composants_fonctionnels/NavigationBar'
import { Suspense } from 'react'

function App() {
  return (
    <>
      <NavigationBar />
      <main className="container mt-5">

        <Suspense fallback={<div>Chargement...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}

export default App
