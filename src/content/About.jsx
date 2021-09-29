import { Fragment } from 'react'
import { ContentHeading, Link } from '../components'
import {
    COMFORT_INN_WEBSITE_LINK,
    COMFORT_INN_MAPS_LINK,
    WILD_HORSE_RANCH_LINK,
    WILD_HORSE_RANCH_ADDRESS_LINK,
} from '../constants'

function About() {
    const Card = ({ children }) => {
        const className = `
        text-black bg-white shadow-md rounded-md
        h-auto w-5/6 tablet:w-120
        p-5 my-4
        `
        return <div className={className}>{children}</div>
    }

    const CardHeader = ({ children }) => {
        const className = `
            text-cabernet text-center font-bold underline
            text-lg mobile-lg:text-xl laptop-sm:text-2xl desktop:text-3xl
        `
        return <h2 className={className}>{children}</h2>
    }

    const CardBody = ({ children }) => {
        const className=`
        ml-4
        mobile-lg:text-lg laptop-sm:text-xl desktop:text-2xl
        `
        return <div className={className}>{children}</div>
    }

    return (
        <Fragment>
            <ContentHeading>About</ContentHeading>

            <div className='flex justify-around flex-wrap my-4'>
                <Card>
                    <CardHeader>Wedding/Reception</CardHeader>

                    <CardBody>
                        <p><strong>Date:&nbsp;</strong>Friday, October 8th, 2021</p>
                        <p><strong>Location:&nbsp;</strong><Link href={WILD_HORSE_RANCH_LINK}>Oasis at Wild Horse Ranch</Link></p>
                        <p><strong>Address:&nbsp;</strong><Link href={WILD_HORSE_RANCH_ADDRESS_LINK}>6801 N Camino Verde, Tucson, AZ 85743</Link></p>
                        <br />
                        <p><strong>Timeline:</strong></p>
                        <div className='px-2'>
                            <p>Arrival begins at 4:00PM. Please <strong>do not</strong> come before 3:45.</p>
                            <p>The ceremony will run from 4:30-5:00PM.</p>
                            <p>Cocktail hour will be from 5:00-6:00PM.</p>
                            <p>Dinner will be from 6:00-7:15PM.</p>
                            <p>Reception is from 7:30-11:00PM.</p>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader>Rehearsal Dinner</CardHeader>

                    <CardBody>
                        <p><strong>Date:&nbsp;</strong>Thursday, October 7th, 2021</p>
                        <p><strong>Location:&nbsp;</strong><Link href={COMFORT_INN_WEBSITE_LINK}>Comfort Inn &#38; Suites Tucson North - Marana</Link></p>
                        <p><strong>Address:&nbsp;</strong><Link href={COMFORT_INN_MAPS_LINK}>8425 N Crack Barrel Rd, Tucson, AZ 85743</Link></p>
                        <p><strong>Time:&nbsp;</strong>5:00PM to 8:00PM</p>
                        <br />
                        <p><strong>Information:</strong></p>
                        <div className='px-2'>
                            <p>
                                The rehearsal dinner will be very informal!
                                We have rented out the breakfast area in the nearby Comfort Inn and will have pizza, sandwiches, and drinks.
                                If you are in town Thursday night, please feel free to pop in and join us. There is no dress code.
                                We would just love to see you and say hi before our big day. :)
                            </p>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Fragment>
    )
}

export default About
