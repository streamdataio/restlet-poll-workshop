# Poll Tutorial - Step 06

In this step, you will use Streamdata.io to update the Graph in realtime.

## What I must do?
1. Create an free account on [Streamdata.io Portal](https://portal.streamdata.io/#/register).
2. Once registered, select default app to get your App Token.
3. Backport your `app.js` from the previous step into this one.
4. Edit your `app.js` to add the your Streamdata.io App Token in the config.
5. Edit the `streamdata.io.service.js` file to implement `createEventSource()` function. **HINT:** Use Streamdata.io JS SDK to create and return an EventSource. Note that required dependencies are already included in the project. Refer to [Streamdata.io documentation](http://streamdataio.github.io/streamdataio-js/) for additional help.
6. Edit the `PollAppController`. Change implementation of `getVotes()` function. You should create an EventSource thanks to the `streamdataioVotesFactory` and register to proper Streamdata.io callbacks. **HINT #1:** Use `convertToChartData()` function to help you convert data to the format expected by the Graph.
**HINT #2:** Do not forget to finally perform a call to `open()`.
**HINT #3:** Your $scope needs to be notified of changes. Help him $digest()!

## Summary
Well done! You've just built an end-to-end Pool demo that shows vote results in realtime.
If you still have time, try to enhance the demo by allowing user to answer to several questions.
