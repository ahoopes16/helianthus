/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGuest = /* GraphQL */ `
  query GetGuest($id: ID!) {
    getGuest(id: $id) {
      id
      firstName
      lastName
      group
      plusOneAllowed
      overTwentyOne
      rsvp
      rsvpDate
      attendingRehearsalDinner
      plusOneDinner
      plusOneName
      dinnerOption
      createdAt
      updatedAt
    }
  }
`;
export const listGuests = /* GraphQL */ `
  query ListGuests(
    $filter: ModelGuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        group
        plusOneAllowed
        overTwentyOne
        rsvp
        rsvpDate
        attendingRehearsalDinner
        plusOneDinner
        plusOneName
        dinnerOption
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchGuests = /* GraphQL */ `
  query SearchGuests(
    $filter: SearchableGuestFilterInput
    $sort: SearchableGuestSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchGuests(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        firstName
        lastName
        group
        plusOneAllowed
        overTwentyOne
        rsvp
        rsvpDate
        attendingRehearsalDinner
        plusOneDinner
        plusOneName
        dinnerOption
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
