import './generated/tailwind.css'
import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'
import { ContentCard, ContentWrapper, Header, Navigation } from './components'
import { pages, TABLET_WIDTH } from './constants'
import { generateInfoModal } from './helpers'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

Amplify.configure(awsConfig)

function getViewportWidth() {
  // Modern browsers
  if (window.innerWidth) {
    return window.innerWidth
  }

  // IE6
  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth
  }

  // Older versions of IE
  return document.getElementsByTagName('body')[0].clientWidth
}

function App() {
  if (getViewportWidth() <= TABLET_WIDTH) {
    const html = `
    <p>I see that you are on a tablet or mobile device!</p>
    <br />
    <p>The site is not optimized for this yet. You'll have a better experience on a laptop or desktop computer. :)</p>
    `
    generateInfoModal('', html)
  }

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
