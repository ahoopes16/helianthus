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

// URLs
export const CHICAGO_TO_TUCSON_LINK = 'https://www.google.com/maps/dir/Chicago,+IL/6801+N.+Camino+Verde,+Tucson,+AZ+85743/@36.8586193,-103.8580443,6z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x880e2c3cd0f4cbed:0xafe0a6ad09c0c000!2m2!1d-87.6297982!2d41.8781136!1m5!1m1!1s0x86d5e0084a2620df:0x10d7e8ecaf363f89!2m2!1d-111.1083086!2d32.3305269'
export const STL_TO_TUCSON_LINK = 'https://www.google.com/maps/dir/St.+Louis,+MO/6801+N.+Camino+Verde,+Tucson,+AZ+85743/@35.4376149,-105.1414636,6z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x87d8b4a9faed8ef9:0xbe39eaca22bbe05b!2m2!1d-90.1994042!2d38.6270025!1m5!1m1!1s0x86d5e0084a2620df:0x10d7e8ecaf363f89!2m2!1d-111.1083086!2d32.3305269'
export const PHOENIX_SKY_HARBOR_LINK = 'https://www.skyharbor.com/'
export const TUCSON_INTERNATIONAL_LINK = 'https://www.flytucson.com/'
export const SKYSCANNER_LINK = 'https://www.skyscanner.com/'
