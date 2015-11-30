# Restlet - Streamdata.io - Poll Demo
An API contains lively data, as new content is added and updated when calls are made. However, unless you poll the API regularly, you might not see how lively that data can be. How can you visualize what’s changed, to give the user a real-time view of what’s going on? Furthermore, how can you do it efficiently, without wasting precious bandwidth?

To answer those questions, the [Restlet](http://restlet.com/) and [Streamdata.io](http://streamdata.io) teams thought about making a fun demo explaining how you can stream API changes live, in the browser. And speaking of “questions” and “answers”, what about making a little live quizz application, where respondents can vote in real time?

## What are the objectives of this tutorial ##
This demo will show you how to use the main features of API Spark to easily create and deploy your Web APIs in the Cloud. We will then turn an [API Spark](http://restlet.com/products/apispark/#) API into a streaming API thanks to [Streamdata.io](http://streamdata.io) to reflect changes in real-time.

## What do I need to use this tutorial ##
Besides a web browser and a text-editor (we suggest [Sublime Text](http://www.sublimetext.com/) or [Atom](https://atom.io/)), nothing more !

## How is the tutorial organized ##
We have structured the project to allow a Git-less use. The `app` directory is the main directory of the project, the working version of the code. The tutorial is divided in steps, each one in its own directory:

1. [Create your APIs with API Spark](./step-01/)
1. [Retrieve question and choices](./step-02/)
1. [Enable users to vote](./step-03/)
1. [Bind your UI with APIs](./step-04/)
1. [Display results with a Bar Chart](./step-05/)
1. [Update your UI in realtime](./step-06/)

In each step directory you have a README file that explain the objective of the step, that you will do in the working directory `app`. If you have problems or if you get lost, looking into the step after will give you the solution.
