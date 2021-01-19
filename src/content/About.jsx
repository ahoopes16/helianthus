import { Fragment } from 'react'
import { Link } from '../components'

function About() {
    return (
        <Fragment>
            <h1 className='text-center text-cabernet text-parisienne text-6xl'>About</h1>

            <div className='flex justify-around flex-wrap my-4'>
                <div className='text-black h-auto w-112 bg-white box-shadow p-5 mt-10'>
                    <h2 className='text-cabernet text-center font-bold text-2xl underline'>Wedding/Reception</h2>

                    <div className='ml-6 text-xl'>
                        <p><strong>Date:&nbsp;</strong>Friday, October 8th, 2021</p>
                        <p><strong>Location:&nbsp;</strong><Link href='http://www.wldhorse.com/'>Oasis at Wild Horse Ranch</Link></p>
                        <p><strong>Address:&nbsp;</strong><Link href='https://www.google.com/maps/place/The+Oasis+at+Wild+Horse+Ranch/@32.3305269,-111.1104973,17z/data=!3m1!4b1!4m5!3m4!1s0x86d674d400000001:0x6c507c274f08cc6b!8m2!3d32.3305269!4d-111.1083086'>6801 N Camino Verde, Tucson, AZ 85743</Link></p>
                        <br />
                        <p><strong>Timeline:</strong></p>
                        <div className='ml-6'>
                            <p>Arrival begins at 4:00PM. Please <strong>do not</strong> come before 3:45.</p>
                            <p>The ceremony will run from 4:30-5:00PM.</p>
                            <p>Cocktail hour will be from 5:00-6:00PM.</p>
                            <p>Dinner will be from 6:00-7:15PM.</p>
                            <p>Reception is from 7:30-11:00PM.</p>
                        </div>
                    </div>
                </div>

                <div className='text-black h-auto w-112 bg-white box-shadow p-5 mt-10'>
                    <h2 className='text-cabernet text-center font-bold text-2xl underline'>Rehearsal Dinner</h2>

                    <div className='text-xl'>
                        <p><strong>Date:&nbsp;</strong>Thursday, October 7th, 2021</p>
                        <p><strong>Location:&nbsp;</strong>TBD</p>
                        <p><strong>Address:&nbsp;</strong>TBD</p>
                        <p><strong>Time:&nbsp;</strong>TBD</p>
                        <br />
                        <p><strong>Information:</strong></p>
                        <div className='px-6'>
                            <p>
                                The rehearsal dinner will be very informal!
                                We have rented out a hotel conference room and will have pizza, sandwiches, and drinks.
                                If you are in town Thursday night, please feel free to pop in and join us. There is no dress code.
                                We would just love to see you and say hi before our big day. :)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
