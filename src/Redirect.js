import React from 'react'
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { db } from "./firebase";

function Redirect() {
  const { code } = useParams();
  const history = useHistory();
  const [url, setUrl] = useState("");
    useEffect(() => {
        let q = db.collection("urls").where("code", "==", code);
        q.onSnapshot((data) => {
          if (data.empty) {
            return history.push("/");
          }
          let d = data.docs[0].data();
    
          setUrl(d.url);
         window.location.replace(url);
        });
      }, [code, history, url]);
    return (
        <div>
            <h1>Redirecting to {url}</h1>
        </div>
    )
}
export default Redirect