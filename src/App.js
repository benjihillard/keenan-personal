import './App.css';
import Gallery from './components/Gallery';
import Content from './components/Content';
import Loading from './components/Loading';
import Profile from './components/Profile';
import React, {useState, useEffect} from 'react'
import { useDataLayerValue } from './DataLayer'
import * as Realm from "realm-web";
const appId = "keenan-kgkzv"; // e.g. myapp-abcde
const appConfig = {
  id: appId,
  timeout: 10000,
};

function App() {
  
  const [{data, page, content},dispatch] = useDataLayerValue();

  

  useEffect( async() => {
    async function connectDB() {
     const app = new Realm.App(appConfig);
     const credentials = Realm.Credentials.serverApiKey("9icRBkm9bOSqAG9dqw7xsOmUSgZom07esC78XDIdSm4Gl9u3BXdJK93hRqOIeWgT");
     const user = await app.logIn(credentials);
     const mongodb = app.currentUser.mongoClient("mongodb-atlas");
     const artwork = mongodb.db("keenan").collection("artwork");
     const data = await artwork.find({});
     dispatch({
      type: "SET_DATA",
      data: data[0].catolog,
    });
    dispatch({
      type: "SET_PAGE",
      page: "main",
    });
    
  }
  connectDB();
  }, [])

  

  const mainPage = () => {
    dispatch({
      type: "SET_PAGE",
      page: "main",
    });
  }

  

  const project = (type) => {
    switch(type) {

      case "loading":  return <Loading />;
      case "profile":   return <Profile />;
      case "main":   return <Gallery data={data} />;
      case "content": return < Content data={content}/>;

      default:      return <h1>No project match</h1>
    }
  }

  return (
    project(page)
  );
}

export default App;
