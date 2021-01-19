import { About, RSVP, FAQ, Travel, Lodging, PointsOfInterest, EngagementPhotos, Gifts } from './content'

export const pages = [
    { path: '/about', title: 'About', component: About },
    { path: '/rsvp', title: 'RSVP', component: RSVP },
    { path: '/faq', title: 'FAQ', component: FAQ },
    { path: '/travel', title: 'Travel', component: Travel },
    { path: '/lodging', title: 'Lodging', component: Lodging },
    { path: '/points-of-interest', title: 'Points of Interest', component: PointsOfInterest },
    { path: '/engagement-photos', title: 'Engagement Photos', component: EngagementPhotos },
    { path: '/gifts', title: 'Gifts', component: Gifts },
]

export const BLANK_TARGET = '_blank'
export const NEW_TAB = 'noopener noreferrer'
