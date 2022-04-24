
# E-commerce platform

Fully functional react/redux shop with various functions such as user identification, items loaded from the firebase database, integration with stripe to handle payments.


## Preview

[![screenshot-ecommerc-eplatform-herokuapp-com-2022-04-19-16-49-49-287.png](https://i.postimg.cc/HLyv6pwL/screenshot-ecommerc-eplatform-herokuapp-com-2022-04-19-16-49-49-287.png)](https://postimg.cc/VSzF6PHy)


## Live site

https://ecommerc-eplatform.herokuapp.com


## Features

- User Authentication
- Collections Loaded from Firebase Databse
- Stripe Payments
- Mobile Responsivnes
- 3D Slider


## Lessons Learned

It was by far my largest project where I learned a lot about new technologies and patterns.I did experiments with state management via redux, sagas, thunk, context API.I got to connect my app with firebase/stripe I even created a small express server to process payments.I tried to follow the key principles of React primarily by splitting the code into small pieces, and creating reusable components I also wrote my first tests!
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`STRIPE_SECRET_KEY`




## Installation

Remember to replace the config variable in your firebase.utils.js with your own config object from the firebase dashboard! Navigate to the project settings gear icon > project settings and scroll down to the config code. Copy the object in the code and replace the variable in your cloned code.
## Roadmap

- Typescript integrations

- More unit tests


## Authors

- [@Bandzyrka](https://www.github.com/bandzyrka)

