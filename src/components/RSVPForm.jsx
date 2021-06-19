import { Fragment, useState } from 'react'
import Checkbox from './Checkbox'
import { FoodOptions, YesNoOptions } from './select-options'
import SelectBox from './SelectBox'
import TextBox from './TextBox'
import { API, graphqlOperation } from 'aws-amplify'
import { updateGuest } from '../graphql/mutations'
import swal from 'sweetalert2'

function RSVPForm({ guest }) {
    if (guest.rsvp.toLowerCase() === 'false' || guest.rsvp.toLowerCase() === 'true') {
        guest.rsvp = ''
    }

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
        const newRsvp = event.target.value
        setRsvp(newRsvp)

        if (newRsvp === 'Yes') {
            setRsvpDate(new Date().toISOString().split('T')[0])
        } else {
            setRsvpDate(new Date('2000-01-01').toISOString().split('T')[0])
        }
    }

    const isSubmitDisabled = () => {
        return !rsvp || !dinnerOption
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const input = {
                id,
                firstName: guest.firstName,
                lastName: guest.lastName,
                group: guest.group,
                attendingRehearsalDinner,
                dinnerOption,
                overTwentyOne,
                rsvp,
                rsvpDate,
                plusOneAllowed,
                plusOneDinner,
                plusOneName,
            }

            await API.graphql(graphqlOperation(updateGuest, { input }))

            swal.fire({
                title: 'Success!',
                text: 'If you have other family members that have been invited, please feel free to submit their RSVP as well. Thank you!',
                icon: 'success',
            })
        } catch (error) {
            swal.fire({
                title: 'Oops!',
                text: 'Sorry, it looks like something went wrong while saving your data. If this keeps happening, please text the bride.',
                icon: 'error',
            })
        }
    }

    return (
        <form className="mt-10" id="rsvp-form">
            <div className="flex flex-col items-start">
                <SelectBox className="p-5" label="RSVP" value={rsvp} onChange={toggleRSVP}>
                    <YesNoOptions />
                </SelectBox>

                <Checkbox className="p-5" label="Attending Rehearsal Dinner (Check if yes)" value={attendingRehearsalDinner} onChange={() => setAttendingRehearsalDinner(!attendingRehearsalDinner)} />

                <Checkbox className="p-5" label="Over Twenty-One Years Old (Check if yes)" value={overTwentyOne} onChange={() => setOverTwentyOne(!overTwentyOne)} />

                <SelectBox className="p-5" label="Dinner" value={dinnerOption} onChange={event => setDinnerOption(event.target.value)}>
                    <FoodOptions />
                </SelectBox>

                {plusOneAllowed && <Fragment>
                    <TextBox className="p-5" label="Plus One Name (Leave blank if coming alone)" value={plusOneName} onChange={event => setPlusOneName(event.target.value)} />

                    <SelectBox className="p-5" label="Plus One Dinner (Leave blank if coming alone)" value={plusOneDinner} onChange={event => setPlusOneDinner(event.target.value)}>
                        <FoodOptions />
                    </SelectBox>
                </Fragment>}

            </div>

            <button className="generic-button rounded m-5" disabled={isSubmitDisabled()} type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}

export default RSVPForm
