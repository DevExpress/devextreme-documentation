To use DevExtreme within the Angular application, import the required separate modules or entire DevExtreme to this application within the "ClientApp/app/app.module.ts" file.

    //Imports a separate module
    import { DxButtonModule } from 'devextreme-angular/ui/button'; 

<!---->

    //Imports the entire DevExtreme
    import { DevExtremeModule } from 'devextreme-angular'; 

Add the imported modules to application imports: 

    @NgModule({ 
        ... 
        imports: [ 
            ... 
            DevExtremeModule, 
            ... 
        ] 
    })

![Add DevExtreme css files to webpack config](/images/DevExtreme/ImportDevExtremeModulesToAngular2App.png)