import { NavLink } from 'react-router-dom'
import { pages } from '../constants'

function Navigation() {
    const linkClass = 'py-5 hover:underline'

    return (
        <div className='bg-navy text-center text-2xl font-bold'>
            <div className='flex flex-col pt-8'>
                {pages.map(page => <div className={linkClass}><NavLink to={page.path}>{page.title}</NavLink></div>)}
            </div>
        </div>
    )
}

export default Navigation
