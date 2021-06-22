import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { generateErrorModal } from '../helpers'
import { searchGuests, getGuest } from '../graphql/queries'
import Button from './Button'
import TextBox from './TextBox'

function GuestSearch({ setGuest }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(searchGuests, { filter: { firstName: { eq: firstName.trim() }, lastName: { eq: lastName.trim() } } }))
            const guestList = guestData.data.searchGuests.items
            if (guestList.length) {
                const data = await API.graphql(graphqlOperation(getGuest, { id: guestList[0].id }))
                setGuest(data.data.getGuest)
            } else {
                throw new Error(`There was no guest found with the name "${firstName} ${lastName}". Please check your name for any typos and try nicknames/full names. Case DOES matter! If you keep having problems, please text the bride.`)
            }
        } catch (error) {
            generateErrorModal(error.message)
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetchGuests()
    }

    const isDisabled = () => {
        return !firstName || !lastName
    }

    const fieldClass = `
    p-2 mr-4
    `

    return (
        <form>
            <div className="flex flex-wrap justify-around mb-4">
                <TextBox className={fieldClass} label="First Name" value={firstName} onChange={event => setFirstName(event.target.value)} />
                <TextBox className={fieldClass} label="Last Name" value={lastName} onChange={event => setLastName(event.target.value)} />
            </div>
            <Button isDisabled={isDisabled} type="submit" onClick={handleSubmit}>
                Search
            </Button>
        </form>
    )
}

export default GuestSearch
