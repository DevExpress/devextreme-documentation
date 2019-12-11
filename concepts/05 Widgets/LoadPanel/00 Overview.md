The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-load_panel-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds to your page a simple **LoadPanel** and a [Button](/concepts/05%20Widgets/Button/00%20Overview.md '/Documentation/Guide/Widgets/Button/Overview/') that invokes it. The [closeOnOutsideClick](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/closeOnOutsideClick.md '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#closeOnOutsideClick') option set to *true* instructs the **LoadPanel** to hide once a user clicks outside it.

    <!--HTML--><div id="loadPanelContainer"></div>
    <div id="buttonContainer"></div>

<!---->

    <!--JavaScript-->$(function() {
		$("#loadPanelContainer").dxLoadPanel({
            closeOnOutsideClick: true
        });
        
        $("#buttonContainer").dxButton({
            text: "Show the Load Panel", 
            onClick: function () {
                $("#loadPanelContainer").dxLoadPanel("show");
            } 
        });
    });

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [LoadPanel - Show and Hide Using the API](/concepts/05%20Widgets/LoadPanel/05%20Show%20and%20Hide%20Using%20the%20API.md '/Documentation/Guide/Widgets/LoadPanel/Show_and_Hide_Using_the_API/')
- [LoadPanel - Customize the Appearance](/concepts/05%20Widgets/LoadPanel/10%20Customize%20the%20Appearance '/Documentation/Guide/Widgets/LoadPanel/Customize_the_Appearance/')
- [LoadPanel - Resize and Relocate](/concepts/05%20Widgets/LoadPanel/15%20Resize%20and%20Relocate.md '/Documentation/Guide/Widgets/LoadPanel/Resize_and_Relocate/')
- [LoadPanel API Reference](/api-reference/10%20UI%20Widgets/dxLoadPanel '/Documentation/ApiReference/UI_Widgets/dxLoadPanel/')

[tags]loadPanel, load panel, overview, overlay