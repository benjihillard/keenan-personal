import React, { useState ,useEffect} from 'react';
import Art from './Art';
import { useDataLayerValue } from '../DataLayer'
import content from '../content';



function Gallery({data}) {
      
    const [{page},dispatch] = useDataLayerValue();

    const profilePage = () => {
        dispatch({
          type: "SET_PAGE",
          page: "profile",
        });
    }
    
        
    return(
        <div className={""} >
            <div className={ "absolute flex  mt-8 place-content-center h-1/6 w-full z-50"}>
                <h1 onClick={profilePage} Style={"font-family: Golden;"} className={"sm:text-6xl text-2xl text-gray-400 hover:text-gray-900"} >Keenan Cassidy</h1>
            </div>
            <div className={"place-content-center flex flex-wrap inline w-full  h-screen "}>
                <div className={" h-48 overflow-x-scroll inline-flex"}>
                  {data.map((items, index) => {return (
                        <div  className={"my-2"}>
                          <Art key={index} piece={items} />
                        </div>
                      );
                  })}
                </div>
            </div>
        </div>
    
    )
}

export default Gallery

