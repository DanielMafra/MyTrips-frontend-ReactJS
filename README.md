# My Trips | Front-end | ReactJS

A web app made with ReactJS to make reservations at travel destinations and list trips (using a fake API with json-server).

![Home Destinations](https://i.imgur.com/52ksrzG.png)
![My Trips](https://i.imgur.com/fFRvQx0.png)

## How to configure the project:

> If you use npm, just replace the **yarn** > **npm**.

* Clone the repository to your computer, navigate to the folder and use the command **yarn install** to install the dependencies.
* Using the terminal, navigate to the project folder and use the **yarn start** command.
* Done! The project will be running on **localhost:3000**
* To run the fake API, first access the file at **src > services > api.js** and follow the commented instructions to configure the host and port.
* After doing the previous step, open the **server.json** file that is at the root of the project. In it you must include the information of your fake API.

> Where **stock** is the amount of reservations available for each id and **trips** are the destinations (in the file contains more detailed explanation).

* After doing the previous step, navigate to the project folder and use the **yarn json-server server.json -p YOUR_PORT** (where **YOUR_PORT** is the port you configured in **api.js**, example: **yarn json-server server.json -p 3333**).
* Done! your fake API is already running and communicating with your front-end!

> This project uses:

* React (ReactJS), Redux, Immer, Axios, React Router DOM, History, JSON Server, React Icons.

### Doubts? Send me a message on my social networks. Good luck! ;)
