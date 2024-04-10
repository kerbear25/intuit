<!-- TODO: Display new comment at the top of the existing comments when posted -->
<!-- TODO: Unit tests -->

# Getting Started

Welcome! To get started, run:

```
cd client/
npm i
npm start
cd ..
npm i
npm run dev
```

## Assumptions

- In the wireframe, the two example comments show "Thursday at 4pm" and "April 1st at 2pm". I was unclear whether these dates and times were rounded or exact. For the purpose of this exercise, I chose to display the exact date and time. However, with more conversation, I could have implemented a different date and time rendering.

## Questions

- Since the GET endpoint was provided for a single comment, I'm wondering what the use of this could be.

## Future Functionality/Refactoring

- Handle showing errors on GET request for /getComments
- Storing HEX values in variables and re-using them instead of repeating them
- Validate name field (i.e. do not allow duplicate names). This might work best with a login feature.
- If a user is logged in and they see their own comment(s), they could delete the comment(s). Then, a confirmation could appear to confirm or cancel the action. Finally, a toast notification could appear to notify whether the comment was deleted and the action was successful.
