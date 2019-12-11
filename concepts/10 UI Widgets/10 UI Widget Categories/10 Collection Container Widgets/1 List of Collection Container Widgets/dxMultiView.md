<article data-show="Content/Applications/16_1/UIWidgets/dxMultiView/markup.html,
        Content/Applications/16_1/UIWidgets/dxMultiView/script.js,
        Content/Applications/16_1/UIWidgets/dxMultiView/styles.css">

The [MultiView](/api-reference/10%20UI%20Widgets/dxMultiView '/Documentation/ApiReference/UI_Widgets/dxMultiView/') widget contains several views and allows an end-user to switch between them. These views are placed horizontally next to one another and navigated by panning to the left or right. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationmultiviewmultiviewmultiview/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify a data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Switch between views**

By default, an end-user can switch between views by swiping. Assign *false* to the [swipeEnabled](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/swipeEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#swipeEnabled') option to disable this feature.

    <!--JavaScript-->
    var multiViewOptions = {
        dataSource: multiViewData,
        swipeEnabled: false
    }

You can also switch between views programmatically, using the [selectedIndex](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#selectedIndex') option. 

#####See Also#####
- [Get and Set Options - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/05%20Get%20and%20Set%20Options.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Get_and_Set_Options')
- [Change Options - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/05%20Change%20Options.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Change_Options')
- [Change Options - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/05%20Change%20Options.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Change_Options')

**Display views in a loop**

The **MultiView** widget can display views in a loop. If the widget loop mode is enabled, it scrolls back to the first item if an end-user navigates forward from the last item, or goes to the last item if an end-user navigates backward from the first item. The loop mode is disabled by default. To enable it, assign true to the [loop](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/loop.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#loop') configuration option.

    <!--JavaScript-->
    var dxMultiViewOptions = {
        dataSource: multiViewData,
        loop: true
    }

**Animate switching between views**

By default, the widget animates switching between views. You can disable animation by setting the [animationEnabled](/api-reference/10%20UI%20Widgets/dxMultiView/1%20Configuration/animationEnabled.md '/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#animationEnabled') option to *false*.

    <!--JavaScript-->
    var dxMultiViewOptions = {
        dataSource: multiViewData,
        animationEnabled: false
    }
</article>