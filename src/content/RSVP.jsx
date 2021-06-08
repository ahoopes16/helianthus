import { Fragment, useState } from 'react'
import { ContentBody, ContentHeading } from '../components'
import { API, graphqlOperation } from 'aws-amplify'
import { searchGuests } from '../graphql/queries'

function RSVP() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const fetchGuests = async () => {
        try {
            const guestData = await API.graphql(graphqlOperation(searchGuests, { filter: { firstName: { eq: firstName }, lastName: { eq: lastName } }}))
            const guestList = guestData.data.searchGuests.items
            console.log('Guest List: ', guestList)
        } catch (error) {
            console.error('Error while fetching guests', error)
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetchGuests()
    }

    console.log('First Name: ', firstName)
    console.log('Last Name: ', lastName)

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
            </ContentBody>
        </Fragment>
    )
}

export default RSVP
