# Poll Tutorial - Step 02

In this step, you will implement the code to fetch the questions exposed by the Poll API.
The result will be logged in the browser console.

# The structure of the app

The app is composed of:

- an `index.html`: the entry point of the application
- the `app` folder: the AngularJS source code of the application
- the `assets` folder: the folder contains the css, the images and the vendors libraries (e.g. AngularJS)

In the `app` folder, we have:
- `app.js` declares the main AngularJS module
- `app.service.js` declares the services of the app
- `app.controller.js` declares the controller of the app

In the `app.js`, we have declared a set of "constants":
- `apiSparkLogin`: your login for the Poll API
- `apiSparkPassword`: your password for the Poll API
- `apiSparkBaseURL`: the domain name of the Poll API

These credentials can be found in the *Poll API -> Overview* by clicking on the *Endpoints* url.

![Screenshot](/img/step-02-overview-credentials.png)

In the `app.service.js`, we have already defined what we have called an `apiSparkInterceptor`.
Every call to the REST API needs to pass your APISpark credentials. In the philosophy of the DRY principle, we decided to implement an AngularJS interceptor that plugs into the $resource service of AngularJS. The $resource is an AngularJS responsible to perform the REST calls. Basically, the interceptor will add the Authorization header required by the APISpark Web APIs with our APISpark credentials for this API to every REST call performed by the HTTP service $resource. In this way, we don’t have to think to build and pass the APISpark header to the $resource every time we call this service.

# What I must do?

1. First of all, fill out the `app.js` with your own `apiSparkLogin` / `apiSparkPassword` and `apiSparkBaseURL`
2. Implement the method `getQuestions()` of the `pollService` in the `poll.service.js`. This method should return a $promise on the questions from the Poll API that wraps our GoogleSheet.
To do so, use the [$resource](https://docs.angularjs.org/api/ngResource/service/$resource) service of AngularJS. **Hint:** use the `query()` method since our Poll API returns an array of questions.
3. Implement the `test()` method of the `PollAppController` to log the question and choices into the console.

# Summary
We have done an app skeleton able to fetch data from API Spark. To enable user to vote based on the possible choices, go to [step-03](../step-03/).
