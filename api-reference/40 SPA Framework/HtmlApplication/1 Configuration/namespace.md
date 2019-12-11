---
type: Object
---
---
##### shortDescription
Specifies the object that represents a root namespace of the application.

---
The object passed to this option should be previously defined. The following example illustrates how to create the MyAppNamespace object and pass it to the **namespace** configuration option of the application.

    <!--JavaScript-->window.MyAppNamespace = {};
    $(function() {
        MyAppNamespace.app = new DevExpress.framework.html.HtmlApplication(
            { namespace: MyAppNamespace }
        );
        MyAppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
        MyAppNamespace.app.navigate();
    });

When defining the functions that return [ViewModels](/concepts/40%20SPA%20Framework/1%20Views%20and%20Layouts/1%20Define%20a%20View.md '/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Define_a_View') for application views, create these functions within the application's namespace specified via the **namespace** option.

    <!--JavaScript-->MyAppNamespace.home = Function() {
        var viewModel = {
            //...
        }
        return viewModel;
    };