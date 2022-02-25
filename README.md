## Gamers Generation

#### The Team:

[Dickson Yu](https://github.com/dicyu)

[Joshua Bang](https://github.com/bybang)

[Cassie/Ren Chen](https://github.com/ShurenKai)

## Introduction to the app

Welcome to Gamers Generation homepage beta 1! As you can see, we have some instructions to help users get started :D

If you look to the top right corner, you can see that you have options to login or register (if you tap the sign up button under the description of the app, it'll also take you to the registration page)

[Image of homepage](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/homepage.png?raw=true)

[login](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/loginpage.png?raw=true)

[register](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/registration.png?raw=true)

For now, we'll register as a user with the gamer tag of CriminalActofCanada but also login to a pre-created account to show you more of our features between two users. Shown below is our secondary user's landing page. Since we've already added a new user, we should be able to match with them!

[Landing page](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/langingpage.png?raw=true)

If you click on your avatar, you can edit your profile if you'd like!

[Edit page](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/editprofile.png?raw=true)

When you click match, you'll see cards that you can swipe or click buttons for to select what users you like or not. Swipe right for yes, and left for no. As you can see, WolfShaper has a space for their profile picture and their description on the card to tell you a little about themselves

[Initial card](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/matchCard.png?raw=true)

We can also see the card for our new user here!

[Criminal act of Canada as a user](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/cardfornewuser.png?raw=true)


Now we can begin chatting between the two users, with our newly created user sending the first message!

[Message logged in user](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/chat1.png?raw=true)
[Reply from logged in user](https://github.com/dicyu/Gamers-Generation---LHL-Finals/blob/main/gamers-generation/public/chat2.png?raw=true)

We hope you enjoy our application! More information about it below

## Functional Requirements

- [x] Development focused on single page application (SPA)
- [x] Data saved in API server using PostgreSQL database
- [x] Client application communicates with API server over HTTP using res.json
- [x] Tests using Storybook for components
- [x] Routing through Express JS
- [x] Front End views rendered by React

## Behavioural Requirements

- [x] Register
- [x] Login
- [x] Match with other users
- [x] Edit user profile
- [x] Chat with matched player

### Dependencies

#### Backend

- [x] "cors": "^2.8.5",
- [x] "dotenv": "^16.0.0",
- [x] "express": "~4.16.1",
- [x] "express-validator": "^6.14.0",
- [x] "jsonwebtoken": "^8.5.1",
- [x] "morgan": "~1.9.1",
- [x] "pg": "^8.7.3"

#### Frontend 

- [x]"@emotion/react": "^11.7.1",
- [x]"@emotion/styled": "^11.6.0",
- [x]"@mui/icons-material": "^5.4.1",
- [x]"@mui/material": "^5.4.1",
- [x]"axios": "^0.25.0",
- [x]"classnames": "^2.3.1",
- [x]"nodemailer": "^6.7.2",
- [x]"react": "^17.0.2",
- [x]"react-dom": "^17.0.2",
- [x]"react-scripts": "5.0.0",
- [x]"react-tinder-card": "^1.4.5",
- [x]"sass": "^1.49.7",
- [x]"socket.io-client": "^4.4.1",
- [x]"web-vitals": "^2.1.4"

#### Socket

- [x] "cors": "^2.8.5",
- [x] "dotenv": "^16.0.0",
- [x] "express": "~4.16.1",
- [x] "express-validator": "^6.14.0",
- [x] "jsonwebtoken": "^8.5.1",
- [x] "morgan": "~1.9.1",
- [x] "pg": "^8.7.3"

#### Dev-dependencies used

- [x] "bcrypt": "^5.0.1",
- [x] "debug": "~2.6.9",
- [x] "nodemon": "^2.0.15",
- [x] "socket.io": "^4.4.1"
- [x] "@storybook/addon-actions": "^6.4.19",
- [x] "@storybook/addon-essentials": "^6.4.19",
- [x] "@storybook/addon-interactions": "^6.4.19",
- [x] "@storybook/addon-links": "^6.4.19",
- [x] "@storybook/builder-webpack5": "^6.4.19",
- [x] "@storybook/manager-webpack5": "^6.4.19",
- [x] "@storybook/node-logger": "^6.4.19",
- [x] "@storybook/preset-create-react-app": "^4.0.1",
- [x] "@storybook/react": "^6.4.19",
- [x] "@storybook/testing-library": "0.0.9",
- [x] "@testing-library/jest-dom": "^5.16.2",
- [x] "@testing-library/react": "^12.1.2",
- [x] "@testing-library/user-event": "^13.5.0",
- [x] "query-string": "^7.1.1",
- [x] "react-client-session": "0.0.7",
- [x] "react-emoji": "^0.5.0",
- [x] "react-hook-form": "^7.27.0",
- [x] "react-router": "^6.2.1",
- [x] "react-router-dom": "^6.2.1",
- [x] "react-scroll-to-bottom": "^4.2.0",
- [x] "webpack": "^5.68.0"

### Stretch Features to Implement later
- [] Choose gaming preferences
- [] Friends/Block list
- [] Report a user
- [] Admin account for moderation
- [] Game search bar
- [] Implement Typescript
- [] Implement Redux
- [] Change background colours
- [] Set character limits for certain input fields
- [] More dynamic match history
- [] Additional scss
- [] Profile page




