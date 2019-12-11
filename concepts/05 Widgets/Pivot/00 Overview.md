<span style="color:red"><b>IMPORTANT:</b></span> The **Pivot** widget is deprecated since v18.1. We recommend using the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') widget instead.

The **Pivot** provides a quick way to manage multiple views. It includes a collection of views and a navigation header. An end user switches the views by swiping them or by clicking their titles on the navigation header. This widget is very useful for presenting categorized lists.

The following code adds a primitive **Pivot** widget to your page.

    <!--HTML-->
    <div id="pivotContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#pivotContainer").dxPivot({
            items: [{
                title: "Main courses",
                text: "First and second courses of a meal"
            }, {
                title: "Seafood",
                text: "Seafood: ocean and sea"
            }, {
                title: "Desserts",
                text: "Desserts: biscuits and cookies"
            }, {
                title: "Drinks",
                text: "Drinks: soft vine and tea"
            }],
            height: 300
        });
    });

Note that all data source items in the code above follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxPivot/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxPivot/Default_Item_Template/') pattern. This provides a default item appearance, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Pivot - Customize Item Appearance](/concepts/05%20Widgets/Pivot/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Pivot/Customize_Item_Appearance')
- [Pivot - Categorize Data for Views](/concepts/05%20Widgets/Pivot/10%20Categorize%20Data%20for%20Views.md '/Documentation/Guide/Widgets/Pivot/Categorize_Data_for_Views')
- [Pivot API Reference](/api-reference/10%20UI%20Widgets/dxPivot '/Documentation/ApiReference/UI_Widgets/dxPivot/')

[tags]pivot, collection container, collection widget, navigation, overview