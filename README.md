# My Solution

## The following is my solution to the Test posed at the end of this document.

### Job Stories

* When the page loads, I want to see a text field with a button, so that I know I can submit search criteria.

* When I click the submit button, I want the page to display the repositories of the username I submitted.

* When a username does not exist, I want the page to display an error message, so that I know I need to try a different name.

I have completed these job stories to the best of my ability.  I have learned a lot during about how to write Javascript without using libraries, which I had little experience of before.  I now understand callbacks much better and 

# JuniorFrontendTest

## GOALS


#### The main goal of this tech test is to create a client side web application that reproduces the screenshots below by using [GitHub API](https://developer.github.com/v3/) .

We will only evaluate the client side code and the criteria will be based mainly on:

1. Good use of **pure Javascript** language without external libraries and frameworks like jQuery, React...
2. Clean HTML and CSS markup
3. Clean, maintainable & easy­to­read
4. Good architectural practices

## HOW TO START

1. Investigate the github api calls for user and repos (for example: test them in the browser)
2. Fork this repository & cd into the directory
3. Launch the web application, for example with: python -m SimpleHTTPServer 1337
4. Open the browser with http://localhost:1337/ and start coding!

## NOT REQUIRED, BUT IMPRESSIVE

- Adding Unit Testing. External libraries limitation doesn't apply here, you can use Jasmine, Karma...


## SCREENSHOTS

#### First Screen

The user can search a username of GitHub

![](https://github.com/gerardcobas/JuniorFrontendTest/blob/master/images/First-Screen.png)

#### Success Screen

If the searched username does exist: The searched user profile is displayed with all his repositories

![](https://github.com/gerardcobas/JuniorFrontendTest/blob/master/images/Success-screen.png)

#### Error Screen

If the searched username does not exist: An error is shown

![](https://github.com/gerardcobas/JuniorFrontendTest/blob/master/images/Error-screen.png)




