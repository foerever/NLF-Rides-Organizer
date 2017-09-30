# Ride Organizer
Built with my church New Life in mind; more specifically I built this to solve a problem my college ministry had with setting up rides for people. Automating the process of organizing rides allows for a lot more versatile uses. For example, a react redux implementation and automatic sms bot can update ride organization until the last minute for stragglers who forget to sign up. This is still a work in progress. Will probably work on more during thanksgiving break.

Note to people looking at this repostory's commit history. I originally started this alone during a hackathon but accidently put a sensitive password in here and had trouble deleting it completely. That's why there is no commit history to this project before the basic frontend/backend skeleton here. Luckily this project is still in its infancy so not much was deleted.

# Testing 
Go into server.js and put your mongodb url in there.

Install dependencies with:
```
yarn 
```

Run with server:
``` 
yarn node
```

# Technologies
mongodb and react

# Needs to be Fixed
* server side code has useless parts to it and needs to be cleaned
* use axios instead of jquery to get data

# Needs to be Added
* will deploy on surge with a beta once a more thorough implementation is made
* mongodb isn't ideal if I want to make this a weekly form since dumping the database every week can be costly
* host on heroku 
* redux implementation and algorithm to sort/parse the incoming data and display it under Rides 