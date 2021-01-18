import { NavLink } from 'react-router-dom'

function Navigation() {
    const linkClass = 'py-5'

    return (
        <div className='bg-navy text-center text-2xl font-bold'>
            <div className='flex flex-col pt-8'>
                <NavLink className={linkClass} to='/about'>About</NavLink>
                <NavLink className={linkClass} to='/rsvp'>RSVP</NavLink>
                <NavLink className={linkClass} to='/faq'>FAQ</NavLink>
                <NavLink className={linkClass} to='/travel'>Travel</NavLink>
                <NavLink className={linkClass} to='/lodging'>Lodging</NavLink>
                <NavLink className={linkClass} to='/points-of-interest'>Points of Interest</NavLink>
                <NavLink className={linkClass} to='/engagement-photos'>Engagement Photos</NavLink>
                <NavLink className={linkClass} to='/gifts'>Gifts</NavLink>
            </div>
        </div>
    )
}

export default Navigation
