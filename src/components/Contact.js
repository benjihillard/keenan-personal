import React from 'react'
import content from '../content';

function Contact() {
    return (
        <div>
            <div className={"w-screen h-48 flex flex-wrap place-content-center mt-10"}>
                <div className={"text-center"}>
                    <a href={"https://www.instagram.com/keenan_cassidy/"}>
                        <img className={"mx-10 w-10 mb-1 opacity-70 hover:opacity-100"} src={content.insta} ></img>
                    </a>
                    <p className={"text-xs"}>@keenan_cassidy</p>
                </div>
                <div className={"text-center"}>
                    <a href={process.env.PUBLIC_URL + '/assets/Resume2021.pdf'}>
                        <img className={"mx-10 w-10 mb-1 opacity-70 hover:opacity-100"} src={content.resumePhoto} ></img>
                    </a>
                    <p className={"text-xs"}>resume</p>
                </div>
                <div className={"text-center"}>
                    <a href={"mailto:keenanfc@gmail.com"}>
                    <img className={"mx-10 w-10 mb-1 opacity-70 hover:opacity-100"} src={content.mail} ></img>
                    </a>
                    <p className={"text-xs"}>keenanfc@gmail</p>
                </div>
                
            </div>
        </div>
    )
}

export default Contact
