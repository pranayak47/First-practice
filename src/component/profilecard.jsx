export default function Profile(props){
    return(
        <>
        <div className="cart">
            <img src={props.image} alt="" />
            <h3>{props.designation}</h3>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>see more</button>
        </div>
        </>
    )
}