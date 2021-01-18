import './generated/tailwind.css'
import { ContentCard, ContentWrapper, Header, Navigation } from './components'

function App() {
  return (
    <div id='app' className='bg-steel text-gold'>
      <Header />

      <ContentWrapper>
        <Navigation />
        <ContentCard>
          <h1 className='text-center text-cabernet text-parisienne underline text-5xl'>About</h1>
          <p>Oh hi there this is the about page</p>
        </ContentCard>
      </ContentWrapper>
    </div>
  )
}

export default App
