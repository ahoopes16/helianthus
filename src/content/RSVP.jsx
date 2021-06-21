import { Fragment, useState } from 'react'
import { ContentBody, ContentHeading } from '../components'
import { GuestSearch, RSVPForm } from '../components'

function RSVP() {
    const [guest, setGuest] = useState(null)

    return (
        <Fragment>
            <ContentHeading>R.S.V.P.</ContentHeading>

            <ContentBody className='text-center text-sm mobile:text-base'>
                <GuestSearch setGuest={setGuest} />
                {guest && <Fragment>
                    <hr className="my-5" />
                    <RSVPForm guest={guest} />
                </Fragment>}
            </ContentBody>
        </Fragment>
    )
}

export default RSVP
