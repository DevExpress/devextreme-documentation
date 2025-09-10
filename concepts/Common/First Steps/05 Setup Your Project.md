---
##### jQuery

First, create an empty web application. Then add jQuery and DevExtreme source files to the `<head>`:

    <!-- tab: index.html -->
    <head>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_1/js/dx.all.js"></script>
    </head>

For complete installation instructions, refer to the following help topic: [Add DevExtreme to a jQuery Application](/concepts/58%20jQuery%20Components/05%20Add%20DevExtreme%20to%20a%20jQuery%20Application/00%20Add%20DevExtreme%20to%20a%20jQuery%20Application.md '/Documentation/Guide/jQuery_Components/Add_DevExtreme_to_a_jQuery_Application/').

##### Angular

First, create an empty Angular application (see [Angular Documentation: Set up a new project locally](https://angular.dev/installation#set-up-a-new-project-locally)). Run the following commands:

    npm install -g @angular/cli
    ng new first-steps-project

Then, in the project file directory, run the following [DevExtreme CLI](/concepts/Common/DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Common/DevExtreme_CLI/') command to add DevExtreme to your app:

    npx -p devextreme-cli devextreme add devextreme-angular

For complete installation instructions, refer to the following help topic: [Add DevExtreme to an Angular CLI Application](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/').

[note] To start with an application that contains predefined components, try CLI-based [DevExtreme Application Template](/concepts/40%20Angular%20Components/30%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Angular_Components/Application_Template/'). This template includes a navigation menu and several sample views in a responsive layout.

##### Vue

First, create an empty Vue JavaScript application (see [Vue Documentation: Creating a Vue Application](https://vuejs.org/guide/quick-start.html#creating-a-vue-application)). Run the following command:

    npm create vue@latest

Then, in the project file directory, run the following [DevExtreme CLI](/concepts/Common/DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Common/DevExtreme_CLI/') command to add DevExtreme to your app:

    npx -p devextreme-cli devextreme add devextreme-vue

For complete installation instructions, refer to the following help topic: [Add DevExtreme to a Vue Application](/concepts/55%20Vue%20Components/05%20Add%20DevExtreme%20to%20a%20Vue%20Application/00%20Add%20DevExtreme%20to%20a%20Vue%20Application.md '/Documentation/Guide/Vue_Components/Add_DevExtreme_to_a_Vue_Application/').

[note] To start with an application that contains predefined components, try CLI-based [DevExtreme Application Template](/concepts/55%20Vue%20Components/50%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/Vue_Components/Application_Template/'). This template includes a navigation menu and several sample views in a responsive layout.

##### React

First, create an empty React JavaScript application (see [React Documentation: Build a React app from Scratch](https://react.dev/learn/build-a-react-app-from-scratch#vite)). For instance, to create an application with [Vite](https://vite.dev/), run the following command:

    npm create vite@latest my-app -- --template react

Then, in the project file directory, run the following [DevExtreme CLI](/concepts/Common/DevExtreme%20CLI/00%20DevExtreme%20CLI.md '/Documentation/Guide/Common/DevExtreme_CLI/') command to add DevExtreme to your app:

    npx -p devextreme-cli devextreme add devextreme-react

For complete installation instructions, refer to the following help topic: [Add DevExtreme to a React Application](/concepts/50%20React%20Components/05%20Add%20DevExtreme%20to%20a%20React%20Application/00%20Add%20DevExtreme%20to%20a%20React%20Application.md '/Documentation/Guide/React_Components/Add_DevExtreme_to_a_React_Application/').

[note] To start with an application that contains predefined components, try CLI-based [DevExtreme Application Template](/concepts/50%20React%20Components/50%20Application%20Template/00%20Application%20Template.md '/Documentation/Guide/React_Components/Application_Template/'). This template includes a navigation menu and several sample views in a responsive layout.
    
---