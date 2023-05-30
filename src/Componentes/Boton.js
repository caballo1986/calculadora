//@ts-nocheck
import "./Boton.css";

export default function Boton ({clickHandler,name,gray,orange,wide,green}){
    const handlerClick = () => clickHandler(name)
    const className = [
        "component-button",
        orange ? "orange" : "",
        wide ? "wide" : "",
        green ? "green" : "",
        gray ? "gray" : "",
    ]
    return(
            <div className={className.join(" ").trim()}>
                <button className="btn" onClick={handlerClick}>{name}</button>
            </div>
        )
}