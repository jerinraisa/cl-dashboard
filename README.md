# Crowdlinker Dashboard 
This dashboard is an application to be used by interns at Crowdlinker to track progress throughout 

## Database

### MongoDB 
* **Tasks**: Items that make up any list 
* **Evaluations**: Used to store results of the self evaluation

## Tech 
CL Dashboard uses the following technologies. 
### Frontend
* React.js (v16.9.0) 
* React Router (v5.1.2)
* Styled Components (v3.3.0)

### Backend
* Node.js 
* Express.js (v4.17.1)
* MongoDB (v0.1.0)
* Mongoose (v5.7.12)
* Axios (v0.19.0)
* Cors (v2.8.5)


## Setup: 
### Server
1. Clone the repo - `git clone https://github.com/lynn-kim/cl-dashboard.git`
2. Run `npm install` to install dependencies 
3. Run `docker network create cl-dashboard`
4. Run `docker compose build` 
5.  Use docker to set up the backend environment: run `docker-compose up` to run it in the background.
6. You should be able to see the app on [http://localhost:5000](http://localhost:5000)

### Client 
Run the front end with `npm start`. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

## Important Points to Note
* React app was made with Create React App 

## Contributors 

* [Lynn Kim](https://github.com/lynn-kim)
* [Jerin Raisa](https://github.com/jxrin) 