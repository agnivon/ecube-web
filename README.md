# Online Movie Ticket Booking Web Application using React and Redux 
### Background:
E-Cube is a web application,which allows user to book online tickets forlatest movies,concerts and other LIVE events happening in the city. With the increase in web traffic, E-Cube’s website load time increases significantly which in turn reduces the speed and performance of the website. It was earlier designed using traditional web development methodologies. Also, on adding or updating any feature, maintaining the website was difficult for the development team due to tight coupling of UI components. Hence, all these challenges led to unsatisfied user experience. As a result, we focused on maximizing the usability and enhancing the user experience, so we upgraded their website using React library. 

### Goal: 
The goal of this project is to build an online ticket booking application for latest movies, upcoming movies, concerts, and other LIVE events. 

### Web Application Requirement: 
JavaScript, HTML, CSS, React, Redux, and Axios to call API. 

### Web Application Implementation:
The Web Application should include following aspects: 

1. All Latest movies
2. Latest Movies Details
3. Ticket booking page
4. Final Ticket Page
5. All Upcoming movies
6. Events

![Mockup 1](/assets/mockup-1.png "Mockup 1")

#### 1. Latest Movies: 
This section should contain the list of all the new movies available in the theatre.

![Mockup 2](/assets/mockup-2.png "Mockup 2")

#### 2. Movies Detail Page: 
On clicking the movie, the application should navigate the user to its details page which should include below options.

![Mockup 3](/assets/mockup-3.png "Mockup 3")

#### 3. Ticket Booking Page: 
On clicking “Book Now” option, users should be navigated to ticket booking page which should include the below options.

![Mockup 4](/assets/mockup-4.png "Mockup 4")

#### 4. Final Booking Page: 
After selecting the tickets, a QR code should be generated with all the booking details, which can be scanned by user’s mobile phone.

![Mockup 5](/assets/mockup-5.png "Mockup 5")

#### 5. Nearby Event: 
This section should have the details of events like concerts, Drama-plays, Competitions and other activities happening in the city.

![Mockup 6](/assets/mockup-6.png "Mockup 6")

#### 6. You will be provided a Node.js API which will fetch the movies data (dynamic) stored in MongoDB database.
#### 7. You should be able to make a call to this API from your application code using Axios. 

#### APIs to be used:
- Events: http://3.17.216.66:4000/events
- Upcoming Movies: http://3.17.216.66:4000/upcomingMovies
- Details Page: http://3.17.216.66/latest/5ab12612f36d2879268f284a
- Latest Movies: http://3.17.216.66:4000/latest
