When using DevExtreme UI widgets, you may need [Knockout](https://knockoutjs.com) or [AngularJS](https://angularjs.org) for data binding. In addition, you can use **AngularJS** as an SPA framework and build applications utilizing UI widgets.

Currently, the following versions are supported.

- **Knockout** versions 2.2.3 - 2.3.0 and 3.1.0 - 3.4.0

- **AngularJS** version 1.2 - 1.5  
    When using version 1.3 - 1.5, pay attention to the [Migration Guide](https://ng-learn.org/2014/06/Migration_Guide_from_1-2_to1-3).  

These scripts are accessible within your [DevExtreme Package](/concepts/Common/07%20DevExtreme%20Packages '/Documentation/Guide/Common/DevExtreme_Packages/').

You can also load these libraries from a Content Delivery Network (CDN).

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>

<!---->

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular-sanitize.js"></script>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular-route.js"></script>

[note]When using the [DevExtreme SPA Framework](/concepts/Common/05%20Introduction%20to%20DevExtreme/10%20Mobile%20Development/10%20Overview/20%20SPA%20Framework.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework') to build a single-page application, referencing **Knockout** is required.
