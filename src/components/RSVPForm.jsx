import { API, graphqlOperation } from 'aws-amplify'
import { updateGuest } from '../graphql/mutations'
import { generateErrorModal, generateSuccessModal } from '../helpers'
import { Fragment, useState } from 'react'
import Button from './Button'
import Checkbox from './Checkbox'
import { FoodOptions, YesNoOptions, YesNoValues } from './select-options'
import SelectBox from './SelectBox'
import TextBox from './TextBox'

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

        if (newRsvp === YesNoValues.YES) {
            setRsvpDate(new Date().toISOString().split('T')[0])
        } else {
            setRsvpDate(new Date('2000-01-01').toISOString().split('T')[0])
        }
    }

    const isSubmitDisabled = () => {
        if (!rsvp) return true
        if (rsvp === YesNoValues.NO) return false

        return !dinnerOption
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
                plusOneName: plusOneName.trim(),
            }

            await API.graphql(graphqlOperation(updateGuest, { input }))
            generateSuccessModal('If you have other family members that have been invited, please feel free to submit their RSVP as well. Thank you!')
        } catch (error) {
            generateErrorModal('Sorry, it looks like something went wrong while saving your data. If this keeps happening, please text the bride.')
        }
    }

    const fieldClass = `
    p-2
    `

    return (
        <form id='rsvp-form'>
            <h4 className="underline pb-4">RSVP Information for {guest.firstName} {guest.lastName}</h4>
            <div className='flex flex-col items-start'>
                <SelectBox className={fieldClass} label='RSVP' value={rsvp} onChange={toggleRSVP}>
                    <YesNoOptions />
                </SelectBox>

                <Checkbox className={fieldClass} label='Attending Rehearsal Dinner (Check if yes)' value={attendingRehearsalDinner} onChange={() => setAttendingRehearsalDinner(!attendingRehearsalDinner)} />

                <Checkbox className={fieldClass} label='Over Twenty-One Years Old (Check if yes)' value={overTwentyOne} onChange={() => setOverTwentyOne(!overTwentyOne)} />

                <SelectBox className={fieldClass} label='Dinner' value={dinnerOption} onChange={event => setDinnerOption(event.target.value)}>
                    <FoodOptions />
                </SelectBox>

                {plusOneAllowed && <Fragment>
                    <TextBox className={fieldClass} label='Plus One Name (Leave blank if coming alone)' value={plusOneName} onChange={event => setPlusOneName(event.target.value)} />

                    <SelectBox className={fieldClass} label='Plus One Dinner' value={plusOneDinner} onChange={event => setPlusOneDinner(event.target.value)}>
                        <FoodOptions />
                    </SelectBox>
                </Fragment>}

            </div>

            <Button className='m-5' disabled={isSubmitDisabled()} type='submit' onClick={handleSubmit}>
                Submit
            </Button>
        </form>
    )
}

export default RSVPForm
