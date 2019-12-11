<article data-show="Content/Applications/16_1/UIWidgets/dxActionSheet/markup.html,
        Content/Applications/16_1/UIWidgets/dxActionSheet/script.js,
        Content/Applications/16_1/UIWidgets/dxActionSheet/styles.css">

The [ActionSheet](/api-reference/10%20UI%20Widgets/dxActionSheet '/Documentation/ApiReference/UI_Widgets/dxActionSheet/') widget is a sheet containing a set of buttons located one under the other. These buttons usually represent several choices relating to a single task.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsactionsheetactionsheetactionsheet/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Collection Container widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Specify data source](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/0%20Specify%20Data%20Source.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Specify_Data_Source')  
- [Handle item events](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/1%20Handle%20Item%20Events.md '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Handle_Item_Events')  
- [Customize item appearance](/concepts/10%20UI%20Widgets/10%20UI%20Widget%20Categories/10%20Collection%20Container%20Widgets/0%20Common%20Tasks/2%20Customize%20an%20Item%20Appearance '/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Collection_Container_Widgets/#Common_Tasks/Customize_an_Item_Appearance')  

In addition to common collection container functionality, the widget enables you to perform the following adjustments.

**Specify action sheet popup type**

By default the widget displays the popup window as an overlay window floating from the bottom of the screen. You can assign true to the usePopover option to display the action sheet as a popover pointing at the specified target element. In this case, you should also specify the target element for the popover using the [target](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/target.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#target') option.

    <!--JavaScript-->
    var actionSheetOptions = {
        dataSource: popoverData,
        usePopover: true,
        target: $("#actionSheetTarget")
    }

**Control the widget visibility**

The action sheet is mostly hidden, and is only shown when an end-user should choose an action.

Use the [show()](/api-reference/10%20UI%20Widgets/dxActionSheet/3%20Methods/show().md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Methods/#show') and [hide()](/api-reference/10%20UI%20Widgets/dxActionSheet/3%20Methods/hide().md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Methods/#hide') methods, which show or hide the widget respectively.

    <!--JavaScript-->
    showActionSheet = function() {
        var actionSheet = $("#actionSheetContainer").dxActionSheet("instance");
        actionSheet.show();
    }
    hideActionSheet = function() {
        var actionSheet = $("#actionSheetContainer").dxActionSheet("instance");
        actionSheet.hide();
    }

You can also change widget visibility using the [toggle(showing)](/api-reference/10%20UI%20Widgets/dxActionSheet/3%20Methods/toggle(showing).md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Methods/#toggleshowing') method, which shows or hides the widget depending on the value of the **showing** parameter.

    <!--JavaScript-->
    // Get the widget instance.
    ...
    showActionSheet = function() {
        actionSheetInstance.toggle(true);
    }
    hideActionSheet = function() {
        actionSheetInstance.toggle(false);
    }

Another way is to use the [visible](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#visible') option. In **MVVM approach**, provide two-way binding to the option to show or hide the widget depending on the variable value. To show or hide the widget, assign *true* or *false* to the appropriate field respectively.

#####AngularJS Approach#####

    <!--JavaScript-->
    function Controller($scope) {
        $scope.showActionSheet = function() {
            $scope.actionSheetVisible = true;
        }
        $scope.hideActionSheet = function() {
            $scope.actionSheetVisible = false;
        }
        $scope.actionSheetVisible = false;
    }

<!---->

    <!--HTML-->
    <div ng-controller="Controller">
        <div dx-action-sheet="{ bindingOptions: { 'visible': 'actionSheetVisible' }}"></div>
    </div>

#####Knockout Approach#####

    <!--HTML-->
    <div id="actionSheetContainer" data-bind="dxActionSheet: {
         visible: actionSheetVisible
    }"></div>

<!---->

    <!--JavaScript-->
    var actionSheetVisible = ko.observable(false);
    var showActionSheet = function() {
        actionSheetVisible(true);
    }
    var hideActionSheet = function() {
        actionSheetVisible(false);
    }

**Show the action sheet title**

To display the action sheet title, assign *true* to the [showTitle](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#showTitle') option. The title text is specified using the [title](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/title.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#title') option.

    <!--JavaScript-->
    var actionSheetOptions = {
        dataSource: popoverData,
        showTitle: true,
        title: 'Choose action'
    }

**Specify availability of additional UI elements**

You can specify the availability of the **Cancel** button on the action sheet using the [showCancelButton](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/showCancelButton.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#showCancelButton') option. This button enables an end-user to close the widget without choosing any suggested action. If the widget is displayed as a popover, the **Cancel** button is always unavailable. In this case, the popover window is closed if a user clicks outside of this window.

The button text is specified using the [cancelText](/api-reference/10%20UI%20Widgets/dxActionSheet/1%20Configuration/cancelText.md '/Documentation/ApiReference/UI_Widgets/dxActionSheet/Configuration/#cancelText') option.

    <!--JavaScript-->
    var actionSheetOptions = {
        dataSource: popoverData,
        showCancelButton: true,
        cancelText: 'Cancel'
    }
</article>