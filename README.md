#keelaLogin
Register and Login app with React and Meteor
DEPLOYED ON:
https://keelalogin274.herokuapp.com/

<h2> General Flow</h2>

<h5>The Navigation Bar Routes the User between login 
and register pages when logged off, and personal/team 
views when logged in.</h5>

<h5>Logged Out:</h5>

![Image of Logged Out](https://user-images.githubusercontent.com/22875217/59573258-f56aec80-9066-11e9-831d-46c3d770446c.PNG)

<h5>Logged In:</h5>

![Image of Logged In](https://user-images.githubusercontent.com/22875217/59573301-29461200-9067-11e9-80c5-e5e010a36762.PNG)

<h5>Registration can be done via form or Google Oath</h5>

![Image of registration](https://user-images.githubusercontent.com/22875217/59573447-dd479d00-9067-11e9-8252-95c33aa0d972.PNG)

<h5>Google OAuth</h5>

![Image of google Oauth](https://user-images.githubusercontent.com/22875217/59573540-547d3100-9068-11e9-8531-f195a98cd7ff.PNG)

<h5>View and Creating Teams</h5>

![Image of Teams](https://user-images.githubusercontent.com/22875217/59573618-b76ec800-9068-11e9-85aa-c6051f00f7b5.PNG)

<h2> Data structure</h2>
<h5>The Data structure is very simple structure using meteors accounts-ui 
as the base for users and teams which is an aggregation </h5>

![Image a data](https://user-images.githubusercontent.com/22875217/59574861-b9875580-906d-11e9-95d2-4bfe178bab96.PNG)

<h2> What was challenging, what you struggled with</h2>

<h5>The main configurations proved to be harder than expected the migration of OneUi css with Materialize caused many 
conflicts. 

Another conflict that proved surprising was using materialize via Meteor to make a simple Modal. It ended 
to be the most confusing to end up having to implement it via react npm instead which caused other css conflicts.
</h5>

<h2> What would I continue to work on</h2>

<h5>I would create a stronger authentication system. As for presentation purposes it allows any non-secure password. And it does not auto log gout </h5>

<h5>Testing is also very important, so I would implement some unit tests via JEST.</h5>

<h5>I would also improve the code structure to utilize more of React Component Design Pattern, 
many of the components were reused and can be refactored.
</h5>