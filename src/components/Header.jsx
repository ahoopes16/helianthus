import logo from '../img/logo.png'

function Header() {
    return (
        <div className='bg-navy text-parisienne text-5xl grid grid-cols-12'>
            <div className='flex items-center justify-center'>
                <img className='h-20 w-20' src={logo} alt='Logo' />
            </div>
            <div className='col-span-11'>
                <h1 className='text-center py-4'>Nikki &#38; Alex &#8226; October 8, 2021</h1>
            </div>
        </div>
    )
}

export default Header
