import { useState } from "react";
import "./App.css";
const cipher = require("@omar-sarfraz/caesar-cipher");

function App() {
    const [key, setKey] = useState<number>(1);
    const [message, setMessage] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const encryptMessage = (): void => {
        const { encrypt } = cipher(key);
        let encryptedMessage = encrypt(message);
        setResult(encryptedMessage);
    };

    const decryptMessage = (): void => {
        const { decrypt } = cipher(key);
        let decryptedMessage = decrypt(message);
        setResult(decryptedMessage);
    };

    return (
        <div className="main">
            <div className="card">
                <h1>Caesar Cipher Demo</h1>
                <div className="input">
                    <label>Key</label>
                    <input
                        type="number"
                        placeholder="Enter numeric key"
                        value={key}
                        onChange={(e) => setKey(parseInt(e.target.value))}
                    />
                </div>
                <div className="input">
                    <label>Message</label>
                    <input
                        type="text"
                        placeholder="Type an email or a phonenumber"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="buttons">
                    <button onClick={encryptMessage}>Encrypt</button>
                    <button onClick={decryptMessage}>Decrypt</button>
                </div>
                {result && (
                    <div>
                        <h3>Result</h3>
                        <p>{result}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
