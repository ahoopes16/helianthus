import { useState } from 'react'

function RSVPForm({ guest }) {
    /** Guest form information */
    const [id, setId] = useState(guest.id)
    const [attendingRehearsalDinner, setAttendingRehearsalDinner] = useState(guest.attendingRehearsalDinner)
    const [dinnerOption, setDinnerOption] = useState(guest.dinnerOption)
    const [overTwentyOne, setOverTwentyOne] = useState(guest.overTwentyOne)
    const [rsvp, setRsvp] = useState(guest.rsvp)
    const [rsvpDate, setRsvpDate] = useState(guest.rsvpDate)

    /** Plus One information */
    const [plusOneAllowed, setPlusOneAllowed] = useState(guest.plusOneAllowed)
    const [plusOneDinner, setPlusOneDinner] = useState(guest.plusOneDinner)
    const [plusOneName, setPlusOneName] = useState(guest.plusOneName)

    if (guest.id !== id) {
        console.log('Updating guest!')
        setId(guest.id)
        setAttendingRehearsalDinner(guest.attendingRehearsalDinner)
        setDinnerOption(guest.dinnerOption)
        setOverTwentyOne(guest.overTwentyOne)
        setRsvp(guest.rsvp)
        setRsvpDate(guest.rsvpDate)
        setPlusOneAllowed(guest.plusOneAllowed)
        setPlusOneDinner(guest.plusOneDinner)
        setPlusOneName(guest.plusOneName)
    }

    return (
        <form className="flex flex-column" id="rsvp-form">
            <label>
                RSVP:
                <input type="checkbox" name="rsvp" value={rsvp} onChange={() => setRsvp(!rsvp)} />
            </label>
            <label>
                Attending Rehearsal Dinner:
                <input type="checkbox" name="attendingRehearsalDinner" value={attendingRehearsalDinner} onChange={() => setAttendingRehearsalDinner(!attendingRehearsalDinner)} />
            </label>
            <label>
                Over Twenty One:
                <input type="checkbox" name="overTwentyOne" value={overTwentyOne} onChange={() => setOverTwentyOne(!overTwentyOne)} />
            </label>
            <label>
                Dinner:
                <input type="text" name="dinnerOption" value={dinnerOption} onChange={event => setDinnerOption(event.target.value)} />
            </label>
            {plusOneAllowed && <label>
                Plus One Name:
                <input type="text" name="plusOneName" value={plusOneName} onChange={event => setPlusOneName(event.target.value)} />
            </label>}
            {plusOneAllowed && <label>
                Plus One Dinner:
                <input type="text" name="plusOneDinner" value={plusOneDinner} onChange={event => setPlusOneDinner(event.target.value)} />
            </label>}
        </form>
    )
}

export default RSVPForm
