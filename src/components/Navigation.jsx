import { NavLink, useLocation } from 'react-router-dom'
import { pages } from '../constants'

function Navigation() {
    const linkContainerBaseClass = 'py-5'
    const linkClass = 'hover:underline'
    const selectedClass = 'text-navy bg-gold'
    const location = useLocation()

    return (
        <div className='bg-navy text-center text-2xl font-bold'>
            <div className='flex flex-col pt-8'>
                {pages.map(page => {
                    const linkContainerClass = `${linkContainerBaseClass} ${location.pathname === page.path ? selectedClass : ''}`

                    return (
                        <div key={`nav-${page.title.toLowerCase().replace(' ', '-')}`} className={linkContainerClass}>
                            <NavLink className={linkClass} to={page.path}>{page.title}</NavLink>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Navigation
