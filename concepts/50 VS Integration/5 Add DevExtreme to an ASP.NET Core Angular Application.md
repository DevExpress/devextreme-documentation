This article describes how to create an ASP.NET Core Angular application and add a DevExtreme widget to it. Before you begin, make sure that you have Visual Studio 2017 or higher and .NET Core 2.0 SDK installed.

1. Open Visual Studio 2017 and create a new ASP.NET Core Angular application using the ASP.NET Core Web Application template.

2. Open the package.json file and add the **devextreme** and **devextreme-angular** packages to the `devDependencies` section.

        "devDependencies": {
            ...
            "devextreme": "minor_17_2",
            "devextreme-angular": "minor_17_2"
        }

 Save the changes and wait until Visual Studio has downloaded the dependencies.

3. Open the webpack.config.vendor.js file, register the [required .css files](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') and then build the application to update the vendor bundle.

        const nonTreeShakableModules = [
            ...
            'devextreme/dist/css/dx.common.css',
            'devextreme/dist/css/dx.light.css'
        ];
        
4. Open the ClientApp\app\app.shared.module.ts file and import individual DevExtreme modules or the entire DevExtreme. Add the imported modules to the `imports` array:

        // Imports the entire DevExtreme
        import { DevExtremeModule } from 'devextreme-angular'; 
        
        // Imports a separate module
        // import { DxDataGridModule } from 'devextreme-angular'; 

        @NgModule({ 
            ... 
            imports: [ 
                ... 
                DevExtremeModule,
                // DxDataGridModule,
                ... 
            ] 
        })

5. Open the Views\Home\Index.cshtml file and remove the `asp-prerender-module` attribute from the `<app>` element. This disables server-side rendering, which is currently not supported by DevExtreme.

6. Open the ClientApp\app\components\fetchdata\fetchdata.component.html file and replace the table in it with the following code, which creates the DevExtreme **DataGrid** widget and binds it to sample data already provided by the `FetchDataComponent`:

        <dx-data-grid [dataSource]="forecasts"></dx-data-grid>

7. Run the application and when it has been loaded, navigate to the Fetch data page to view the **DataGrid**.

Refer to the [DevExtreme-Angular repository on GitHub](https://github.com/DevExpress/devextreme-angular) for more information on working with DevExtreme controls in Angular.
