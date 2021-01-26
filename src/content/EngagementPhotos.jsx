import { Fragment } from 'react'
import { ContentHeading, Link } from '../components'
import { ENGAGEMENT_PHOTOS_LINK, MPIX_LINK, SARAH_LINK } from '../constants'

function EngagementPhotos() {
    return (
        <Fragment>
            <ContentHeading>Engagement Photos</ContentHeading>

            <div className='text-black text-2xl my-10 px-10'>
                <p className='mb-6'>
                    You can find our engagement photos <Link href={ENGAGEMENT_PHOTOS_LINK}>here on IMGBB</Link>!
                    Please feel free to save any of them that you want.
                </p>

                <p className='mb-6'>
                    If you would like to purchase physical prints of any of the photos, our photographer Sarah Heisserer has recommended <Link href={MPIX_LINK}>mpix</Link>.
                    Download the photos that you would like from our album, visit mpix.com, select the product that you would like and follow their instructions.
                </p>

                <p>
                    Shameless plug - If you love our engagement photos and need a photographer for yourself, please consider checking out <Link href={SARAH_LINK}>Sarah Heisserer's website</Link>.
                    She's a very close friend of ours, incredibly talented, and an absolute pleasure to work with. You won't regret it!
                </p>

            </div>
        </Fragment>
    )
}

export default EngagementPhotos
