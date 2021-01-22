import React from 'react'
import { useDataLayerValue } from '../DataLayer'
import content from '../content';


function Content({data}) {

    const [{page},dispatch] = useDataLayerValue();

    const mainPage = () => {
        dispatch({
          type: "SET_PAGE",
          page: "main",
        });
      }
    
    return (
        <div>
            <img className={"absolute mx-4 my-2 w-8 opacity-40 hover:opacity-100"} onClick={mainPage} src={content.back}></img>
            <div className={"grid grid-cols-4 gap-4"} >
                <div className={"sm:col-span-2 col-span-4 "}>
                    <div className={"place-content-center flex flex-wrap sm:h-screen my-16 sm:my-0"} >
                        <img className={"w-3/4 h-3/4 object-contain "} src={data.large} ></img>
                    </div>
                </div>
                <div className={"sm:col-span-2 col-span-4 flex flex-wrap"}>
                    <div className={" sm:place-content-center justify-center flex flex-wrap inline sm:h-screen w-full my-4 sm:my-0"} >
                        <div className={"w-3/4 h-1/3 shadow-2xl border-2 border-black border-opacity-40 overflow-hidden min-h-1/4"}  >
                            <h1 className={"text-lg font-extrabold m-2"} >Keenan Cassidy</h1>
                            <h1 className={"text-lg font-extrabold m-2"} >{data.title}, ({data.date})</h1>
                            <h1 className={"text-xs m-2"} >{data.material}</h1>
                            <h1 className={"text-xs m-2"} >{data.dim}</h1>
                            <h1 className={"text-sm m-2"} >{data.descr}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content
