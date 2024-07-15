import { useState } from "react";
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
        <div>
            <div>
                <label>Key</label>
                <input
                    type="number"
                    placeholder="Enter numeric key"
                    value={key}
                    onChange={(e) => setKey(parseInt(e.target.value))}
                />
            </div>
            <div>
                <label>Message</label>
                <input
                    type="text"
                    placeholder="Type your email, phonenumber or a message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <div>
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
    );
}

export default App;
