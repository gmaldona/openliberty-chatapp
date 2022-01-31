import React, {useState, useEffect} from 'react'; 
import './App.css';

function getRequestRecentMessages() {
  let jsondata = fetch('http://127.0.0.1:9080/chat', {
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

function displayMesssage(messageJson) {
  return <div> {JSON.stringify(messageJson.username)} > {JSON.stringify(messageJson.message)}</div>
}


function App() {

  const [messages, setMessages] = useState([])

  // function DisplayMessages(props) {
  //   console.log(props.messages)
  //   const messages = JSON.parse(props.messages);
  //   const listMessages = messages.map((message) => {
  //     <li>{JSON.stringify(message)}</li>
  //   })
  //   return (<ul>{listMessages}</ul>)
  // }

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
    {messages.map((message) => displayMesssage(message))}
  </div>
  )
}

export default App;
