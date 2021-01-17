import './generated/tailwind.css'
import logo from './img/logo.png'

function App() {
  const appClass = 'h-screen w-screen bg-steel'

  return (
    <div className={appClass}>
      <div className='w-screen bg-navy text-gold text-parisienne text-5xl grid grid-cols-10'>
        <div className='flex items-center justify-center'>
          <img className='h-20 w-20' src={logo} alt='Logo' />
        </div>
        <div className='col-span-8'>
          <h1 className='text-center py-4'>Nikki &#38; Alex &#8226; October 8, 2021</h1>
        </div>
      </div>

      <div className='h-screen text-gold text-roboto font-bold text-xl grid grid-cols-10'>
        <div className='text-center bg-navy'>
          <ul className='pt-8'>
            <li className='py-4'>About</li>
            <li className='py-4'>RSVP</li>
            <li className='py-4'>FAQ</li>
            <li className='py-4'>Travel</li>
            <li className='py-4'>Lodging</li>
            <li className='py-4'>Points of Interest</li>
            <li className='py-4'>Engagement Photos</li>
            <li className='py-4'>Gifts</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;
