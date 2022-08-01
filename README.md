# Healthy-Helper-v2

## Purpose
The purpose of this project was to enhance our group project #1, by incorporating new features that allow refinements such as allergy specifications, diet preferences and ability to save user information and receipes.

We utilized our goals that we initially set 4 months ago as our inspiration to improve work we had already created. This allowed for reflection on growth and skill level obtained over these previous 4 months, as well as provided an opportunity to dive deeper into a creative realm of developing a useful application. 

### Challenges: 
- Schedules (different time zones, life, work)

### Successes: 
- Effective Communication 


## Objectives
```md
GIVEN I am allergic to certain foods
WHEN I input my preferred categories
THEN I will find recipes that contain the listed specifications. 

GIVEN that I want to save my user information 
WHEN I want to reference previously searched/saved receipes
THEN I am able to create a new user with saved data being encrypted

GIVEN that I want to plan my weekly calendar
THEN I am able to save receipes for different days of the week.
```

### **Acceptance Criteria**

GIVEN I enter an ingredient
- [x] WHEN I open the recipe information
<br>THEN I am presented with a list of recipes that contain the ingredient searches for

- [x] WHEN I click on a recipe
<br>THEN I am presented with a MODAL that includes total required ingredients and cooking instructions

- [x] WHEN I click on the food
<br>THEN I can see the nutritional information

- [x] WHEN I click the search button
<br>THEN the text for that ingredient is saved in local storage

- [x] WHEN I refresh the page
<br>THEN the saved events persist


### **Additional Criteria**

**Grading Requirements**

- If a project submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:

- [x] A repository that has no code

- [x] A repository that includes a unique name but nothing else

- [x] A repository that includes only a README file but nothing else

- [x] A repository that only includes starter code

***This project is graded based on the following criteria:***

**Technical Acceptance Criteria: 25%**

- Satisfies the following code requirements:

- [x] Application uses React for the front end.

- [x] Application has a GraphQL API with a Node.js and Express.js server, and uses queries and mutations for retrieving, adding, updating, and deleting data.

- [x] Application uses MongoDB and the Mongoose ODM for the database and protects sensitive API key information on the server.

- [x] Application includes user authentication using JWT.

**Concept 10%**
Application should originate from a unique and novel idea.

    - Your group should clearly and concisely articulate your project idea.

**Deployment: 20%**
    - Application deployed at live URL on Heroku and loads with no errors.

    - Application GitHub URL submitted.

    - Portfolio at live URL submitted, featuring project.

**Repository Quality: 10%**
    - Repository has a unique name.

    - Repository follows best practices for file structure and naming conventions.

    - Repository follows best practices for class and id naming conventions, indentation, quality comments, etc.

    - Repository contains multiple descriptive commit messages.

    - Repository contains a high-quality README file with description, screenshot, and link to deployed application.

**Application Quality: 15%**
 - Application user experience is intuitive and easy to navigate.

 - Application user interface style is clean and polished.

 - Application is responsive.

**Presentation 10%**
 - Your group should present using Google Slides, Powerpoint, or a similar presentation software.

 - Every group member should speak during the presentation.

 - Your presentation should follow the Project Presentation Template (Links to an external site.).

**Collaboration 10%**
There are no major disparities in the number of GitHub contributions among group members.

**Bonus**
Fulfilling all three of the following requirements to turn your app into a PWA will add 10 points to your grade. Note that the highest grade you can achieve is still a 100:

    - Uses a web manifest

    - Uses a service worker for offline functionality

    - Is installable



### Mock-Up

![image](./assets/images/demo_healthy_helper.gif)

### Website
https://sam-pettyjohn.github.io/healthy-helper/

## Table of Contents

- [Healthy-Helper-v2](#healthy-helper-v2)
  - [Purpose](#purpose)
    - [Challenges:](#challenges)
    - [Successes:](#successes)
  - [Objectives](#objectives)
    - [**Acceptance Criteria**](#acceptance-criteria)
    - [**Additional Criteria**](#additional-criteria)
    - [Mock-Up](#mock-up)
    - [Website](#website)
  - [Table of Contents](#table-of-contents)
  - [Built With](#built-with)
  - [Collaborators](#collaborators)
  - [License](#license)

## Built With

- HTML
- CSS
    - CSS Frameworks [Bulma](https://bulma.io/documentation/) & [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- JavaScript
    - [jQuery](https://api.jquery.com/)

*With an emphasis utilizing server-side APIs. For this project, we are utilizing [TheMealDB](https://www.themealdb.com/api.php) and [NutritionIX](https://docs.google.com/document/d/1_q-K-ObMTZvO0qUEAxROrN3bwMujwAN25sLHwJzliK0/edit#heading=h.jpcgv4yap78u).*


## Collaborators

- James Huang: [Visit their GitHub Repo here](https://github.com/mrxanthic)
- Adriana Pena: [Visit their GitHub Repo here](https://github.com/adrianapvent)
- Sam Pettyjohn: [Visit their GitHub Repo here](https://github.com/sam-pettyjohn)

## License
MIT License

Copyright (c) 2022 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
