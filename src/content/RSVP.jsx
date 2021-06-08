import { Fragment, useState } from 'react'
import { ContentBody, ContentHeading } from '../components'
import { API, graphqlOperation } from 'aws-amplify'
import { searchGuests } from '../graphql/queries'

function RSVP() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [guestFound, setGuestFound] = useState(false)
    const [guest, setGuest] = useState(null)

    /** Guest form information */
    const [attendingRehearsalDinner, setAttendingRehearsalDinner] = useState(false)
    const [dinnerOption, setDinnerOption] = useState('')
    const [overTwentyOne, setOverTwentyOne] = useState(false)
    const [rsvp, setRsvp] = useState(false)
    const [rsvpDate, setRsvpDate] = useState('')

    /** Plus One information */
    const [plusOneAllowed, setPlusOneAllowed] = useState(false)
    const [plusOneDinner, setPlusOneDinner] = useState('')
    const [plusOneName, setPlusOneName] = useState('')

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(searchGuests, { filter: { firstName: { eq: firstName }, lastName: { eq: lastName } } }))
            const guestList = guestData.data.searchGuests.items

            if (guestList.length) {
                const foundGuest = guestList[0]
                setGuestFound(true)
                setGuest(foundGuest)
                setAttendingRehearsalDinner(foundGuest.attendingRehearsalDinner)
                setDinnerOption(foundGuest.dinnerOption)
                setOverTwentyOne(foundGuest.overTwentyOne)
                setRsvp(foundGuest.rsvp)
                setRsvpDate(foundGuest.rsvpDate)
                setPlusOneAllowed(foundGuest.plusOneAllowed)
                setPlusOneDinner(foundGuest.plusOneDinner)
                setPlusOneName(foundGuest.plusOneName)
            } else {
                throw new Error(`There was no guest found with the name "${firstName} ${lastName}"`)
            }
        } catch (error) {
            console.error('Error while fetching guests', error)
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetchGuests()
    }

    return (
        <Fragment>
            <ContentHeading>R.S.V.P.</ContentHeading>

            <ContentBody className='text-center mt-20'>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" onChange={event => setFirstName(event.target.value)} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" onChange={event => setLastName(event.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                {guestFound && <form>
                    <label>
                        RSVP:
                        <input type="checkbox" name="rsvp" onChange={() => setRsvp(!rsvp)} />
                    </label>
                    <label>
                        Attending Rehearsal Dinner:
                        <input type="checkbox" name="attendingRehearsalDinner" onChange={() => setAttendingRehearsalDinner(!attendingRehearsalDinner)} />
                    </label>
                    <label>
                        Over Twenty One:
                        <input type="checkbox" name="overTwentyOne" onChange={() => setOverTwentyOne(!overTwentyOne)} />
                    </label>
                    <label>
                        Dinner:
                        <input type="text" name="dinnerOption" onChange={event => setDinnerOption(event.target.value)} />
                    </label>
                    {plusOneAllowed && <label>
                        Plus One Name:
                        <input type="text" name="plusOneName" onChange={event => setPlusOneName(event.target.value)} />
                    </label>}
                    {plusOneAllowed && <label>
                        Plus One Dinner:
                        <input type="text" name="plusOneDinner" onChange={event => setPlusOneDinner(event.target.value)} />
                    </label>}
                </form>}
            </ContentBody>
        </Fragment>
    )
}

export default RSVP
