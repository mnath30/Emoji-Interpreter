import "./styles.css";
import { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "🥰": "Face with hearts",
    "🤩": "Star-struck face",
    "🤗": "Hugging face",
    "🙂": "Slightly smiling face",
    "😑": "Expressionless Face",
    "😐": "Neutral Face",
    "😶": "Face without mouth",
    "🙄": "Face with rolling eyes",
    "😏": "Smirking Face",
    "😕": "Confused Face",
    "😒": "Unamused Face",
    "🤑": "Money mouthed face"
  };

  const [emojiMeaning, setEmojiMeaning] = useState(
    "Meaning will be displayed here.."
  );
  const [emojiEntered, setEmojiEntered] = useState();
  const emojiAvailable = Object.keys(emojiDictionary);
  let meaning;
  function displayMeaning(event) {
    meaning = event.target.value;
    setEmojiEntered(meaning);
    setOutput(meaning);
  }

  function setOutput(meaning) {
    if (emojiDictionary[meaning] === undefined) {
      setEmojiMeaning("This emoji is not present in out dictionary");
    } else {
      setEmojiMeaning(emojiDictionary[meaning]);
    }
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>We will tell you what the emojis mean</h2>
      <input
        id="inputBox"
        placeholder="Enter the emojis here"
        value={emojiEntered}
        onChange={displayMeaning}
      />
      <div className="displayOutput">
        <div>{emojiEntered}</div>
        {emojiMeaning}
      </div>
      <div className="emojiDisplay">
        {emojiAvailable.map((item) => {
          return (
            <span
              key={item}
              className="displayEmoji"
              onClick={() => setOutput(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
