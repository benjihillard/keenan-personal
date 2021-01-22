import React from 'react'
import content from '../content';

function Loading() {
    return (
        <div className={"flex flex-wrap place-content-center w-screen h-screen"}>
            <div className={"w-1/2 h-1/2"} >
                <img className={"ml-10 object-contain animate-pulse"} src={content.signature} ></img>
            </div>
        </div>
    )
}

export default Loading
