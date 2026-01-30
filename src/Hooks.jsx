import react from 'react';

function Hooks(props) {
    //function Hooks({name,description,link}) {
    //exemple de props par la méthode de destructuration
    const { name, description, link } = props;
    const [count, setCount] = react.useState(8);
    return (
        <><div>
            <h1>Hello {name}</h1>
            <p>{description}</p>
            <a href={link}>Visit Link</a>
        </div>
            <p>Variabe de count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <HooksArrow name={name} description={description} link={link} />
        </>
    );
}
export default Hooks;
// fonction flèche
export const HooksArrow = (props) => {
    return (
        <div>
            <h1>Utilisation d'une fonction flèché {props.name}</h1>
            <p>{props.description}</p>
            <a href={props.link}>Visit Link</a>
        </div>
    );
}