<article data-show="/Demos/TipCalculator/">
Open the [index.js](https://github.com/DevExpress/DevExtreme-14.2-TipCalculator-Knockout/blob/master/index.js) file. It contains the script that is executed when the application page is loaded.

    <!--JavaScript-->window.TipCalculator = {};
    $(function() {
        document.addEventListener("deviceready", function() {
            if(window.devextremeaddon != null) {
                window.devextremeaddon.setup();
            }
            navigator.splashscreen.hide();
        });
        TipCalculator.app = new DevExpress.framework.html.HtmlApplication({
            namespace: TipCalculator,        
            layoutSet: DevExpress.framework.html.layoutSets['empty']
        });
        TipCalculator.app.router.register(":view", { view: "home" });
        TipCalculator.app.navigate();   
    });

As you can see in the code above, the [HTMLApplication](/api-reference/40%20SPA%20Framework/HtmlApplication '/Documentation/ApiReference/SPA_Framework/HtmlApplication/') object is created, a format for the application's URL is registered and the default ("home") view is navigated to when the application page is loaded.

The application object is created in the **TipCalculator** namespace. To specify the namespace for the application object, the **namespace** option of the configuration object is used. As you may have noticed, the **home** function, which is executed when the "home" view is loaded, is also declared in the **TipCalculator** namespace.

The layout used for the application's view is specified using the [layoutSet](/api-reference/40%20SPA%20Framework/HtmlApplication/1%20Configuration/layoutSet.md '/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet') option of the application's configuration object.

The **navigate** function, which is called after the application object is created, changes the application's URI using the registered format to the following: "#home". When the browser's URL changes, the framework displays the "home" view. To learn more about navigation, refer to the [Navigation and Routing](/concepts/40%20SPA%20Framework/3%20Navigation%20and%20Routing '/Documentation/Guide/SPA_Framework/Navigation_and_Routing/') article.

</article>