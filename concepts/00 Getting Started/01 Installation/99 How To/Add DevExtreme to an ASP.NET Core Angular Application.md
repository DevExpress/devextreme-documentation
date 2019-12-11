This article describes how to create an ASP.NET Core Angular application and add a DevExtreme widget to it. You need Visual Studio 2017 version 15.7 or later and .NET Core 2.1 SDK to do this.

[note] DevExtreme v.17.2 supports earlier Visual Studio and .NET Core SDK versions. You can find instructions in [this article](/Documentation/17_2/Guide/VS_Integration/Add_DevExtreme_to_an_ASP.NET_Core_Angular_Application/).

1. Open Visual Studio 2017 and create a new ASP.NET Core Angular application using the ASP.NET Core Web Application template.

1. Open the ClientApp\package.json file and add the **devextreme** and **devextreme-angular** packages to the `dependencies` section:

        "dependencies": {
            ...
            "devextreme": "minor_18_1",
            "devextreme-angular": "minor_18_1"
        }

    Save the changes and wait until Visual Studio has downloaded the dependencies.

1. Open the ClientApp\\.angular-cli.json file and register the [required .css files](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') in it:

        {
            "apps": [
                {
                    // ...
                    "styles": [
                        "../node_modules/devextreme/dist/css/dx.common.css",
                        "../node_modules/devextreme/dist/css/dx.light.css",
                        // ...
                    ] 
                }
            ]
        }
        
1. Open the ClientApp\src\app\app.module.ts file and import modules that contain individual DevExtreme widgets or a module containing all the DevExtreme widgets and related utilities:

        // Imports all the DevExtreme widgets
        import { DevExtremeModule } from "devextreme-angular"; 
        
        // Imports an individual widget
        // import { DxDataGridModule } from "devextreme-angular"; 

        @NgModule({ 
            ... 
            imports: [ 
                ... 
                DevExtremeModule,
                // DxDataGridModule,
                ... 
            ] 
        })

1. Open the ClientApp\src\app\fetch-data\fetch-data.component.html file and replace the table in it with the following code. This code creates the DevExtreme **DataGrid** widget and binds it to sample data the `FetchDataComponent` provides:

        <dx-data-grid [dataSource]="forecasts"></dx-data-grid>

1. Run the application and when it is loaded, navigate to the Fetch data page to view the **DataGrid**.

Refer to [DevExtreme-Angular on GitHub](https://github.com/DevExpress/devextreme-angular/blob/master/README.md) for more information on working with DevExtreme controls in Angular.
