import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { searchGuests } from '../graphql/queries'

function GuestSearch({ setGuest }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(searchGuests, { filter: { firstName: { eq: firstName }, lastName: { eq: lastName } } }))
            const guestList = guestData.data.searchGuests.items

            if (guestList.length) {
                setGuest(guestList[0])
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
    )
}

export default GuestSearch
