import { Fragment } from 'react'
import { ContentBody, ContentHeading, Link } from '../components'
import {
    CHICAGO_TO_TUCSON_LINK, STL_TO_TUCSON_LINK,
    PHOENIX_SKY_HARBOR_LINK, TUCSON_INTERNATIONAL_LINK,
    SKYSCANNER_LINK,
} from '../constants'

function Travel() {
    return (
        <Fragment>
            <ContentHeading>Travel</ContentHeading>

            <ContentBody>
                <div className='mb-6'>
                    <h2 className='text-cabernet text-4xl font-bold'>Driving</h2>

                    <div className='ml-10'>
                        <ul className='list-disc'>
                            <li>The drive is approximately 27-30 hours from the <Link href={CHICAGO_TO_TUCSON_LINK}>Chicagoland area</Link></li>
                            <li>The drive is approximately 20-25 hours from the <Link href={STL_TO_TUCSON_LINK}>St. Louis area</Link></li>
                            <li><strong>There are limited places to stop between Amarillo, TX and Tucson/Phoenix, so plan accordingly!</strong></li>
                        </ul>
                    </div>
                </div>

                <div className='mb-6'>
                    <h2 className='text-cabernet text-4xl font-bold'>Flying</h2>

                    <div className='ml-10'>
                        <p className='mb-6'>
                            There are two major options for flying into the area: <Link href={PHOENIX_SKY_HARBOR_LINK}>Phoenix Sky Harbor</Link> and <Link href={TUCSON_INTERNATIONAL_LINK}>Tucson International Airport</Link>.
                            If you're unsure of where to buy tickets from, <Link href={SKYSCANNER_LINK}>SkyScanner</Link> has been a useful tool for us to compare airlines and find the cheapest flights.
                        </p>

                        <div className='flex flex-wrap justify-around'>
                            <div className='h-auto w-112'>
                                <h3 className='text-3xl underline text-cabernet'>Phoenix Sky Harbor</h3>
                                <div className='mb-6'>
                                    <p>Pros</p>
                                    <ul className='ml-16 list-disc'>
                                        <li>More flights</li>
                                        <li>More <strong>direct</strong> flights</li>
                                        <li>Very user-friendly rent-a-car service station</li>
                                        <li>Easy drive from Phoenix to Tucson</li>
                                    </ul>
                                    <p>Cons</p>
                                    <ul className='ml-16 list-disc'>
                                        <li>It is about a 1.5 hour drive from the wedding venue</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='h-auto w-112'>
                                <h3 className='text-3xl underline text-cabernet'>Tucson International Airport</h3>
                                <div className='mb-6'>
                                    <p>Pros</p>
                                    <ul className='ml-16 list-disc'>
                                        <li>It is about 25 minutes from the wedding venue</li>
                                    </ul>
                                    <p>Cons</p>
                                    <ul className='ml-16 list-disc'>
                                        <li>There are fewer flights in general from Illinois and Missouri</li>
                                        <li>There are even fewer <strong>direct</strong> flights</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentBody>
        </Fragment>
    )
}

export default Travel
