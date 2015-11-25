# Poll Tutorial - Step 04

In this step, you will display implement the poll feature. The idea is to be able to trigger a poll once you click on a question choice.

FIXME add a screenshot

## What I must do?

1. Backport your `app.js` from the previous step into this one.
2. Then, you need to create the poll for the question. The structure of the poll should have structure like that:
```
{"id": [id of the question],"choice_1":0,"choice_2":0,"choice_3":0,"choice_4":0,"choice_5":0}
```
**Hint:** you can do it via a curl or via the Swagger UI of APISpark.

3. Update the `PollService`, by adding a method `vote()` that update the vote of the given question. **Hint**: use $resource to perform the post request.
4. Update the `PollController`to add a `vote()` function to the controller that will be bound to the choices buttons.
5. Update the `index.html` to bind the choices buttons to the `PollController`.
6. Check that you can create a poll.
7. Go to APISpark *Poll API -> Settings* and update the permissions for the *HTTP PUT* method
8. Check again with the UI: click on a choice and then check in the API Spark Swagger UI or via a curl the result of the vote

## Summary

FIXME add a summary
