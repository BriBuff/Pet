# Pet

Description:

This app has been created to find the perfect breed for you! Take the quiz and find out your compatible furever friend. 

Want to take the quiz with different answers? No problem! You can keep taking the quiz to see if you get a different answer. At any point, you can see the breed's information at the "See All Breeds" page.

Don't see a breed you're interested in? Go to the "Add A Breed" page and input the breed's information. All of our built in breeds come from the PetFinder website. Search for your breed's information to input into the database here: https://www.petfinder.com/dog-breeds/ 
Once you add the breed, you will be able to see it on the "See All Breeds" page and it will be part of the possible quiz results.

Want to search for dogs in your area? Go to the "Find A Dog" page and search by zip code to find the top ten dogs in your area.

App Link: https://stormy-harbor-93476.herokuapp.com/breeds.html

Video Test Run:

Stretch Goals:

Link the site to the PetFinder API so users can look up dogs in their area matching their breed (as opposed to dogs in their area).

Logging their results to a table so they can easily compare their results if they want to take the quiz multiple times.

Users are able to create accounts to save their quiz results and information.

Challenges:

Front-End:
    *Trying to get the Foundations modal to populate. We couldn't seem to find the correct JS to make it pop up and/or it wouldn't hide the modal information inside the modal.
    * Had trouble with validation on quiz (again issues witht the Foundation JS)

Back-End: 
    Trying to get the Petfinder API to generate- this is where utilizing JSONP became essential in addition to making sure that the API URL was https:// and not http://. If it was the latter, there was a mixed media error on Heroku- even though it was working locally with http://.

    Getting the New Breed form to be required. The required HTML on the input/label fields weren't being read. There were a couple different ways to try to fix this. First, we tried to use a combined validation using HTML, CSS, and JS, but in the end stuck with a basic JQuery function to make the fields required.

    "Cleaning" the code:
    1. Trying to get the JS/Jquery to be stored in a separate file and still interact with the HTML page. Everytime the JS/Jquery was moved, it would error out.
    2. Trying to get rid of Handlebars, which was only used in our project for errors. Deleting Handlebars code stopped the entire application from running.

    Deployment/Merging:
    1. Merging using Travis CI on GitHub- took awhile for us to figure out how to correct the code to make it so that Travis CI was happy with it. Mostly just spacing errors.
    2. Heroku Deployment- Even with JAWSDB connecting our project, JAWSDB wasn't connecting to our table, but instead was connecting to our values from within the table. Had to call the information differently in the SQL database to get our information to pop up.

Responsibilities:

This group project had us separated as database/paths (Bri), modal/controller (Jess), and view (Andrea). However, we all worked on pieces of each other's work.

Particulars:

Front-End Framework: Zurb Foundation

Built In Breeds: Akita, Beagle, Chihuaha, Dachsund, Doberman Pinscher, English Bulldog, German Shephard, Labrador Retriever, Rhodesian Ridgeback

Demo Breed: Great Dane

Code Used: HTML, CSS, JavaScript, JQuery, mySQL, Node.js

API: Petfinder (utilizing JSONP)

Packages Used: Express, mysql, sequelize, ESLint