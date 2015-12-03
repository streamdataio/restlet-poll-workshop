# Poll Tutorial - Step 04

In this step, you will implement the poll feature. The idea is to be able to trigger a poll once you click on a question choice. Each time you click on a button choice you should increment the corresponding counter stored in APISpark's EntityStore (Poll Results).

## What I must do?

1. Before jumping into the code, you need first to create an Vote Entity instance for the question. This instance will represent a vote counter for each choice. You can create it via APISpark, by clicking on **Browser** on the entity page (or via a curl command). Its structure should be like that:
```
{"id": [id of the question],"choice_1":0,"choice_2":0,"choice_3":0,"choice_4":0,"choice_5":0}
```
2. Backport your `app.js` from the previous step into this one.
3. Update the `PollService`, by adding a method `vote()` that update the vote of the given question. **Hint**: use $resource to perform the your request. **Hint**: You will have to use a custom action as APISpark is expecting a PUT method.
4. Go to APISpark *Poll API -> Settings* and grant the permissions for the *HTTP PUT* method.
5. Update the `PollController`to add a `vote()` function to the controller that will be bound to the choice buttons. Note: This method should return a promise for the next steps.
6. Update the `index.html` to bind the choices buttons to the `PollController`.
7. For testing, click on a choice and then check (via API Spark Swagger UI or via a curl command) that the result of the vote is properly incremented in the APISpark Entity Store.

## Summary
Now that we are able to vote. Let's display vote's results in a chart,
go to [step-05](../step-05/).
