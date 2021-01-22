import React, {useState} from 'react'
import { useDataLayerValue } from '../DataLayer'

function Art({piece}) {

    const [isShown, setIsShown] = useState(false);
    const [{page},dispatch] = useDataLayerValue();
    

    
    const contentPage = () => {
        dispatch({
          type: "SET_PAGE",
          page: "content",
        });
        dispatch({
            type: "SET_CONTENT",
            content: piece,
        });
        console.log(piece);
    }

    return (
        <div>
            
            <div 
            className={" inline-flex"}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={contentPage}
            >
                
                <div className={`${ isShown ? "hidden" : ""} transition-all duration-1000 ease-out `}>  
                {piece.colors.map((color, index) => {
                    return (
                        <div key={index} Style={"background-color: " + color} className={"w-6 h-8 mx-2 visible"} ></div>
                    );
                })}
                </div>
                <div className={`${ isShown ? "" : "hidden"} w-48 h-48 transition-all  duration-700 ease-in-out`} >
                        <img className={"object-contain w-full h-full "} src={piece.small} ></img>
                </div>
                
                
            </div>
        </div>
    )
}

export default Art;
