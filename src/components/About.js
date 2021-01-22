import React from 'react'
import content from '../content';

function About() {
    return (
        <div>
            <div className={"w-screen h-48 flex flex-wrap place-content-center mt-10"}>
                <div className={"h-48 w-screen sm:w-1/2 sm:m-0 m-8"} >
                    <p className={"text-sm"}>{content.bio}</p>
                    <p className={"text-sm"}>{content.bio2}</p>
                    <p className={"text-sm"}>{content.bio3}</p>
                    <p className={"text-sm"}>{content.bio4}</p>
                </div>
            </div>
        </div>
    )
}

export default About
