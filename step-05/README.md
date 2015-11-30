# Poll Tutorial - Step 05

In this step, you will display the poll results.

FIXME add a screenshot

## What I must do?

1. Backport your `app.js` from the previous step into this one.
2. Update the `PollService`, by adding a method `getVotes()` that retrieves the result of the votes from APISpark.
3. Update the `PollAppController` to add a getVotes() function to the controller. Purpose of the function is to prepare the data structure that will be passed to the Graph. Make sure to return an result that respect following structure:
```
{ "key":"Vote Results",
  "values":[ {"label":"Javascript", "value":0},
             {"label":"Java","value":0},
             {"label":"Ruby","value":0},
             {"label":"C/C++","value":0},
             {"label":"Python","value":0} ] }
```
4. Edit `chart.directive.js` and implement `createBarChart(chartId, data)` function. **HINT:** Refer to [nvd3 documentation](http://nvd3.org/examples/discreteBar.html) for help.
5. Then, implement `updateBarChart(data)` function. **HINT:** Refer to this [stackoverflow topic](http://stackoverflow.com/questions/24689157/nvd3-how-to-refresh-the-data-function-to-product-new-data-on-click) for help.
6. Finally, edit the `index.html` to add a reference to the `BarChart` directive with proper params.

## Summary
Now that we have displayed vote's results in a Bar Chart, let's see how to update chart in realtime using Streamdata.io, Go to [step-06](../step-06/).
