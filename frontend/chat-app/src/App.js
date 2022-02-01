import React, {useState, useEffect} from 'react'; 
import './App.css';

const axios = require('axios');

function getRequestRecentMessages() {
  let jsondata = fetch('http://pi.cs.oswego.edu:9080/chat', {
    method: 'GET',
    heaeders: { 
      'Content-Type': 'application/json', 
    }
  })
    .then(response => response.json())
    .then(data     => jsondata = data)
    .then(data     => {return data})
    return jsondata;
}

function postRequestNewMessage(username, message) {

  axios.post('http://pi.cs.oswego.edu:9080/chat', {
    username: username,
    message: message
  })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

 }

function displayMesssage(messageJson) {
  return <div> {JSON.stringify(messageJson.username)} > {JSON.stringify(messageJson.message)}</div>
}


function App() {

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")

  function handleMessageChange(event) {
    setMessage(event.target.value)
  }

  function handleNameChange(event) { 
    setName(event.target.value)
  }

  function handleSubmitClick() {
    postRequestNewMessage(name, message)
    setMessages([...messages, {username: name, message: message}])
  }

  useEffect(() => {

    var promise = Promise.resolve(getRequestRecentMessages());
    promise.then(function (message) {
      setMessages(message)
    })

  }, [])
  
  return (<div>
    <center>
      <h1>CSC 480 Open Liberty + React <br/>
      Chat App</h1> <br/>
    </center>  

    <div style={{background: "lightgrey"}}>
    {messages.map((message) => displayMesssage(message))}
    </div>
    <br/> 
    <div>
      <center>
      <label>Send a message !</label> <br/> <br/> 
      <label>Message: <input type="text" onChange={handleMessageChange}></input> </label><br/><br/> 
      <label>Name: <input type="text" onChange={handleNameChange} ></input></label><br/><br/>
      <input type="submit" onClick={handleSubmitClick}/>
      </center>
    </div> 
  </div>
  )
}

export default App;
