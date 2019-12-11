<article data-show="Content/Applications/16_1/UIWidgets/dxDeferRendering/markup.html,
        Content/Applications/16_1/UIWidgets/dxDeferRendering/script.js,
        Content/Applications/16_1/UIWidgets/dxDeferRendering/styles.css">

The [DeferRendering](/api-reference/10%20UI%20Widgets/dxDeferRendering '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/') widget is a container element whose content is rendered at a specified moment. This widget is helpful on pages where a portion of the content is loaded later than the remaining part, e.g., while waiting for data from a server, or where the content is so "heavy" that its rendering takes a long time. To control the page content loading process, place some of the page content within the **DeferRendering** widget and specify when this content is allowed to be rendered. While waiting for the rendering moment, a load indicator or certain custom content can be displayed on the page.

####Specify a Moment for Rendering####

To specify the moment when the content located within the **DeferRendering** widget must be rendered, use the widget's [renderWhen](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/renderWhen.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#renderWhen') option. In the code below, the **List** widget is rendered when its data comes from a remote location.

    
    <!--HTML-->
    <div id="deferRendering">
        <div id="myList" style="margin: 10px;"></div>
    </div>
  
<!--...-->
  
    <!--JavaScript-->
    $(function(){
        var readyToRender = $.Deferred();
        var listDataSource = new DevExpress.data.DataSource({ store: [] });
        $.get("/remoteFolder/states.txt", function (data) {
            for (var i = 0; i < data.length; i++) {
                listDataSource.store().insert(data[i]);
            }
            listDataSource.load().done(function () {
                $("#myList").dxList({
                    dataSOurce: listDataSource
                });
                readyToRender.resolve();
            });
        }, "json");
    
        $("#deferRendering").dxDeferRendering({
            renderWhen: readyToRender.promise(),
            animation: 'fade',
            showLoadIndicator: true
        });
    });


#####AngularJS Approach#####

    <!--HTML-->
    <div dx-defer-rendering="{
            renderWhen: modelIsReady,
            animation: 'fade',
            showLoadIndicator: true
        }">
        <div id="myList" style="margin: 10px;" dx-list="{
            dataSource: listDataSource
        }"></div>
    </div>
  
<!--...-->
  
    <!--JavaScript-->
    var modelIsReady = $.Deferred();
    var myApp = angular.module('myApp', ['dx']);
    myApp.controller("demoController", function ($scope) {
        $.get("/remoteFolder/states.txt", function (data) {
            for (var i = 0; i < data.length; i++) {
                $scope.listDataSource.store().insert(data[i]);
            }
            $scope.listDataSource.load().done(function () {
                modelIsReady.resolve();
            });

        }, "json");
        $scope.modelIsReady = modelIsReady.promise();
        $scope.listDataSource = new DevExpress.data.DataSource({ store: [] });
    });
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    });


#####Knockout Approach#####

    <!--HTML-->
    <div data-bind="dxDeferRendering: {
            renderWhen: modelIsReady,
            animation: 'fade',
            showLoadIndicator: true
        }">
        <div id="myList" style="margin: 10px;" data-bind="dxList: {
            dataSource: listDataSource
        }"></div>   
    </div>
  
<!--...-->
  
    <!--JavaScript-->var modelIsReady = $.Deferred();
    $.get("/remoteFolder/states.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            myViewModel.listDataSource.store().insert(data[i]);
        }
        myViewModel.listDataSource.load().done(function () {
            modelIsReady.resolve();
        });

    }, "json");
    var myViewModel = {
        listDataSource: new DevExpress.data.DataSource({ store: [] }),
        modelIsReady: modelIsReady.promise()
    };
    ko.applyBindings(myViewModel);


<!--There can be several **DeferRendering** widgets on a page. In this instance, you may not specify the **renderWhen** option. The content of each widget will be rendered one after another from top to bottom.-->

####Indicate Loading State####

While waiting for the moment when the widget's content is allowed to be rendered, you can display some indication so that end users are aware that the content is being loaded. For this purpose, use one of the following techniques.

- Show loading indicator.  
Set the **DeferRendering** widget's [showLoadIndicator](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/showLoadIndicator.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#showLoadIndicator') option to *true*.

- Add custom content that will indicate the loading state of the required content.  
Apply the **dx-visible-while-pending-rendering** class to the custom content and the **dx-invisible-while-pending-rendering** class to the content to be rendered when allowed. The elements with the **dx-visible-while-pending-rendering** class will be visible until the elements with the **dx-invisible-while-pending-rendering** class are rendered.
          
          
####Animate Content Showing####

To specify the animation to be used for showing widget content, use the [animation](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/animation.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation') option. You can pass a [configuration object](/api-reference/50%20Common/Object%20Structures/animationConfig '/Documentation/ApiReference/Common/Object_Structures/animationConfig/') defining the required animation or the name of one of the [registered animations](/api-reference/50%20Common/utils/animationPresets '/Documentation/ApiReference/Common/Utils/animationPresets/').
          
The **DeferRendering** widget uses the [TransitionExecutor](/api-reference/50%20Common/utils/TransitionExecutor '/Documentation/ApiReference/Common/Utils/TransitionExecutor/') object to animate the content. The Transition Executor enables you to perform staggered animation when elements with a similar selector are animated using the specified animation one after another with a specified delay (see how list items are animated in the simulator to the right). Use the following options so that a staggered animation is performed under the elements within your **DeferRendering** widget.

- Set the **DeferRendering** widget's [staggerItemSelector](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/staggerItemSelector.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#staggerItemSelector') option.  
The elements with the specified selector that are found within the the **DeferRendering** widget content will be animated using the staggered animation.

- Set the [staggerDelay](/api-reference/50%20Common/Object%20Structures/animationConfig/staggerDelay.md '/Documentation/ApiReference/Common/Object_Structures/animationConfig/#staggerDelay') option within the animation configuration that is passed as the [animation](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/animation.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#animation') option to the **DeferRendering** widget.  
The elements will be animated with the specified delay.
          
          
####Handle Rendering####

You can perform custom actions after the **DeferRendering** widget's content is rendered. For this purpose, use the following configuration options of the widget:

- [onRendered](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/onRendered.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#onRendered');
- [onShown](/api-reference/10%20UI%20Widgets/dxDeferRendering/1%20Configuration/onShown.md '/Documentation/ApiReference/UI_Widgets/dxDeferRendering/Configuration/#onShown').
          

</article>