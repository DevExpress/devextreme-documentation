This article describes how to create an ASP.NET Core Angular application and add a DevExtreme widget to it. You need Visual Studio 2017 v15.7 or later and .NET Core 2.1 SDK to do this.

[note] Earlier Visual Studio and .NET Core SDK versions are supported by DevExtreme v17.2. You can find instructions in [this article](/Documentation/17_2/Guide/VS_Integration/Add_DevExtreme_to_an_ASP.NET_Core_Angular_Application/).

1. Open Visual Studio 2017 and use the ASP.NET Core Web Application template to create a new ASP.NET Core Angular application.

1. Open the `ClientApp/package.json` file and add the `devextreme` and `devextreme-angular` packages to the `dependencies` section:

        <!-- tab: package.json -->
        {
          ...
          "dependencies": {
            ...
            "devextreme": "minor_20_1",
            "devextreme-angular": "minor_20_1"
          }
        }
        
    Save the changes and wait until Visual Studio downloaded the dependencies.

1. Reference `dx.common.css` and a [predefined theme stylesheet](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') (`dx.light.css` in the code below).

    **For .NET Core SDK 2.1**, change the `ClientApp/.angular-cli.json` file as follows:

        <!-- tab: .angular-cli.json -->
        {
          "apps": [
            {
              ...
              "styles": [
                "../node_modules/devextreme/dist/css/dx.common.css",
                "../node_modules/devextreme/dist/css/dx.light.css",
                ...
              ] 
            }
          ]
        }

    **For .NET Core SDK 2.2 and later**, make the following changes to the `ClientApp/angular.json` file:

        <!-- tab: angular.json -->
        {
          "projects": {
            "ApplicationName": {
              ...
              "architect": {
                "build": {
                  ...
                  "options": {
                    ...
                    "styles": [
                      ...
                      "node_modules/devextreme/dist/css/dx.common.css",
                      "node_modules/devextreme/dist/css/dx.light.css"
                    ]
                  }
                }
              }
            }
          }
        }

1. **Only .NET Core SDK 2.2 and later**: DevExtreme requires the <a href="https://stuk.github.io/jszip/" target="_blank">JSZip library</a>. Since JSZip v3.3.0, the library does not need to be registered. If you use an earlier version, register JSZip in the `tsconfig.json` file as shown in the [JSZip Registration](/concepts/40%20Angular%20Components/10%20Getting%20Started/03%20Add%20DevExtreme%20to%20an%20Angular%20CLI%20Application/08%20Register%203rd-Party%20Dependencies/01%20JSZip%20Registration.md '/Documentation/Guide/Angular_Components/Getting_Started/Add_DevExtreme_to_an_Angular_CLI_Application/#Register_3rd-Party_Dependencies/JSZip_Registration') article.

1. Open the `ClientApp/src/app/app.module.ts` file and import modules that contain individual DevExtreme widgets or a module containing all the DevExtreme widgets and related utilities:

        <!-- tab: app.module.ts -->
        // Imports an individual widget
        import { DxDataGridModule } from "devextreme-angular"; 

        // Imports all the DevExtreme widgets
        // import { DevExtremeModule } from "devextreme-angular"; 

        @NgModule({ 
            ... 
            imports: [ 
                ... 
                DxDataGridModule,
                // DevExtremeModule,
                ... 
            ] 
        })

1. Open the `ClientApp/src/app/fetch-data/fetch-data.component.html` file and replace the table in it with the following code. This code creates the DevExtreme **DataGrid** widget and binds it to sample data the `FetchDataComponent` provides:

        <!-- tab: fetch-data.component.html -->
        <dx-data-grid [dataSource]="forecasts"></dx-data-grid>

Run the application and navigate to the Fetch data page. You should see a **DataGrid** that displays weather forecast.

#include ng-demos-and-code-examples
