import { useState } from "react";
import './App.css';
const dictionary = {//dictionary of words on which the auto-correct will work
  "smple": "sample",
  "tmrow": "tomorrow",
  "gr8": "great",
  "thnx": "thanks",
  "f9": "fine",
  "cours": "course",
  "corespondence": "correspondence",
  "alphbet": "alphabet"
}

function App() {
  const [text, setText] = useState("");//setting initial state and setState function
  function autoCorrect(text) {//auto correct function 
    const arr = text.split(" ")//splitting it to string array as per the space
    let newStr = arr.map((word) => {//mapping to get words one by one and change it if word is in the dictionary
      if (word in dictionary)//finding word in our dictionary
        return dictionary[word] + " ";
      else
        return word
    })
    setText(newStr.join(" "))//after getting the string array we are converting it back to the string and set it
  }
  return (
    <div className="App">
      <input type="text"
        id="textInput"
        value={text}
        placeholder="Input text here"
        onChange={(e) => {
          setText(e.target.value)//setting text by setState
          autoCorrect(e.target.value);
        }}
      />
      <p>Please use words from the below dictionary:</p>
      <table border="1px solid black">
        <tr>
          <th>Incorrect Word</th>
          <th>Correct Word</th>
        </tr>
        <tr><td>smple</td><td> sample</td></tr>
        <tr><td>tmrow</td><td> tomorrow</td></tr>
        <tr><td>gr8</td><td> great</td></tr>
        <tr><td> thnx</td><td> thanks</td></tr>
        <tr><td>f9</td><td> fine</td></tr>
        <tr><td>cours</td><td> course</td></tr>
        <tr><td> corespondence</td><td> correspondence</td></tr>
        <tr><td> alphbet</td><td> alphabe</td></tr>
      </table>
    </div >
  );
}

export default App;
