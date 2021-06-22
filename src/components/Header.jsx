import logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'

function Header({ showNavbar, toggleNavbar }) {
    const outerClass = `
    bg-navy text-parisienne flex items-center justify-start
    h-16 mobile-lg:h-20 desktop:h-24
    `

    const logoContainerClass = `
    flex justify-center items-center
    h-16 w-20 mobile-lg:h-20 mobile-lg:w-24 laptop-sm:w-40 desktop:h-24 desktop:w-48
    `

    const logoClass = `
    h-10 w-10 mobile-lg:h-12 mobile-lg:w-12 laptop-sm:h-16 laptop-sm:w-16 desktop:h-20 desktop:w-20
    `

    const textClass = `
    m-auto text-center
    text-lg mobile-md:text-xl mobile-lg:text-2xl tablet:text-4xl desktop:text-6xl
    `

    return (
        <div className={outerClass}>
            <div className={logoContainerClass}>
                <NavLink className='hidden laptop-sm:block' to='/about'>
                    <img className={logoClass} src={logo} alt='Logo' />
                </NavLink>
                <div className='laptop-sm:hidden'>
                    <i className={`fas fa-bars text-gold text-xl mobile-lg:text-2xl ${showNavbar ? 'hidden' : ''}`} onClick={toggleNavbar}></i>
                    <i className={`fas fa-times text-gold text-xl mobile-lg:text-2xl ${showNavbar ? '' : 'hidden'}`} onClick={toggleNavbar}></i>
                </div>
            </div>
            <h1 className={textClass}>Nikki &#38; Alex &#8226; 10/08/2021</h1>
        </div>
    )
}

export default Header
