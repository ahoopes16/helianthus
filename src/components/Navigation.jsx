import { NavLink, useLocation } from 'react-router-dom'
import { pages } from '../constants'

function Navigation({ showNavbar, toggleNavbar }) {
    const linkContainerBaseClass = 'py-5'
    const selectedClass = 'text-navy bg-gold'
    const location = useLocation()
    const mainClasses = `
    bg-navy text-center font-bold break-words
    mobile-md:text-lg mobile-lg:text-xl
    w-full laptop:w-40
    laptop:flex laptop:flex-col laptop:flex-none
    ${showNavbar ? 'flex flex-col' : 'hidden'}
    `

    return (
        <div className={mainClasses}>
            {pages.map(page => {
                const linkContainerClass = `${linkContainerBaseClass} ${location.pathname === page.path ? selectedClass : ''}`
                const key = `nav-${page.title.toLowerCase().replace(' ', '-')}`

                return (
                    <NavLink key={key} className={`hover:underline ${linkContainerClass}`} onClick={toggleNavbar} to={page.path}>
                        {page.title}
                    </NavLink>
                )
            }
            )}
        </div>
    )
}

export default Navigation
