import './generated/tailwind.css'
import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'
import { useState } from 'react'
import { ContentCard, ContentWrapper, Header, Navigation } from './components'
import { pages } from './constants'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

Amplify.configure(awsConfig)

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const toggleNavbar = () => setShowNavbar(!showNavbar)

  return (
    <HashRouter>
      <div className='bg-steel text-gold flex flex-col'>
        <Header showNavbar={showNavbar} toggleNavbar={toggleNavbar} />

        <ContentWrapper>
          <Navigation showNavbar={showNavbar} toggleNavbar={toggleNavbar} />
          <ContentCard>
            <Switch>
              {pages.map(page => <Route exact key={`route-${page.path.replace('/', '')}`} path={page.path} component={page.component} />)}
              <Redirect to='/about' />
            </Switch>
          </ContentCard>
        </ContentWrapper>
      </div>
    </HashRouter>
  )
}

export default App
