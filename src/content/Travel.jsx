import { Fragment } from 'react'
import { ContentBody, ContentHeading, Link } from '../components'
import {
    CHICAGO_TO_TUCSON_LINK, STL_TO_TUCSON_LINK,
    PHOENIX_SKY_HARBOR_LINK, TUCSON_INTERNATIONAL_LINK,
    SKYSCANNER_LINK,
} from '../constants'

function Travel() {
    const Section = ({ children }) => {
        const className = `
        mb-6
        `
        return <div className={className}>{children}</div>
    }

    const SectionHeader = ({ children }) => {
        const className = `
        text-cabernet font-bold
        text-xl mobile-lg:text-2xl
        `
        return <h2 className={className}>{children}</h2>
    }

    const SectionBody = ({ children }) => {
        const className = `
        ml-6
        `
        return <div className={className}>{children}</div>
    }

    const List = ({ children }) => {
        const className = `
        list-disc
        ml-10
        `
        return <ul className={className}>{children}</ul>
    }

    const AirportInfoCard = ({ children }) => {
        const className = `
        h-auto tablet:w-80
        `
        return <div className={className}>{children}</div>
    }

    const AirportName = ({ children }) => {
        const className = `
        text-cabernet underline
        text-xl mobile-lg:text-2xl
        `
        return <h3 className={className}>{children}</h3>
    }

    const AirportInfoWrapper = ({ children }) => {
        const className = `
        mb-6
        `
        return <div className={className}>{children}</div>
    }

    return (
        <Fragment>
            <ContentHeading>Travel</ContentHeading>

            <ContentBody>
                <Section>
                    <SectionHeader>Driving</SectionHeader>

                    <SectionBody>
                        <ul className='list-disc'>
                            <li>The drive is approximately 27-30 hours from the <Link href={CHICAGO_TO_TUCSON_LINK}>Chicagoland area</Link></li>
                            <li>The drive is approximately 20-25 hours from the <Link href={STL_TO_TUCSON_LINK}>St. Louis area</Link></li>
                            <li><strong>There are limited places to stop between Amarillo, TX and Tucson/Phoenix, so plan accordingly!</strong></li>
                        </ul>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionHeader>Flying</SectionHeader>

                    <SectionBody>
                        <p className='mb-6'>
                            There are two major options for flying into the area: <Link href={PHOENIX_SKY_HARBOR_LINK}>Phoenix Sky Harbor</Link> and <Link href={TUCSON_INTERNATIONAL_LINK}>Tucson International Airport</Link>.
                            If you're unsure of where to buy tickets from, <Link href={SKYSCANNER_LINK}>SkyScanner</Link> has been a useful tool for us to compare airlines and find the cheapest flights.
                        </p>

                        <div className='tablet:flex tablet:flex-wrap tablet:justify-around'>
                            <AirportInfoCard>
                                <AirportName>Phoenix Sky Harbor</AirportName>

                                <AirportInfoWrapper>
                                    <p>Pros</p>
                                    <List>
                                        <li>More flights</li>
                                        <li>More <strong>direct</strong> flights</li>
                                        <li>Very user-friendly rent-a-car service station</li>
                                        <li>Easy drive from Phoenix to Tucson</li>
                                    </List>

                                    <p>Cons</p>
                                    <List>
                                        <li>It is about a 1.5 hour drive from the wedding venue</li>
                                    </List>
                                </AirportInfoWrapper>
                            </AirportInfoCard>

                            <AirportInfoCard>
                                <AirportName>Tucson International Airport</AirportName>

                                <AirportInfoWrapper>
                                    <p>Pros</p>
                                    <List>
                                        <li>It is about 25 minutes from the wedding venue</li>
                                    </List>

                                    <p>Cons</p>
                                    <List>
                                        <li>There are fewer flights in general from Illinois and Missouri</li>
                                        <li>There are even fewer <strong>direct</strong> flights</li>
                                    </List>
                                </AirportInfoWrapper>
                            </AirportInfoCard>
                        </div>
                    </SectionBody>
                </Section>
            </ContentBody>
        </Fragment>
    )
}

export default Travel
