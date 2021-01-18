import './generated/tailwind.css'
import logo from './img/logo.png'

function App() {
  const appClass = 'bg-steel'

  return (
    <div id='app' className={appClass}>
      <div className='bg-navy text-gold text-parisienne text-5xl grid grid-cols-12'>
        <div className='flex items-center justify-center'>
          <img className='h-20 w-20' src={logo} alt='Logo' />
        </div>
        <div className='col-span-11'>
          <h1 className='text-center py-4'>Nikki &#38; Alex &#8226; October 8, 2021</h1>
        </div>
      </div>

      <div className='text-gold text-roboto font-bold text-2xl grid grid-cols-12'>
        <div className='bg-navy text-center'>
          <ul className='pt-8'>
            <li className='py-5'>About</li>
            <li className='py-5'>RSVP</li>
            <li className='py-5'>FAQ</li>
            <li className='py-5'>Travel</li>
            <li className='py-5'>Lodging</li>
            <li className='py-5'>Points of Interest</li>
            <li className='py-5'>Engagement Photos</li>
            <li className='py-5'>Gifts</li>
          </ul>
        </div>

        <div className='col-span-11 flex items-center justify-center'>
          <div className='h-224 w-320 bg-cream shadow-xl'>
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
