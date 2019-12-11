<span style="color:red"><b>IMPORTANT:</b></span> The **Panorama** widget is deprecated since v18.1. We recommend using the [TabPanel](/concepts/05%20Widgets/TabPanel/00%20Overview.md '/Documentation/Guide/Widgets/TabPanel/Overview/') or [MultiView](/concepts/05%20Widgets/MultiView/00%20Overview.md '/Documentation/Guide/Widgets/MultiView/Overview/') widget instead.

The **Panorama** widget is a full-screen widget that allows you to arrange items on a long horizontal canvas split into several views. Each view contains several items, and an end user navigates the views with the swipe gesture. The **Panorama** is often used as a navigation map on the first page of an application. 

Most primitive **Panorama** needs an collection of [items](/api-reference/10%20UI%20Widgets/CollectionWidget/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/#items')
and a [title](/api-reference/10%20UI%20Widgets/dxPanorama/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/#title'). In addition, you can specify a [backgroundImage](/api-reference/10%20UI%20Widgets/dxPanorama/1%20Configuration/backgroundImage '/Documentation/ApiReference/UI_Widgets/dxPanorama/Configuration/backgroundImage/'). For example, the following code adds a simple **Panorama** to your page.

    <!--HTML-->
    <div id="panoramaContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#panoramaContainer").dxPanorama({
            items: [{
                title: "Main courses",
                text: "First and second courses of a meal"
            }, {
                title: "Seafood",
                text: "Seafood: ocean and sea"
            },
            // . . .
            ],
            title: "Online Menu",
            backgroundImage: {
                url: '/here/goes/your/image.png',
                height: 600,
                width: 800
            }
        });
    });

    <!--CSS-->
    #panoramaContainer {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

Note that all data source items follow the [Default Item Template](/api-reference/10%20UI%20Widgets/dxPanorama/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxPanorama/Default_Item_Template/') pattern. This provides a default item appearance, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/') | [Angular](/concepts/00%20Getting%20Started/15%20Widget%20Basics%20-%20Angular '/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/') | [AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/') | [Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [Panorama - Customize Item Appearance](/concepts/05%20Widgets/Panorama/05%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/Panorama/Customize_Item_Appearance')
- [Panorama API Reference](/api-reference/10%20UI%20Widgets/dxPanorama '/Documentation/ApiReference/UI_Widgets/dxPanorama/')

[tags]panorama, collection container, collection widget, navigation, overview