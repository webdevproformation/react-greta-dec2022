const B = (props) => {
    return ( <>
        <p>je suis B {props.prop1} {props.prop2}</p>
        { props.children }
    </> );
}
 
export default B;