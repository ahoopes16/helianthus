import { Fragment } from 'react'
import { ContentBody, ContentHeading, Link } from '../components'
import {
    DESERT_MUSEUM_LINK, MOUNT_LEMMON_LINK, EL_CHARROS_LINK,
    DESERT_BOTANICAL_GARDENS_LINK, SUNRISE_TRAIL_LINK, DOWNTOWN_SCOTTSDALE_LINK, DOWNTOWN_GILBERT_LINK,
    JAVELINA_CANTINA_LINK, BELL_ROCK_LINK, SLIDE_ROCK_LINK, JEEP_TOURS_LINK,
} from '../constants'

function PointsOfInterest() {
    const Section = ({ children }) => {
        const className = `
        h-auto tablet:w-48
        mb-6 mx-1
        `
        return <div className={className}>{children}</div>
    }

    const SectionHeader = ({ children }) => {
        const className = `
        text-cabernet underline
        text-2xl
        `
        return <div className={className}>{children}</div>
    }

    const SectionBody = ({ children }) => {
        const className = `
        `
        return <div className={className}>{children}</div>
    }

    const ListItem = ({ children }) => {
        const className = `
        py-1
        `
        return <li className={className}>{children}</li>
    }

    return (
        <Fragment>
            <ContentHeading>Points Of Interest</ContentHeading>

            <ContentBody>
                <p className='mb-6'>
                    Thinking of staying for Columbus Day weekend? Or turning your stay into a vacation? We think that's a great idea!
                    Consider checking out these locations/points of interest.
                    They are all top-rated places to visit in each city, and are some of Alex and Nikki's favorite spots!
                </p>

                <div className='mb-8 tablet:flex tablet:flex-wrap tablet:justify-around'>
                    <Section>
                        <SectionHeader>Tucson, AZ</SectionHeader>

                        <SectionBody>
                            <ul>
                                <ListItem><Link href={DESERT_MUSEUM_LINK}>AZ-Sonora Desert Museum</Link></ListItem>
                                <ListItem><Link href={EL_CHARROS_LINK}>El Charro Mexican Café</Link></ListItem>
                                <ListItem><Link href={MOUNT_LEMMON_LINK}>Windy Point Vista, Mt Lemmon</Link></ListItem>
                            </ul>
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHeader>Phoenix, AZ</SectionHeader>

                        <SectionBody>
                            <ul>
                                <ListItem><Link href={DESERT_BOTANICAL_GARDENS_LINK}>Desert Botanical Gardens</Link></ListItem>
                                <ListItem><Link href={DOWNTOWN_GILBERT_LINK}>Gilbert's Heritage District</Link></ListItem>
                                <ListItem><Link href={DOWNTOWN_SCOTTSDALE_LINK}>Old Town Scottsdale</Link></ListItem>
                                <ListItem><Link href={SUNRISE_TRAIL_LINK}>Sunrise Trail</Link></ListItem>
                            </ul>
                        </SectionBody>
                    </Section>

                    <Section>
                        <SectionHeader>Sedona, AZ</SectionHeader>

                        <SectionBody>
                            <ul>
                                <ListItem><Link href={BELL_ROCK_LINK}>Bell Rock Loop</Link></ListItem>
                                <ListItem><Link href={JAVELINA_CANTINA_LINK}>Javelina Cantina Restaurant</Link></ListItem>
                                <ListItem><Link href={JEEP_TOURS_LINK}>Sedona Jeep Tours</Link></ListItem>
                                <ListItem><Link href={SLIDE_ROCK_LINK}>Slide Rock State Park</Link></ListItem>
                            </ul>
                        </SectionBody>
                    </Section>
                </div>
            </ContentBody>
        </Fragment>
    )
}

export default PointsOfInterest
