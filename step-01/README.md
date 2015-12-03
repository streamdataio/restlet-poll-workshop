# Create a Restlet account

Sign in to API Spark (http://restlet.com/products/apispark/#)

# Create the GoogleSheet

Create a GoogleSheet as follow:

![Screenshot](/img/step-01-googlesheet.png)

**Important:** Rename the sheet to "question" as it will be used by APISpark to name the API endpoint.

# Create a Google Wrapper Entity Store for the question and the possible answer

In APISpark, create an Entity Store with

- name: **Poll Questions**
- type: **Google Sheets Wrapper**
- spreadsheet: *choose the spreadsheet created in the previous section*

![Screenshot](/img/step-01-entitystore-googlesheet.png)

Once your Entity Store is successfully created, click on the green **Deploy** button.

# Create a FullStack Entity Store for the votes

In APISpark, create an Entity Store with

- name: **Poll Results**
- type: **Full stack**

![Screenshot](/img/step-01-entitystore-fullstack.png)

Once the Entity Store is created, let's create an entity:

- In the overview, click on the button **Add**
- Add the entity **Vote**
- Vote entity should be created with a default attribute named `id` representing its primary key. Click on the `id` property to change its properties. Set **Value policy** to **Specified at creation** and **type** to **Integer** as follow:

![Screenshot](/img/step-01-entitystore-pk.png)

- Then, click on the little plus signs of the Vote entity to add additional properties. We’ll create 5 properties for the (up to) 5 possible answers to our questions:

![Screenshot](/img/step-01-entitystore-properties.png)

Once your Entity Store is successfully created and configured, click on the green **Deploy** button.

# Create a Web API

Create a Web API:

- type: **Full stack**
- name: **Poll API**
- domain: *any name that doesn't collide with other participants (eg. your github username prefixed with pollworkshop)*

![Screenshot](/img/step-01-webapi.png)

Once created, go to the “Settings” tab, and click on “Add” in the “Imports” panel on the left side, so as to import your two data stores: the Google Sheets with our questions and choices, and the Entity Store for the votes collection:

![Screenshot](/img/step-01-webapi-import-cell.png)

When both data stores are imported, if you go back to the “Overview” pane of your API, you can see our resources available:

![Screenshot](/img/step-01-webapi-ressources.png)

One last click on the **Deploy** button to make your API live!

# Test the APIs with curl

You can now test your APIs. To do so, select an API under the **Resources** section of your WebAPI, an example of curl command will be displayed:

![Screenshot](/img/step-01-webapi-test.png)

Open a terminal and run the curl command. You should get something like that:
```
[{"id":"1","question":"What is your favorite programming language ?",
  "total_options":"5",
  "answer_1":"Javascript",
  "answer_2":"Java",
  "answer_3":"Ruby",
  "answer_4":"C/C++",
  "answer_5":"Python"}]
```

# Summary
We have created and deployed our backend APIs. To start implementing the client app, go to [step-02](../step-02/).
