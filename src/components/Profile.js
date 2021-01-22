import React, {useState} from 'react'
import { useDataLayerValue } from '../DataLayer'
import Contact from './Contact';
import About from './About';
import content from '../content';



function Profile() {

    const [{page},dispatch] = useDataLayerValue();
    const [about,setAbout] = useState(true)
    const [contact,setContact] = useState(false)

    const toggleAbout =  () => {
        setAbout(true);
        setContact(false);
    }

    const toggleContact =  () => {
        setContact(true);
        setAbout(false);
    }

    const mainPage = () => {
        dispatch({
          type: "SET_PAGE",
          page: "main",
        });
      }


    return (
        <div>
            <img className={"absolute inset-x-0 top-0 mx-4 my-2 w-8 opacity-40 hover:opacity-100"} onClick={mainPage} src={content.back}></img>
            <div className={"w-screen sm:h-screen h-full mt-24 sm:mt-0 flex flex-wrap place-content-center"}>
                
                <div className={"flex flex-wrap"}>
                    <div Style={"height: 7vw; width: 7vw;"} className={"self-center flex flew-wrap bg-yellow-300" } ></div>
                    <div Style={"height: 10vw; width: 10vw;"} className={"self-center flex flew-wrap bg-yellow-400"} ></div>
                    <div Style={"height: 15vw; width: 15vw;"}  onClick={toggleAbout} className={"self-center flex flew-wrap w-52 h-52 bg-yellow-500 z-0 hover:z-30"} >
                            <h1 onClick={toggleAbout} Style={"font-family: Golden;"} className={"sm:text-2xl text-xs place-self-center flex flex-wrap font-bold mx-auto text-white"}>About</h1>
                    </div>
                    <div Style={"height: 15vw; width: 15vw;"} className={"self-center flex flew-wrap bg-yellow-500 z-10"} >
                        <img className={"object-contain transform scale-125"} src={content.keenanColor} ></img>
                    </div>
                    <div Style={"height: 15vw; width: 15vw;"} onClick={toggleContact} className={"self-center flex flew-wrap bg-yellow-600 z-0 hover:z-30"} >
                    <h1 onClick={toggleContact} Style={"font-family: Golden;"} className={"sm:text-2xl text-xs place-self-center flex flex-wrap font-bold mx-auto text-white"}>Contact</h1>
                    </div>
                    <div Style={"height: 10vw; width: 10vw;"} className={"self-center flex flew-wrap bg-yellow-700"} ></div>
                    <div Style={"height: 7vw; width: 7vw;"} className={"self-center flex flew-wrap bg-yellow-800"} ></div>
                </div>



                <div className={`${contact ? "" : "hidden"} mt-10`}>
                    <Contact/>
                </div>
                <div className={`${about ? "" : "hidden"} mt-10`}>
                    <About/>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Profile
