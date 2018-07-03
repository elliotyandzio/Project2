# Stadia - Project Two

## Stadia Instructions
<ol>
	<li>Firstly, in order to use the application you must register for an account, or if you have done already you need to login using your details.</li>
	<br />
	<li>Once the user has logged in they will be redirect to the main page of the application. This page displays all of the stadiums that have been entered into the database.</li><br />
	<li>The user can click on the green magnifying glass icon to view each stadium in more detail</li><br />
	<li>Once the user has selected a stadium, they will be able to see the details and will be able to leave their own comment(review).</li><br />
	<li>After the user has submitted a comment, the comment should appear on the page along with their username. Also a red 'x' should appear at the top right of the comment. This allows the user to delete their comment, this functionality is only available on the comments written by the logged in user.</li><br />
	<li>The user can add a new stadium by selecting the 'Add Stadium' tab from the navbar. The user will then be redirected to a form. Once the user has filled in the details for the stadium and submitted the form, they will be redirect to the page which shows all the stadiums</li><br />
	<li>From this page the user can click the tab 'My Stadiums' and the page will change to show only the stadiums uploaded by that user. The difference between the 'All Stadiums' tab and the 'My Stadiums' tab is that the user has editing options on the the stadiums they have uploaded.</li><br />
	<li>If the user selects the orange tick button on a stadium within the 'My Stadiums' tab they will be taken to a form to edit the stadium. If the user selects the red 'x' button they will be able to delete that stadium from the database.</li><br />
	</ol>

## Technology Used
<ul>
	<li>EJS</li>
	<li>ExpressJS</li>
	<li>MongoDB</li>
	<li>Node.js</li>
	<li>Materialize</li>
</ul>

## Approach Taken
<ol>
	<li>The first step was to plan what functionality the application needed to do and plan my week in order to get the site finished in the set time frame.</li>
	<br />
	<li>I decided that as the application has CRUD functionality I needed to created the server side of the site first. This involved creating the code for the user to be able to login, register and add, edit and delete a stadium. I tested the server side code at each stage in Insomnia before moving on to the next function.</li>
	<br />
	<li>Next I had to implement the client side of the website so that the user is able to do the same functions but using the application.</li>
	<br />
	<li>Now that the functionality for the minimum viable product had been created and working successfully, I decided to add the features for users to comment on stadiums and to delete the comments that they add. This followed a similiar process, creating the server side code and testing it in Insomnia first before connect the client side afterwards.</li><br />
	<li>Lastly, I had to style the application so that the user could interact and view the site in the best possible way. To do this I used Materialize.</li>
	</ol>
	
## Wins
<ul>
	<li>The main win for this project was implementing the comments functionality into the application. This took the knowledge that we had learned in the class to the next level and provided a nice feature for the application</li><br />
	<li>This project was the first project I have created using ExpressJS, and being able to create a fully CRUD application at my first attempt was a good achievement</li><br />
	<li>This was also the first time I have used Materialize and I believe it give the application a professional theme.</li>
</ul>

## Blockers
<ul>
	<li>The main blocker that I encountered on this project was implementing the comments section. Whilst it was eventually the biggest win of the project, it was a complicated process to get the functionality working.</li><br />
</ul>