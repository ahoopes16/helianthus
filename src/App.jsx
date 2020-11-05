import './generated/tailwind.css'
import sunflower from './img/sunflower.png'

function App() {
  const appClass = `h-full w-full bg-cream
                    flex flex-col
                    text-center text-navy text-roboto text-4xl`

  return (
    <div className={appClass}>
      <h1 className="text-parisienne text-8xl my-8">Nikki & Alex's Wedding Website</h1>

      <div className="my-6">
        <p>Under Construction Until April 2021</p>
        <p>Come back then to RSVP and receive all wedding details!</p>
      </div>

      <div className='flex flex-row justify-around my-24'>
        <img
          src={sunflower}
          alt="sunflower graphic"
          className="object-contain h-3/4 ml-24 -mt-20 transform -rotate-45 "
        />

        <h2 className="text-6xl pt-24">#2haveand2hoopes</h2>

        <img
          src={sunflower}
          alt="sunflower graphic"
          className="object-contain h-3/4 mr-24 -mt-20 transform scale-x-flip rotate-45"
        />
      </div>

    </div>
  );
}

export default App;
