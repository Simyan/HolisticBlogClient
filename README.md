# HolisticBlogClient

This is built using React. It allows the user to sign in and if a token is returned by the server upon authentication then the user will be taken to the home page other wise it redirects back to the login page. 

I have used axios to talk to my REST server hosted on heroku. This client makes use of React's Router capabilities to protect routes (Home route). The AuthenticateComponent wraps around the route that has to be protected. 