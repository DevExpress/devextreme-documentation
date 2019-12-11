<article data-show="/Demos/TipCalculator/">
Open the [index.html](https://github.com/DevExpress/DevExtreme-14.2-TipCalculator-Knockout/blob/master/index.html) file, which is the application page. 

The application page contains links to the required libraries: **dx.mobile**, **jQuery**, **Knockout** and **globalize**. These libraries are contained in the **js** folder of the application project.

    <!--HTML--><script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
    <script type="text/javascript" src="js/knockout-3.4.0.js"></script>
    <script src="js/cldr.min.js"></script>
    <script src="js/cldr/event.min.js"></script>
    <script src="js/cldr/supplemental.min.js"></script>

    <script src="js/globalize.min.js"></script>
    <script src="js/globalize/message.min.js"></script>
    <script src="js/globalize/number.min.js"></script>
    <script src="js/globalize/currency.min.js"></script>
    
    <script type="text/javascript" src="js/dx.mobile.js"></script>

The application page also includes links to the stylesheets required for the application. The stylesheets are contained in the **css** folder of the application project.

    <!--HTML--><link rel="stylesheet" type="text/css" href="css/dx.spa.css" />
    <link rel="stylesheet" type="text/css" href="css/dx.common.css" />
    <link rel="dx-theme" data-theme="ios7.default" href="css/dx.ios7.default.css" />
    <link rel="dx-theme" data-theme="android5.light" href="css/dx.android5.light.css" />
    <link rel="dx-theme" data-theme="win10.black" href="css/dx.win10.black.css" />
    <link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" />

Wherever the application runs - on iOS, Android or Windows Phone 8 platforms, the application looks native, because corresponding [themes](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/') are applied.

DevExtreme comes with a set of [predefined layout sets](/concepts/40%20SPA%20Framework/13%20Built-in%20Layouts/7%20Ready-to-Use%20Layout%20Sets.md '/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets'). Each layout set determines the layout in which a view is displayed in a particular navigation context. In the TipCalculator application, the "Empty" layout set is used. This set includes a single "Empty" layout and applies it to all views on all platforms. This layout contains a view placeholder only and is appropriate for this simple application. You can find links to the layout files in the application page as well.

  <!--HTML--><script type="text/javascript" src="layouts/Empty/EmptyLayout.js"></script>
    <link rel="stylesheet" type="text/css" href="layouts/Empty/EmptyLayout.css" />
    <link rel="dx-template" type="text/html" href="layouts/Empty/EmptyLayout.html"/>

Finally, the application page contains links to the view files and to the application CSS and JavaScript files.

    <!--HTML--><!-- App views -->
    <script type="text/javascript" src="views/home.js"></script>
    <link rel="dx-template" type="text/html" href="views/home.html"/>
    <!-- App -->
    <link rel="stylesheet" type="text/css" href="index.css" />
    <script type="text/javascript" src="index.js"></script>
  
The *index.css* file contains the style classes that are designed for this application. They are used in the view's markup.

The *index.js* file is the script that is executed when the page is loaded. See its description below.

The application page only contains the view's markup and its layout. There is no additional markup in the application. See the page body.

    <!--HTML--><body>
        <div class="dx-viewport dx-ios-stripes"></div>
    </body>

</article>