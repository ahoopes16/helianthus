import { Fragment } from 'react'
import { ContentBody, ContentHeading, Link } from '../components'
import { NIKKI_PHONE, WILD_HORSE_RANCH_LINK } from '../constants'

function FAQ() {
    return (
        <Fragment>
            <ContentHeading>Frequently Asked Questions</ContentHeading>

            <ContentBody>
                <p className='mb-8 text-center'>Don't see your question here? Please contact the bride at <Link href={NIKKI_PHONE}>(480) 865-4626</Link>.</p>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>What should I wear?</h2>
                    <div className='ml-10'>
                        <p className='mb-2'>
                            This is a semi-formal wedding.
                            The bride will be in yellow, not white, so <strong>please do not wear yellow</strong>.
                            Sundresses, skirts, slacks, and short/long-sleeve button-down shirts are appropriate attire.
                            Ties and suit jackets are not required but are permissible.
                        </p>
                        <p><strong>Please do not wear denim, jeans, shorts, or kilts (Looking at you, Dad).</strong></p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>What will the weather be like?</h2>
                    <div className='ml-10'>
                        <p>
                            The air here is dry, so 90 degrees in Arizona feels more like 75-80 degrees in the Midwest.
                            Expect the weather to be between 85-95 degrees during the ceremony, and 65-80 degrees in the evening.
                            It is recommended you bring a light layer for the evening, as the temperature drops dramatically with the sunset.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>What will the time difference be?</h2>
                    <div className='ml-10'>
                        <p>
                            In October, Arizona will be 2 hours behind Illinois and Missouri due to Daylight Savings Time.
                            For example, 4:00PM Arizona time will be 6:00PM Illinois/Missouri time.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>Will alcohol affect me differently in AZ?</h2>
                    <div className='ml-10'>
                        <p>
                            In the dry climate and higher elevation, alcohol may impact you differently.
                            Alex and Nikki's drink limits are about 1/2 in Arizona compared to the Midwest.
                            Not everyone experiences this, but pace yourself!
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>Do I have a plus one?</h2>
                    <div className='ml-10'>
                        <p className='mb-2'>
                            If your Save the Date indicates that you have a plus one, then you have a plus one!
                            The website will also indicate that you have a plus one when you RSVP.
                        </p>
                        <p>
                            If you did not a receive a plus one on your Save the Date, then you do not have one.
                            We are trying to keep the wedding small and intimate, so there were very few plus ones given.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>Are formal invitations coming?</h2>
                    <div className='ml-10'>
                        <p>
                            You're looking at it!
                            We sent out our Save the Dates and then created this website in lieu of sending out separate invitations.
                            This is the invitation. :)
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>Is the entire event at one location?</h2>
                    <div className='ml-10'>
                        <p>
                            Yes, the entire event from beginning to end will be taking place at <Link href={WILD_HORSE_RANCH_LINK}>Oasis at Wild Horse Ranch in Tucson, Arizona</Link>.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>What is the food/alcohol situation?</h2>
                    <div className='ml-10'>
                        <p className='mb-2'>
                            You will be able to indicate any special food needs when you RSVP.
                            Food will consist of hors d'oeuvres at cocktail hour, a 2-stationed dinner, and a dessert table.
                        </p>
                        <p>
                            There will be an open bar for 4 hours. After 9:00PM, it will turn into a cash bar.
                            The open bar will have a variety of hard liquors, beer, wine, and non-alcoholic beverages.
                            At cocktail hour, prickly pear margaritas will be served.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>How will parking work?</h2>
                    <div className='ml-10'>
                        <p className='mb-2'>
                            You can Uber or bring a car!
                            There is a huge parking lot and valets to help you park.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>Am I invited to the rehearsal dinner?</h2>
                    <div className='ml-10'>
                        <p className='mb-2'>
                            Of course you are! The rehearsal dinner is an open invitation to everyone.
                            That being said, please don't feel like you have to come since it is the day before the wedding, which happens to be a Thursday.
                        </p>
                        <p>
                            For rehearsal dinner information, please go to the About page.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>Are my kids/babies invited?</h2>
                    <div className='ml-10'>
                        <p>
                            Small children and babies are <strong>not</strong> invited to the wedding.
                            We respectfully ask that you leave them at home.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>What COVID procedures will be in place?</h2>
                    <div className='ml-10'>
                        <p className='mb-2'>
                            Please be prepared to bring a mask, since we don't know where the world will be in October in relation to COVID-19.
                            We will not legally have to cancel the event due to COVID-19 because the entire event is outdoors and the venue can continue to operate at half capacity (400 people).
                            We will only have 80-100 guests, so there is plenty of space for social distancing.
                        </p>
                        <p>
                            If you are worried about contracting COVID/have medical concerns, please notify the bride for special seating.
                            Masks and face shields are welcomed and encouraged.
                        </p>
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='text-cabernet text-4xl font-bold'>What if I can't make it?</h2>
                    <div className='ml-10'>
                        <p>
                            Don't worry, we understand. :)
                            Our wedding is very far away and many may still have health concerns related to traveling.
                            We will be live-streaming the ceremony so you can see it from a distance! More details on that to come.
                        </p>
                    </div>
                </div>
            </ContentBody>
        </Fragment>
    )
}

export default FAQ
