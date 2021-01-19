import './generated/tailwind.css'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { ContentCard, ContentWrapper, Header, Navigation } from './components'
import { pages } from './constants'

function App() {
  return (
    <HashRouter>
      <div id='app' className='bg-steel text-gold'>
        <Header />

        <ContentWrapper>
          <Navigation />
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
