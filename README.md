# Ride Organizer
Built with my church New Life in mind; more specifically I built this to solve a problem my college ministry had with setting up rides for people. Automating the process of organizing rides allows for a lot more versatile uses. For example, a react redux implementation and automatic sms bot can update ride organization until the last minute for stragglers who forget to sign up. This is still a work in progress. 

Note to people looking at this repostory's commit history. I originally started this alone during a hackathon but accidently put a sensitive password in here and had trouble deleting it completely. Now nothing in here is sensitive information. Anything sensitive is 
put in the gitignore.

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

# Main Technologies
mongodb and react

# Needs to be Added
* Will deploy on surge with a beta once a more thorough implementation is made
* Algorithm/function to actually organize the rides is not finished
* Need to be actually editing database/adding another database for the final ride organizations
* Need to automate a drop of documents in the db at the end of each week to reset the rides
* Need a clean table format to actually display the results of the rides coordination