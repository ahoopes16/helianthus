import { useState } from 'react'
import TextBox from './TextBox'
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

    const isDisabled = () => {
        return !firstName || !lastName
    }

    return (
        <form>
            <div className="flex flex-wrap justify-around mb-4">
                <TextBox className='p-2' label="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
                <TextBox className='p-2' label="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
            </div>
            <button className="rounded" disabled={isDisabled()} type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}

export default GuestSearch
