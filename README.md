# Aura Code Challenge

This challenge will allow you to demonstrate your knowledge of React and Redux.
It is intended to replicate development stories that could come up on the job.
After you submit the completed project we will schedule a follow-up code review.

## Getting started

- This bundle includes a React application.
- Node.js v10.19.0 or greater is required.
- All the tooling you need to complete the exercises has already been added.
- In a terminal run `npm i`.
- In a browser visit `http://localhost:4000`. The home page contains links to the two exercises.
- Redux DevTools have been configured for you as a convenience if you choose to use them. Install the [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) if you haven't already.
- All of your work should live in `src/pages`, `src/services`, and `src/components`.
- You do not need to modify `src/_internal`.

## Part I: React Timer

### Acceptance Criteria

- Implement a timer that counts down from one minute.
- On page mount, the timer should display all zeroes along with an "expired" message.
- Clicking the "Reset" button sets the timer to one minute.
- Clicking the "Start" button starts the timer.
- Once the timer expires the "expired" message should be displayed.
- The timer format should be `m:ss` no matter the time.
- The `useState` hook has been added for you but other React hooks are also fair game.

## Part II: Redux Records

### Acceptance Criteria

- Replace the imported data file with data from Redux to populate the `Record` components.
- All Redux work should live in `src/services/records`. Some notes on the service:
  - The `async.js` file contains a `mockFetch` utility and an async action creator, `doGetRecords`, which is already set up to dispatch `mockFetch`.
  - The `redux.js` file contains an empty `records` reducer and a single selector, `getRecords`, for retrieving data from the `records` reducer.
  - `combineReducers` has been imported for you if you choose to use it, though it's not required.
- `doGetRecords` needs to persist the fetched data in the `records` reducer.
- The `records` reducer should store the data in an extensible manner. Imagine if this reducer had to store hundreds of records, not just ten.
- Depending on how you structure the `records` reducer more selectors may be needed.
- The entire lifecycle of the mock request should be handled in the `Redux` page component.

### Sample Record Object

```
{
  id: 123,
  artist: 'Some artist',
  album: {
    title: 'Some record,
    imageSrc: '/some/asset/path.jpg'
  }
}
```

## Suggestions

- Spend as much or as little time as you wish on this challenge.
- Many implementation details are up to you — be prepared to explain your decisions.
- Details matter but you should strive to deliver complete features.
- Consider how you can prove that both features work as intended.

## Submitting your work

- Commit changes as you normally would on a feature branch.
- Push to GitHub or another git service.
- Share the repository link with us.

## Package Scripts

| command              | description                     |
| :------------------- | :------------------------------ |
| `npm start`          | Start dev server on port `4000` |
| `npm run format:fix` | Format files with `prettier`    |
| `npm test`           | Execute tests with `jest`       |
