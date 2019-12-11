Instead of delivering DevExtreme and other required libraries with your app, you can load them from Content Delivery Network (CDN) services. Depending on the library or framework you use in your app, link the needed resources within the `<head>` tag of your index page in the given order.

- **jQuery**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-2.2.3.min.js"></script>
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.viz-web.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.viz.js"></script> -->

- **Knockout**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-2.2.3.min.js"></script>
        <!-- The Knockout library -->
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.viz-web.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.viz.js"></script> -->

- **AngularJS**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-2.2.3.min.js"></script>
        <!-- The AngularJS library -->
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular.min.js"></script>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.11/angular-sanitize.min.js"></script>
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.viz-web.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_16_1/js/dx.viz.js"></script> -->

Localized apps and apps that use custom date, number or currency formatting require the [Globalize](https://github.com/jquery/globalize) library as well.

    <!--HTML-->
    <!-- Globalize scripts -->
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr/event.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr/supplemental.min.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize.min.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/message.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/number.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/currency.js"></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/globalize/1.0.0/globalize/date.js"></script>

[note]Globalize scripts need to go _before_ DevExtreme scripts.