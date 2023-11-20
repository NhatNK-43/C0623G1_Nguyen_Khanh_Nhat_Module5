import {useState} from "react";

export default function GreetingFunction() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    return (
        <div>
            <input
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <br/>
            <input
                value={lastName}
                onChange={handleLastNameChange}
            />
            <p>
                Hello, {" "}
                <span>
                        {firstName} {lastName}
                </span>
            </p>
        </div>
    )
}