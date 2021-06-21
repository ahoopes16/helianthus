import { Fragment, useState } from 'react'
import { ContentBody, ContentHeading } from '../components'
import { GuestSearch, RSVPForm } from '../components'

function RSVP() {
    const [guest, setGuest] = useState(null)
    const className = `
    text-center
    text-sm mobile-md:text-base mobile-lg:text-lg tablet:text-xl laptop:text-2xl desktop:text-3xl
    `

    return (
        <Fragment>
            <ContentHeading>R.S.V.P.</ContentHeading>

            <ContentBody className={className}>
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
