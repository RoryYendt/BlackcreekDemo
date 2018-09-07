Information for the Blackcreek Techinical Challenge
Author: Rory Yendt

Project Requirements
    - NodeJS
    - Postgres

Library Imports
    - body-parser(Used to pull data from the request sent from the client that are stored in the body)
    - express(Server framework for NodeJS)
    - pg(Used to connect to the postgres database)
    - socket.io(Used for passive workflow to allow for a constant stream for distance checking)

Application Startup
    - run npm install
    - run database script for postgres
    - alter config file to match postgres information

There are two api routes developed
    -/location(Post method to save location)
        - Body{
            latitude(Required): numeric,
            longitude(Required): numeric,
            name(Optional): string,
            address(Optional): string
        } 
    -/location/compare(Post method to compare saved location and new location and sends reminder when beyond threshold)
        - Body{
            latitude(Required): numeric,
            longitude(Required): numeric,
            id(Required): uuid
        }


Next Steps

Question: This is a simple app so it’s not expected to support
hundreds of thousands of concurrent users…but if it did, what
kind of changes would you need to make?

Answer: In order to support more users this application would be
deployed and hosted using something like AWS, that allows for the
scaling up of resources and web traffic. Since the application is
using NodeJS, it can be cloned and the workload divided among all the
cloned instances. Since this application is storing personal information
security is also a concern so wrapping the deployement instance in NGINX
would be a start and using an HTTPS connection to provide secure transport
of messages. Application security would require authentication(password protection)
at the very least.