DevExtreme is available through the [npm](https://www.npmjs.com) package manager. To install the [DevExtreme package](https://www.npmjs.com/package/devextreme), run the following command.

    npm install devextreme

[note]npm ver. 3 will not install the DevExtreme dependencies automatically. Run the following commands to install them manually.

    // Required by DevExtreme
    npm install jquery@2.2.3

    // Optional: allow you to use the MVVM approach
    npm install knockout@3.4
    npm install angular@1
    npm install angular-sanitize@1

    // Optional: enable you to localize your app
    npm install globalize@1
    npm install cldr-data

    // Optional: enables you to create DevExtreme modules
    npm install webpack@1.13

After installation is completed, you can find all the libraries in the **node_modules** folder. Link them within the `<head>` tag of your index page.

    <!--HTML-->
    <script type="text/javascript" src="/node_modules/jquery/dist/jquery.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="/node_modules/knockout/build/output/knockout-latest.js"></script>
    <script type="text/javascript" src="/node_modules/angular/angular.min.js"></script>
    <script type="text/javascript" src="/node_modules/angular/angular-sanitize.min.js"></script>

    <script type="text/javascript" src="/node_modules/cldrjs/dist/cldr.min.js"></script>
    <script type="text/javascript" src="/node_modules/cldrjs/dist/cldr/event.min.js"></script>
    <script type="text/javascript" src="/node_modules/cldrjs/dist/cldr/supplemental.min.js"></script>
    <script type="text/javascript" src="/node_modules/globalize/dist/globalize.min.js"></script>
    <script type="text/javascript" src="/node_modules/globalize/dist/globalize/message.min.js"></script>
    <script type="text/javascript" src="/node_modules/globalize/dist/globalize/number.min.js"></script>
    <script type="text/javascript" src="/node_modules/globalize/dist/globalize/currency.min.js"></script>
    <script type="text/javascript" src="/node_modules/globalize/dist/globalize/date.min.js"></script>

    <script type="text/javascript" src="/node_modules/devextreme/dist/js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="/node_modules/devextreme/dist/js/dx.viz-web.js"></script> -->
    <!-- <script type="text/javascript" src="/node_modules/devextreme/dist/js/dx.viz.js"></script> -->


#####See Also#####
- [npm Documentation](https://docs.npmjs.com) - solves any difficulties you may encounter working with npm.
- [Modularity](/concepts/Common/30%20Modularity '/Documentation/Guide/Common/Modularity/') - shows how you can create your own DevExtreme module that includes only what you need.