The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-toolbar-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **Toolbar** to your page. Three items are plain text and one is a [Button](/concepts/05%20Widgets/Button '/Documentation/Guide/Widgets/Button/') widget. 

    <!--HTML-->
    <div id="toolbarContainer"></div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back'
                },
                location: 'before'
            }, {
                text: 'Add',
                locateInMenu: 'always'
            }, {
                text: 'Change',
                locateInMenu: 'always'
            }, {
                text: 'Products',
                location: 'center'
            }]
        });
    });

Note that all data source objects in the code above follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/') pattern. This provides a default appearance for toolbar items, which can be customized later.

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Toolbar - Specify Item Type](/concepts/05%20Widgets/Toolbar/05%20Specify%20Item%20Type.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type')
- [Toolbar - Specify Item Location](/concepts/05%20Widgets/Toolbar/10%20Specify%20Item%20Location.md '/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location')
- [Toolbar - Customize Item Appearance](/concepts/05%20Widgets/Toolbar/15%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Toolbar/Customize_Item_Appearance')
- [Toolbar API Reference](/api-reference/10%20UI%20Widgets/dxToolbar '/Documentation/ApiReference/UI_Widgets/dxToolbar/')

[tags]toolbar, collection container, collection widget, overview