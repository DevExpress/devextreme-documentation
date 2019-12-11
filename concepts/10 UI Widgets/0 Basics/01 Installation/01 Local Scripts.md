You can find all the required files in your [DevExtreme package](/concepts/Common/07%20DevExtreme%20Packages '/Documentation/Guide/Common/DevExtreme_Packages/'). Place the **Lib** folder of this package into the folder with your application. Then, depending on the library or framework you use in your app, link the needed files within the `<head>` tag of your index page in the given order.

- **jQuery**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="/js/jquery-2.2.3.min.js"></script>
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="/js/dx.all.js"></script>
        <!--<script type="text/javascript" src="/js/dx.web.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.viz.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.viz-web.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.mobile.js"></script>-->
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/css/dx.ios7.default.css" />

- **Knockout**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="/js/jquery-2.2.3.min.js"></script>
        <!-- The Knockout library -->
        <script type="text/javascript" src="/js/knockout-3.4.0.js"></script>
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="/js/dx.all.js"></script>
        <!--<script type="text/javascript" src="/js/dx.web.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.viz.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.viz-web.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.mobile.js"></script>-->
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/css/dx.ios7.default.css" />

- **AngularJS**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="/js/jquery-2.2.3.min.js"></script>
        <!-- The AngularJS library -->
        <script type="text/javascript" src="/js/angular.min.js"></script>
        <script type="text/javascript" src="/js/angular-sanitize.min.js"></script>
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="/js/dx.all.js"></script>
        <!--<script type="text/javascript" src="/js/dx.web.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.viz.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.viz-web.js"></script>-->
        <!--<script type="text/javascript" src="/js/dx.mobile.js"></script>-->
        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/css/dx.ios7.default.css" />

Localized apps and apps that use custom date, number or currency formatting require the [Globalize](https://github.com/jquery/globalize) library as well.

    <!--HTML-->
    <!-- Globalize scripts -->
    <script type="text/javascript" src="/js/cldr.min.js"></script>
    <script type="text/javascript" src="/js/cldr/event.min.js"></script>
    <script type="text/javascript" src="/js/cldr/supplemental.min.js"></script>
    <script type="text/javascript" src="/js/globalize.min.js"></script>
    <script type="text/javascript" src="/js/globalize/message.min.js"></script>
    <script type="text/javascript" src="/js/globalize/number.min.js"></script>
    <script type="text/javascript" src="/js/globalize/currency.min.js"></script>
    <script type="text/javascript" src="/js/globalize/date.min.js"></script>

[note]Globalize scripts need to go _before_ DevExtreme scripts.

If you use the [client-side export](/concepts/10%20UI%20Widgets/70%20Data%20Grid/090%20Client-Side%20Export '/Documentation/Guide/UI_Widgets/Data_Grid/Client-Side_Export/'), add references to the JSZip library.

    <!--HTML-->
    <!--jzip library-->
    <script type="text/javascript" src="/js/jszip.js"></script>

[note]Reference the **JSZip** scripts *before* the DevExtreme scripts.