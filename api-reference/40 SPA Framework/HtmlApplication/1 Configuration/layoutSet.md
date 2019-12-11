---
default: undefined
type: String | Array
---
---
##### shortDescription
An array of layout controllers that should be used to show application views in the current navigation context.

---
Views are displayed within a layout markup that usually contains such common elements as a navigation control and a toolbar - elements that are not related to a view but must be displayed to provide global navigation or other actions. Use the **layoutSet** option to specify which layout controllers should be used to provide appropriate layout markups for different application views and when each of these controllers should be used. The framework comes with a set of [predefined layout sets](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/7%20Ready-to-Use%20Layout%20Sets.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets'). In the simplest case, you can assign one of these sets to this option.

    <!--JavaScript-->window.MyApp = {};
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            layoutSet: DevExpress.framework.html.layoutSets['navbar'],
            namespace: MyApp
        });
    });

In addition, you can specify a custom layout set. For this purpose, assign an array of objects providing information on the required layout controllers.

    <!--JavaScript-->window.MyApp = {};
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            layoutSet: [
                { platform: 'android', controller: new MyAndroidLayoutController() },
                { platform: 'ios', controller: new MyiOSLayoutController() }
            ],
            namespace: MyApp
        });
    });

#####See Also#####
- [SPA Framework - Custom Layout Sets](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/8%20Custom%20Layout%20Sets.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts#Custom_Layout_Sets') topic.