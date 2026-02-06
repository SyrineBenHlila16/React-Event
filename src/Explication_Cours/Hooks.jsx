import react, { useEffect } from 'react';
    
//function Hooks({name,description,link}) {
function Hooks(props) {
    
    //exemple de props par la méthode de destructuration
    const { name, description, link } = props;
   
    //consiste à extraire des valeurs d'un objet ou d'un tableau et à les assigner à des variables distinctes
    //useState : permet de gérer l'état local dans un composant fonctionnel
    const [count, setCount] = react.useState(8);
    
    //useEffect : permet de gérer les effets de bord dans un composant fonctionnel
    //Dans la phase de mise à jour : Updating
    useEffect(() => {
        console.log("Component mounted or updated");
    }, [count]); //le tableau de dépendance
    //Dans la phase de montage et de mise à jour : Mounting   
    useEffect(() => {
        console.log("Component mounted or updated");
    }, []); //le tableau de dépendance
    /*maghir mathot el tableau ray bch tsir el rendering kol mara ybddl el *état
    wkteli ma mathot hata 7aja f el tableau ybda yetsir el rendering marra wa7da bark f el montage uniquement
    wkteli mathot variable fel tableau ybda yetsir el rendering kol mara tbddl el variable hadi
    */
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