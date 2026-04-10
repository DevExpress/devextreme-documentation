DevExtreme offers over 40 [predefined themes](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') for component styling. You can also create a custom theme with our [ThemeBuilder](https://devexpress.github.io/ThemeBuilder/).

In the next step of the tutorial, apply the `dx.light` theme and add CSS styles to the components.

---
##### jQuery

To apply a theme, link its file in the `<head>` between jQuery and DevExtreme sources (the order is important):

    <!-- tab: index.html -->
    <head>
        <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <link rel="stylesheet" href="https://cdn3.devexpress.com/jslib/minor_25_2/css/dx.light.css" />
        <link rel="stylesheet" type="text/css" href="index.css" />
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_25_2/js/dx.all.js"></script>
    </head>

##### Angular

To apply a theme, open the `angular.json` file and reference a stylesheet:

    <!-- tab: angular.json -->
    {
      "projects": {
        "ProjectName": {
          "architect": {
            "build": {
              "options": {
                "styles": [
                  "node_modules/devextreme/dist/css/dx.light.css",
                  "src/styles.css"
                ],
                ...
              },
              ...
            },
            ...
          }
        },
        ...
      },
      ...
    }

##### Vue

To apply a theme, import a stylesheet where DevExtreme components are used or in the main application file:

    import 'devextreme/dist/css/dx.fluent.blue.light.css';

##### React

To apply a theme, import a stylesheet where DevExtreme components are used or in the main application file:

    import 'devextreme/dist/css/dx.fluent.blue.light.css';
    
---

If you want to apply theme colors and typography settings to all page elements (and not only to DevExtreme UI components), add a `dx-viewport` class to the `<body>` tag of your application's `index.html` file.

To configure component styles, create an `index.css` file and import it alongside the DevExtreme theme CSS file:

    <!-- tab: index.css -->
    :root {
        color-scheme: light; /* Update this property when you switch between light/dark themes. */
    }

    #dashboard {
        display: grid;
        gap: 20px;
        max-width: 900px;
        margin: 40px auto;
        padding: 80px 20px;
        box-sizing: border-box;
    }

    #progress,
    #task-grid {
        background-color: light-dark(#fff, #383838);
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }