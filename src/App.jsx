import './generated/tailwind.css'
import Amplify from 'aws-amplify'
import awsConfig from './aws-exports'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import swal from 'sweetalert2'
import { ContentCard, ContentWrapper, Header, Navigation } from './components'
import { pages, TABLET_WIDTH } from './constants'

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
    swal.fire({
      title: 'Hey there!',
      html: `<p>I see that you are on a tablet or mobile device!</p><br /><p>The site is not optimized for this yet. You'll have a better experience on a laptop or desktop computer. :)</p>`,
      icon: 'info',
      confirmButtonText: 'Got it!'
    })
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
