import { Fragment, useState } from 'react'
import Checkbox from './Checkbox'
import { FoodOptions, YesNoOptions } from './select-options'
import SelectBox from './SelectBox'
import TextBox from './TextBox'

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

    const toggleRSVP = event => {
        setRsvp(event.target.value)

        if (rsvp === 'Yes') {
            setRsvpDate(new Date().toISOString())
        } else {
            setRsvpDate('')
        }
    }

    return (
        <form className="flex flex-col items-start justify-around mt-10" id="rsvp-form">
            <SelectBox className="p-5" label="RSVP" value={rsvp} onChange={toggleRSVP}>
                <YesNoOptions />
            </SelectBox>

            <Checkbox className="p-5" label="Attending Rehearsal Dinner (Check if yes)" value={attendingRehearsalDinner} onChange={() => setAttendingRehearsalDinner(!attendingRehearsalDinner)} />

            <Checkbox className="p-5" label="Over Twenty-One Years Old (Check if yes)" value={overTwentyOne} onChange={() => setOverTwentyOne(!overTwentyOne)} />

            <SelectBox className="p-5" label="Dinner" value={dinnerOption} onChange={event => setDinnerOption(event.target.value)}>
                <FoodOptions />
            </SelectBox>

            {plusOneAllowed && <Fragment>
                <TextBox className="p-5" label="Plus One Name" value={plusOneName} onChange={event => setPlusOneName(event.target.value)} />

                <SelectBox className="p-5" label="Plus One Dinner" value={plusOneDinner} onChange={event => setPlusOneDinner(event.target.value)}>
                    <FoodOptions />
                </SelectBox>
            </Fragment>}
        </form>
    )
}

export default RSVPForm
