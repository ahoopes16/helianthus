import './generated/tailwind.css'
import sunflower from './img/sunflower.png'
import MediaQuery from 'react-responsive'

const sunflowerStyles = {
  sizes: `xl:h-88`,
  margins: `xl:-mt-20`,
}

const headingStyles = {
  sizes: `xl:text-6xl`,
  margins: `xl:my-8`,
}

const paragraphStyles = {
  sizes: `xl:text-4xl`
}

const hashtagStyles = {
  sizes: `xl:text-5xl`,
  margins: `xl:mt-24`
}

function App() {
  const appClass = `h-full w-full bg-cream
                    flex flex-col
                    text-center text-navy text-roboto ${paragraphStyles.sizes}`

  return (
    <div className={appClass}>
      <h1 className={`text-parisienne ${headingStyles.sizes} ${headingStyles.margins}`}>Nikki & Alex's Wedding Website</h1>

      <div className="my-6">
        <p>Under Construction Until April 2021</p>
        <p>Come back then to RSVP and receive all wedding details!</p>
      </div>

      <div className='flex flex-row justify-around my-24'>
        <MediaQuery minDeviceWidth={1280}>
          <img
            src={sunflower}
            alt="left sunflower graphic"
            className={`object-contain ${sunflowerStyles.sizes} ${sunflowerStyles.margins} xl:-mr-32 transform -rotate-45`}
          />
        </MediaQuery>

        <h2 className={`${hashtagStyles.sizes} ${hashtagStyles.margins}`}>#2haveand2hoopes</h2>

        <img
          src={sunflower}
          alt="right sunflower graphic"
          className={`object-contain ${sunflowerStyles.sizes} ${sunflowerStyles.margins} xl:-ml-32  transform scale-x-flip rotate-45`}
        />
      </div>
    </div>
  );
}

export default App;
