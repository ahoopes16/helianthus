import { Fragment } from 'react'
import { ContentBody, ContentHeading, Link } from '../components'
import {
    HOLIDAY_INN_LINK, HOLIDAY_INN_PHONE,
    COMFORT_INN_LINK, COMFORT_INN_PHONE,
    LA_QUINTA_INN_LINK, LA_QUINTA_INN_PHONE,
    AIR_BNB_LINK,
} from '../constants'

function Lodging() {
    const Section = ({ children }) => {
        return <div className='mb-6'>{children}</div>
    }

    const SectionHeader = ({ children }) => {
        return <h2 className='text-cabernet text-4xl font-bold'>{children}</h2>
    }

    const SectionBody = ({ children }) => {
        return <div className='ml-10'>{children}</div>
    }

    const Paragraph = ({ children }) => {
        return <p className='mb-3'>{children}</p>
    }

    const List = ({ children }) => {
        return <ul className='ml-10 list-disc'>{children}</ul>
    }

    return (
        <Fragment>
            <ContentHeading>Lodging</ContentHeading>

            <ContentBody>
                <Section>
                    <SectionHeader>Our Hotel Block</SectionHeader>

                    <SectionBody>
                        <Paragraph>
                            <strong>NOTE:</strong> If you plan on staying in a hotel in the area, <strong>please try to use our wedding block first</strong>.
                            We are charged if not all of the rooms are filled, and it will likely be the cheapest option available.
                        </Paragraph>

                        <Paragraph>
                            We have booked a hotel block at the <Link href={HOLIDAY_INN_LINK}>Holiday Inn Express &#38; Suites Tucson North - Marana</Link>.
                            There is a discounted rate for each room under our block. Each room is $84 plus tax per night.
                            We have them booked for Thursday, the 7th and Friday, the 8th, but you can extend or shorten your stay in them.
                        </Paragraph>

                        <Paragraph>
                            There are 30 rooms set aside for our wedding guests: 15 single king rooms and 15 double queen rooms.
                            It is first come, first serve. If you would like a room from our wedding block, please follow these instructions:
                        </Paragraph>

                        <List>
                            <li>Call our Holiday Inn at <Link href={HOLIDAY_INN_PHONE}>(520) 572-4777</Link></li>
                            <li>Tell them that you are a Hoopes wedding guest and that you would like to book a room</li>
                            <li>Give them the code: <strong>HOO</strong></li>
                        </List>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionHeader>Other Hotels</SectionHeader>

                    <SectionBody>
                        <Paragraph>
                            If our hotel block is full or you'd like to stay somewhere else, here are some other options that are still very close to the venue.
                        </Paragraph>

                        <List>
                            <li><Link href={COMFORT_INN_LINK}>Comfort Inn &#38; Suites North Tucson - Marana</Link> &#8901; <Link href={COMFORT_INN_PHONE}>(520) 579-1099</Link></li>
                            <li><Link href={LA_QUINTA_INN_LINK}>La Quinta Inn &#38; Suites by Wyndham</Link> &#8901; <Link href={LA_QUINTA_INN_PHONE}>(520) 572-4235</Link></li>
                        </List>
                    </SectionBody>
                </Section>

                <Section>
                    <SectionHeader>AirBNBs</SectionHeader>

                    <SectionBody>
                        <Paragraph>
                            If hotels aren't your thing, feel free to check out some <Link href={AIR_BNB_LINK}>AirBNBs in the area</Link>!
                        </Paragraph>
                    </SectionBody>
                </Section>
            </ContentBody>
        </Fragment>
    )
}

export default Lodging
