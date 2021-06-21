import { Fragment } from 'react'
import { ContentHeading, Link } from '../components'
import { WILD_HORSE_RANCH_LINK, WILD_HORSE_RANCH_ADDRESS_LINK } from '../constants'

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
            text-lg mobile-lg:text-xl
        `
        return <h2 className={className}>{children}</h2>
    }

    const CardBody = ({ children }) => {
        const className=`
        ml-4
        mobile-lg:text-lg
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
                        <p><strong>Location:&nbsp;</strong>TBD</p>
                        <p><strong>Address:&nbsp;</strong>TBD</p>
                        <p><strong>Time:&nbsp;</strong>TBD</p>
                        <br />
                        <p><strong>Information:</strong></p>
                        <div className='px-2'>
                            <p>
                                The rehearsal dinner will be very informal!
                                We have rented out a hotel conference room and will have pizza, sandwiches, and drinks.
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
