# Voting app for best hackers !!!

Very light-weight single page voting application, where a normal user can log in and vote from a list of hackers.

**This is a demo application, built completely on `MERN` stack, with `react` and `redux` based front-end, `node.js` powered with `express` at the backend and `mongo atlas` as supporting database.**

# Live link

https://hacker-loader.herokuapp.com/

` userName: guestuser`

` password: guest1234`

Link to backend repository - https://github.com/saschak07/hacker-votes/tree/master#back-end-for-voters-app-for-hackers

![voting-home](https://github.com/saschak07/image-store/blob/main/Screenshot%202021-05-16%20at%2010.51.45%20AM.png)

![voting-list](https://github.com/saschak07/image-store/blob/main/Screenshot%202021-05-16%20at%2010.53.10%20AM.png)

After logging in, a general voter can prform the following activities 

* Browse through the list of all voters (can sort the list based on Number
of votes, number of challenges solved or expertise level of each listed hackers)

* Observe the latest voting trends represented in the form of a `donut chart`, that gets refreshed with every new votes.

* User can also click on the `see details` button which pops up the complete details of 
the selected hacker with an option to vote

* user can vote for any hacker, but the voting can be performed only once with a logged in credential.

Apart from the general user functionality, there is also admin level provisioning.

with the admin rights, details of new hackers can be added to the existing list of hackers.



This react application uses persistant redux to store logged-in user's details,(jwt auth token). in order to authenticate subsequent service calls.


