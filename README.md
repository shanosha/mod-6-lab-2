# Instructions

To run this project file:

- clone the repository
- open the index.js JavaScript file
- run it using "node index.js"

## Refelctions

Why is it important to handle errors for each individual API call rather than just at the end of the promise chain?

- You can thorw custom error classes that way.

How does using custom error classes improve debugging and error identification?

- It's easier for you to identify the error reason.

When might a retry mechanism be more effective than an immediate failure response?

- If there was a timeout issue where the API call was waiting for a response for too long.
