export default function Header() {
    return (
        <form className= "eventForm">
            <label for= "eventName">Event
            <input id= "eventName" type= "text" name= "name" placeholder= "event name" />
            </label>
            <label for= "description">Description
            <input id= "description" type= "text" name= "description" placeholder= "describe the event"/>
            </label>
            <label for= "author">author
            <input id= "author" type= "text" name= "author" placeholder= "author" />
            </label>
        </form>
    )
}