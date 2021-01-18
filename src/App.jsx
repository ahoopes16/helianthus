import './generated/tailwind.css'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ContentCard, ContentWrapper, Header, Navigation } from './components'
import { About, RSVP, FAQ, Travel, Lodging, PointsOfInterest, EngagementPhotos, Gifts } from './content'

function App() {
  return (
    <HashRouter>
      <div id='app' className='bg-steel text-gold'>
        <Header />

        <ContentWrapper>
          <Navigation />
          <ContentCard>
            <Switch>
              <Route exact path='/about' component={About} />
              <Route exact path='/rsvp' component={RSVP} />
              <Route exact path='/faq' component={FAQ} />
              <Route exact path='/travel' component={Travel} />
              <Route exact path='/lodging' component={Lodging} />
              <Route exact path='/points-of-interest' component={PointsOfInterest} />
              <Route exact path='/engagement-photos' component={EngagementPhotos} />
              <Route exact path='/gifts' component={Gifts} />
              <Redirect to='/about' />
            </Switch>
          </ContentCard>
        </ContentWrapper>
      </div>
    </HashRouter>
  )
}

export default App
