# Planning

### What are the main resources (i.e. tables)? Design your ERD first.
- Areas
- Guests
- Services

### What are the properties of each resource?
- id, name, foreign keys

### What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
- ERD: https://dbdiagram.io/d/Cider-Falls-69a9d47fa3f0aa31e1f85f0d

### Which modules should you create?
- main.js
- areas.js
- guests.js
- services.js
- database.js

### What is the responsibility of each module?
[Sequence diagram](https://tinyurl.com/5bzhr6vw)
- Main: connects to each module, puts the HTML together, inserts HTML into the index.html
- Areas:
    - Contains the attractions on the map
    - Contains the maps's 6 sections
    - Includes Services offered
- Guests: generates a guest list
- Services: provides HTML list of the services offered
- Database: stores all the data we need, includes cloned data

### What functions should be in which modules?
##### What is the responsibility of each function?
##### What should each function return?
- Main:
    - generateInnerHTML() - generates innerHTML of the main container
- Areas:
    - findServiceMatch(area, areaServiceArray, serviceArray) - produce an array of services specific to a given area
    - generateAreaHTML() - generate an area HTML that lists all areas and the services included
    - clickEvent() - after clicking on area title, a window alert will display the current number of guests
- Guests:
    - generateGuests() - generate HTML string of guests
- Services:
    - findAreaMatch(service, areaServiceArray, serviceArray) - produce an array of areas specific to a given service 
    - generateServicesHTML() - generate HTML string of all park services offered
    - clickEvent() - after clicking on a service, a window alert will display which area offers that service
- Database:
    - structuredClone() for every database array
        - getAreas() - returns a clone of the `areas` array
        - getGuests() - returns a clone of the `guests` array 
        - getServices() - returns a clone of the `services` array
        - getAreaServices() - returns a clone of the `areaServices` array

### What is the specific algorithm for each function? Does the function need parameters? Should it return something?
No HTML functions take parameters
Click Events - the parameter is the specific target