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
[Sequence diagram](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Cider-Falls.drawio&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%22gKgwLasOXJPgAyowXId3%22%3E7VxRl5o4FP4t%2B%2BDj7IGAqI%2BjzrSzpz1ndmx3dvvSEyEiM0g8ITpjf30BgxJCEYUA0u3DVC7JFfN9X%2B69SbSnTVbvHwhcLz9jC7k9oFjvPW3aA0DtK2rwX2jZ7S1DYOwNNnEs1uhomDk%2FEDMqzLpxLORzDSnGLnXWvNHEnodMytkgIfiNb7bALv%2Bua2gjwTAzoStanx2LLpkVKMrxxkfk2Mv4rUeA3VnBuDUz%2BEto4beESbvraROCMd2%2FWr1PkBuOXjww%2B373v7h7eDKCPFqkA%2Fi%2B%2BeZvoPowtYf%2FPKmzp6exfaPtvSBLGIajW2by8YaYrNXD3fO9%2FXX4%2BB96He7Q53vl2zO%2BidvRXTx6odsZu8SELrGNPejeHa1jgjeehcInVIKrY5tPGK8DoxoYXxClO8YMuKE4MC3pymV3DwMZUBDhFaJkFzwDQS6kzpb%2FTJBxwT60Y11vCYG7RIM1djzqJzw%2FhoagAaP1kCEac7qvJgc%2BeLF3WKizCnSFfzwKiY0o68W5TXzEoylCORvxPJSyAD4Cx8PytnQomq1hhP5bIHQegoXjuhPsYhL11RSlr6BFaMceTdgX0b%2FA7lOCXxHXQ52OJwxMoGyhu2HPsYKO9%2BeLz%2ByIUPSeeGQR92VCigYb1zdOt3sb8wJ4LNJIJInCwZAz5pkq61eoMnCtKhOUoGsNSwFckxSCh4S%2BRC1og5rEoFcoBq0zYhiAhsWgXZMY7A3yqUw1GEZNagAVqsG4VjWcm4CpisrDE%2Bfj9xd2OJGzCd1rV6dxTeq0IIVz6COJ%2Bhz1a9Ln8Ax9JnTnWbdh9RlcmS70fcfkB59HyoL%2BMrpQs0ZTSrgRBaGlRnA%2F2wiEPhm4BEfVKSMToFEvuQAA5zEEiohTHsCpSfMTnCM3BAr5zg%2FmVE1NfNoYuo7thRgHb4ECWYxDojsmdG%2FZjZVjWdE0u8LbhBeCKaSJawu5KHmNLCd56WLz9UAW%2FoNmMuYjIiha%2Fwj%2F0iWK1lHCgNkDhkvD93O2wUubRp33pjlJWwI0uHYFhVySmHGtFPfAi4WPyhJH%2F8v%2FYv39ojx%2B3d7Ox%2FPJDcVfzoq8lyq7oJiTk188sWWOY2JG7OfMeAWVqlwo%2BV9GUwmaz4SuUK4aEJXy2GRFRD6sedhDqdjITMWlfoIBH0JMgbJKa%2FOPi0KldjpUDtO5y6CCWJkJyznLHJIVVfHSxGHVrrxU0p4kS8UoHh7zMC0QHpUS4bGASvbrH9WHoVKMH9XA%2BDZkhxq4kP9pIQmOJNM%2F%2FhwX83%2FUDP8zUrhIABkZnFtXwlZKKara2eCgVRYcBE%2By1QFKqkPNQKyZ8OAjsnVM1LoIoZ6zw3pdvNcr473gSTbv9bK8z954aID3bCW8bayvoxRoQ2LUryoxEhzJlkDZwkBtqDI4Z3HrSlKj36WK0KsSi%2BBIslhA2SpCbU0ZYcBVuOzlzf111OGQOF2tfMA5lUViCzXbGcgEqoN7qCC1gzYy8rdQT7Q%2FsYOa7i1zAzUX2OvYQT1UM%2FJ2UNVR9Tuo2SPfnQoozWKjsh0UwZNsOZStgEBrKqC2Vv6gO9shad4PKuO94Ek278uWPaDzGyIp5GrYiP9dztgY6RhbVDZC3Kk7eTrjkE0uxM3XP3n1TnNnYUoFmrg47rx%2BBlXpR3Ak%2B7wK%2Fy218%2FUTQ9wC%2FcRhpzPqMTqTpqW%2Fl1aVXARHsuUyKCuX7JPwtSZpi41nUgd7xQv4mvheR7bVCN9H%2FdFlfE8vLwuOZPO9bHqlNZReXQPf9Tqyo0b4rirGhRO88GUzwZNkxutlEyK9oYToKhhfx4JrA%2FWAwFr10mWotJAER7LpX3b1VW9o9ZWrBxz%2FUBTEUuhQXaB39AiL8K17pSoVCY5kq6jsWq7ehiMsHVfRoJsqEkrkS89Cpmv2mk9C6sOyGhr8r6HqNLR4mPq309nAnD8QCzwggv%2F9Hv9iTwcKmHTsGVa2jyh4qk43mZiA4rLJw7Qdu4iz5nfQMwepo3WMSN5LF2oFPclbqM0E6IwyJg%2FgluxqzNp7EjK4PP5Q4B694%2B8tanc%2FAQ%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E#%7B%22pageId%22%3A%22gKgwLasOXJPgAyowXId3%22%7D)
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
#### What should each function return?
- Main:
    - generateInnerHTML() - generates innerHTML of the main container
- Areas:
    - generateAreaHTML() - generate an area HTML that lists all areas and the services included
    - clickEvent() - after clicking on area title, a window alert will display the current number of guests
- Guests:
    - generateGuests() - generate HTML string of guests
- Services:
    - generateServicesHTML() - generate HTML string of all park services offered
    - clickEvent() - after clicking on a service, a window alert will display which area offers that service
- Database:
    - structuredClone() for every database array
        - getAreas() - returns a clone of the `areas` array
        - getGuests() - returns a clone of the `guests` array 
        - getServices() - returns a clone of the `services` array
        - getAreaServices() - returns a clone of the `areaServices` array

### What is the specific algorithm for each function? Does the function need parameters? Should it return something?