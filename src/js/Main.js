import React, { useState, useRef } from "react"

export default function Main() {
    const nameRef = useRef()
    const descriptionRef = useRef()
    const authorRef = useRef()
    const dateRef = useRef()

    const eventsArray = [
        {
            name: "Christmas party",
            description: "Celebrate the Jesus born",
            author: "Marie",
            dates: [
                {
                    date: "2021-12-24",
                    attendees: [
                        {
                            name: "Rosalie",
                            available: true
                        },
                        { 
                            name: "Edmund",
                            available: true,
                        }
                    ]
                },
                {
                    date: "2021-12-25",
                    attendees: [
                        {
                            name: "Rosalie",
                            available: false
                        },
                        { 
                            name: "Edmund",
                            available: true
                        },
                        {
                            name: "Sam",
                            available: true
                        }
                    ]
                }
            ]
        },
        {
            name: "New Year Party",
            description: "Hit fireworks",
            author: "Sony",
            dates: [
                {
                    date: "2021-12-31"
                },
                {
                    date: "2022-01-01"
                }
            ]
        }
    ]
    const [events, setEvents] = useState(eventsArray)
    function addEvent(e) {
        e.preventDefault();
        setEvents(events => [...events,
        {
            name: nameRef,
            description: descriptionRef,
            author: authorRef,
        }])
    }
    return (
        <main>
            <form onSubmit={(e) => addEvent(e)} className="eventForm">
                <label for="eventName">event
                    <input ref={nameRef} id="eventName" type="text" name="name" placeholder="event name" />
                </label>
                <label for="description">description
                    <input ref={descriptionRef} id="description" type="text" name="description" placeholder="describe the event" />
                </label>
                <label for="author">author
                    <input type="text" ref={authorRef} id="author" type="text" name="author" placeholder="author" />
                </label>
                <label for="dates">dates
                    <input type="date" ref={dateRef} id="dates" type="text" name="dates" />
                </label>
            </form>
            <section className="eventSection">
                {events.map((event, index) =>
                    <li key={index}>
                        <p>
                            <h1>{event.name}</h1>
                            Author : {event.author}
                        </p>
                        <p>{event.description} </p>
                        <div className="dateSection">

                            <h3> Dates: </h3>
                            <div>{event.dates.map(date =>
                                <div>
                                    <p>{date.date}</p>
                                </div>
                            )}  </div>
                        </div>
                    </li>

                )}  </section>
        </main>

    )
}
