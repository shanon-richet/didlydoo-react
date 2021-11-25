import React, { useState, useRef } from "react"

export default function UserData() {
    const eventsBoard =
        [{
            name: "First"
        },
        {
            name: "Second"
        }]
    const [inputs, setInputs] = useState(eventsBoard)
    const guestRef= useRef()

    function handleSubmit(e) {
        e.preventDefault()
        const ref= guestRef.current.value;
        setInputs(inputs => [...inputs, {name: ref}])
        alert(ref)
    }
    return (
        <div>
            <h1>This is a new app with React !</h1>
            <main>
                <section className="events">
                    <div>{inputs.map(input =>
                        <li>
                            <input value={input.name} />
                        </li>
                    )}  </div>
                    <form onSubmit= {(e) => handleSubmit(e)}>
                    <input ref= {guestRef} placeholder= "guest name"/>
                    <button type= "submit">+</button>
                    </form>
                </section>
            </main>
        </div>
    )
}