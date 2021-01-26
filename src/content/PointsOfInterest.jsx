import { Fragment } from 'react'
import { ContentBody, ContentHeading, Link } from '../components'
import {
    DESERT_MUSEUM_LINK, MOUNT_LEMMON_LINK, EL_CHARROS_LINK,
    DESERT_BOTANICAL_GARDENS_LINK, SUNRISE_TRAIL_LINK, DOWNTOWN_SCOTTSDALE_LINK, DOWNTOWN_GILBERT_LINK,
    JAVELINA_CANTINA_LINK, BELL_ROCK_LINK, SLIDE_ROCK_LINK, JEEP_TOURS_LINK,
} from '../constants'

function PointsOfInterest() {
    return (
        <Fragment>
            <ContentHeading>Points Of Interest</ContentHeading>

            <ContentBody>
                <p className='mb-20'>
                    Thinking of staying for Columbus Day weekend? Or turning your stay into a vacation? We think that's a great idea!
                    Consider checking out these locations/points of interest.
                    They are all top-rated places to visit in each city, and are some of Alex and Nikki's favorite spots!
                </p>

                <div className='mb-8 flex flex-wrap justify-around'>
                    <div className='h-auto w-80 mb-8'>
                        <h2 className='text-cabernet text-3xl text-center underline'>Tucson, AZ</h2>
                        <div className='ml-10'>
                            <ul>
                                <li className='py-1'><Link href={DESERT_MUSEUM_LINK}>AZ-Sonora Desert Museum</Link></li>
                                <li className='py-1'><Link href={EL_CHARROS_LINK}>El Charro Mexican Café</Link></li>
                                <li className='py-1'><Link href={MOUNT_LEMMON_LINK}>Windy Point Vista, Mt Lemmon</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='h-auto w-80 mb-8'>
                        <h2 className='text-cabernet text-3xl text-center underline'>Phoenix, AZ</h2>
                        <div className='ml-10'>
                            <ul className=''>
                                <li className='py-1'><Link href={DESERT_BOTANICAL_GARDENS_LINK}>Desert Botanical Gardens</Link></li>
                                <li className='py-1'><Link href={DOWNTOWN_GILBERT_LINK}>Gilbert's Heritage District</Link></li>
                                <li className='py-1'><Link href={DOWNTOWN_SCOTTSDALE_LINK}>Old Town Scottsdale</Link></li>
                                <li className='py-1'><Link href={SUNRISE_TRAIL_LINK}>Sunrise Trail</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='h-auto w-80 mb-8'>
                        <h2 className='text-cabernet text-3xl text-center underline'>Sedona, AZ</h2>
                        <div className='ml-10'>
                            <ul className=''>
                                <li className='py-1'><Link href={BELL_ROCK_LINK}>Bell Rock Loop</Link></li>
                                <li className='py-1'><Link href={JAVELINA_CANTINA_LINK}>Javelina Cantina Restaurant</Link></li>
                                <li className='py-1'><Link href={JEEP_TOURS_LINK}>Sedona Jeep Tours</Link></li>
                                <li className='py-1'><Link href={SLIDE_ROCK_LINK}>Slide Rock State Park</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </ContentBody>
        </Fragment>
    )
}

export default PointsOfInterest
