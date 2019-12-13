Scaffolding in Visual Studio allows you to generate a component that contains a DevExtreme widget and a data service for the widget. You can scaffold the [DataGrid](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/Angular/Light), [TreeList](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/Overview/Angular/Light), and [Form](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Overview/Angular/Light) widgets.

Scaffolding has the following requirements:

- Visual Studio 2017 and later
- .NET Core SDK 2.1
- ASP.NET Core application with Angular
- Entity Framework Core Data Model
- DevExtreme installed using the Windows installer (see [Download and Install](/concepts/Common/05%20Introduction%20to%20DevExtreme/50%20Download%20and%20Install.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Download_and_Install'))

Follow the instructions below to scaffold a component:

1. In **Solution Explorer**, right-click a folder. In the invoked menu, point to **Add** and then click **New Scaffolded Item...**.

    ![DevExtreme Angular Component Scaffolding - Add New Scaffolded Item on the context menu](/images/AngularComponentScaffolding/ng-scaffolding-add-new-item.png)

2. In the **Add Scaffold** window, choose **Angular Component with a DevExtreme UI Widget** and click **Add**.

    ![DevExtreme Angular Component Scaffolding - The Add Scaffold window](/images/AngularComponentScaffolding/ng-scaffolding-add-scaffold.png)

3. In the wizard, enter the component's name, choose the DevExtreme widget to scaffold, and configure data binding and related settings. Click **Add** to finish the scaffolding.

    ![DevExtreme Angular Component Scaffolding - The Add Angular Component window](/images/AngularComponentScaffolding/ng-scaffolding-add-component.png)

The component and data service are created in the ClientApp\src\app\%componentname% folder, and the component is registered in the app.module.ts file.
