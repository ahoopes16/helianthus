import './generated/tailwind.css'
import Heading from './components/Heading'
import sunflower from './img/sunflower.png'
import MediaQuery from 'react-responsive'

const hashtagStyles = {
  sizes: 'xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-lg',
  margins: 'xl:mt-24 lg:mt-8 md:mt-12 sm:mt-8 mt-6'
}

const sunflowerStyles = {
  image: 'object-contain',
  sizes: 'xl:h-88 lg:h-72 md:h-64 sm:h-48 h-32',
  margins: 'xl:-mt-20 lg:mt-16 md:mt-16 sm:mt-16 mt-12',
  leftSpecific: 'xl:-mr-32 transform -rotate-45',
  rightSpecific: 'xl:-ml-32 transform scale-x-flip xl:rotate-45',
}

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

      <div className='flex xl:flex-row flex-col xl:justify-around xl:my-24'>
        <MediaQuery minDeviceWidth={1280}>
          <img
            src={sunflower}
            alt="left sunflower graphic"
            className={`${sunflowerStyles.image} ${sunflowerStyles.sizes} ${sunflowerStyles.margins} ${sunflowerStyles.leftSpecific}`}
          />
        </MediaQuery>

        <h2 className={`${hashtagStyles.sizes} ${hashtagStyles.margins}`}>#2haveand2hoopes</h2>

        <img
          src={sunflower}
          alt="right sunflower graphic"
          className={`${sunflowerStyles.image} ${sunflowerStyles.sizes} ${sunflowerStyles.margins} ${sunflowerStyles.rightSpecific}`}
        />
      </div>
    </div>
  );
}

export default App;
