import { Fragment } from 'react'
import { ContentHeading } from '../components'
function RSVP() {
    return (
        <Fragment>
            <ContentHeading>R.S.V.P.</ContentHeading>

            <div className='text-black text-2xl text-center mt-20 px-5'>
                <h2 className='text-4xl text-cabernet mb-8'>This feature will be coming in a future version of the site!</h2>
                <p className='mb-4'>This is by far the most complex part of the website, but I wanted the wedding information to be available as soon as possible.</p>
                <p>You will be able to RSVP by the end of April, as promised. :)</p>
            </div>
        </Fragment>
    )
}

export default RSVP
