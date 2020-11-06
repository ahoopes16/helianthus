import './generated/tailwind.css'
import Heading from './components/Heading'
import SunflowerWrap from './components/SunflowerWrap'
import EmphasizedText from './components/EmphasizedText'

function App() {
  const appClass = `h-full w-full bg-cream
                    flex flex-col
                    text-center text-navy text-roboto
                    lg:text-4xl md:text-3xl sm:text-2xl text-sm`

  return (
    <div className={appClass}>
      <Heading className='lg:my-8 md:my-12 sm:my-8 my-6'>Nikki & Alex's Wedding Website</Heading>

      <div className="my-6">
        <p>Under Construction Until April 2021</p>
        <p>Come back then to RSVP and receive all wedding details!</p>
      </div>

      <SunflowerWrap className='xl:my-24'>
        <EmphasizedText className='xl:mt-24 lg:mt-8 md:mt-12 sm:mt-8 mt-6'>#2haveand2hoopes</EmphasizedText>
      </SunflowerWrap>
    </div>
  );
}

export default App;
