import { Fragment, useEffect } from 'react'
import { ContentBody, ContentHeading } from '../components'
import { API, graphqlOperation } from 'aws-amplify'
import { listGuests } from '../graphql/queries'

function RSVP() {
    useEffect(() => {
        const fetchGuests = async () => {
            try {
                const guestData = await API.graphql(graphqlOperation(listGuests))
                const guestList = guestData.data.listGuests.items
                console.log('Guest List: ', guestList)
            } catch (error) {
                console.error(error)
            }
        }

        fetchGuests()
    }, [])

    const Header = ({ children }) => {
        return <h2 className='text-4xl text-cabernet mb-8'>{children}</h2>
    }

    const Paragraph = ({ children }) => {
        return <p className='mb-4'>{children}</p>
    }

    return (
        <Fragment>
            <ContentHeading>R.S.V.P.</ContentHeading>

            <ContentBody className='text-center mt-20'>
                <Header>This feature will be coming in a future version of the site!</Header>

                <Paragraph>
                    This is by far the most complex part of the website, but I wanted the wedding information to be available as soon as possible.
                </Paragraph>

                <Paragraph>You will be able to RSVP by the end of April, as promised. :)</Paragraph>
            </ContentBody>
        </Fragment>
    )
}

export default RSVP
