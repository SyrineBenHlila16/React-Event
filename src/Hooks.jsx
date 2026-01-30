import react from 'react';

function Hooks({name, description}) {
  //const [count, setCount] = react.useState(0);
  return (
    <div>
      <h1>Hello {name}</h1>
      <p>{description}</p>
    </div>
  );
}
export default Hooks;