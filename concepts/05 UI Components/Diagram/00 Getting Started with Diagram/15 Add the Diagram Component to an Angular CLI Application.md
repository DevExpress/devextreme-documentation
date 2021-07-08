This tutorial adds the Diagram component to an Angular CLI Application. Refer to the <a href="https://cli.angular.io/" target="_blank">Angular CLI</a> documentation for information on how to create such an application.

1. Install the `devextreme` and `devextreme-angular` npm packages:

    `npm install devextreme@21.1.4 devextreme-angular@21.1.4 --save --save-exact`

1. Open the `angular.json` file and reference the Diagram and a [predefined theme stylesheet](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') (`dx.light.css` in the code below):

        <!-- tab: angular.json -->
        "styles": [
          ...
          "node_modules/devexpress-diagram/dist/dx-diagram.min.css",
          "node_modules/devextreme/dist/css/dx.light.css"
        ]

1. Go to the `NgModule` and import the Diagram module. 

        <!-- tab: app.module.ts -->
        // Imports the Diagram component
        import { DxDiagramModule } from 'devextreme-angular'; 

        @NgModule({ 
            // ... 
            imports: [
                // ...
                DxDiagramModule
            ] 
        })

Now you can use the Diagram component in your application:

        <!-- tab: app.component.html -->
        <dx-diagram></dx-diagram>

Run the application with the following command:

    `ng serve`

Open <a href="http://localhost:4200/" target="_blank">http://localhost:4200/</a> to browse the application.

