import { Fragment } from 'react'
import { ContentBody, ContentHeading } from '../components'

function Gifts() {
    return (
        <Fragment>
            <ContentHeading>Gifts</ContentHeading>

            <ContentBody>
                <p className='mb-6'>
                    You coming to our wedding is a <strong>huge</strong> gift!
                    We know that this is a far journey/destination wedding, and your attendance is more than enough.
                </p>

                <p className='mb-6'>
                    If we haven't convinced you, though, and you would still like to give a gift, we would love cash or gift cards!
                    We are currently saving up to buy a house, so cash is king.
                    Moreover, we are in a one bedroom apartment right now and have no location to store physical gifts for the time being.
                    We will not be registering anywhere.
                </p>

                <p>Gift cards we would love:</p>
                <ul className='ml-10 list-disc'>
                    <li>Target</li>
                    <li>Amazon</li>
                    <li>Noodles and Company</li>
                    <li>Jimmy Johns</li>
                    <li>Starbucks</li>
                </ul>
            </ContentBody>
        </Fragment>
    )
}

export default Gifts
