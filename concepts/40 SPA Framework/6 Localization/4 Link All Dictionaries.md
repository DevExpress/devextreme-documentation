Within the *index.html* file (the main page of your application), add links to the following files.

- globalize libraries  
    Libraries containing the [globalize](https://github.com/jquery/globalize) functionality, which can be found in the **Lib**/**js** folder within your [DevExtreme Package](/concepts/Common/07%20DevExtreme%20Packages '/Documentation/Guide/Common/DevExtreme_Packages/'). The list of libraries is presented below.

 - *cldr.js*  
 - *cldr/event.js*  
 - *cldr/supplemental.js*  
 - *globalize.js*  
 - *globalize/message.js*  
 - *globalize/number.js*  
 - *globalize/currency.js*  
 - *globalize/date.js*

- *dx.mobile.js* (*dx.all.js* or *dx.web.js*)  
    A [predefined dictionary](/concepts/40%20SPA%20Framework/6%20Localization/32%20Modify%20Predefined%20Dictionaries.md '/Documentation/Guide/SPA_Framework/Localization/#Modify_Predefined_Dictionaries') for the required locale.
- *localization.XX.js*  
    Your application's [dictionary](/concepts/40%20SPA%20Framework/6%20Localization/3%20Create%20App%20Dictionaries%20for%20Locales.md '/Documentation/Guide/SPA_Framework/Localization/#Create_App_Dictionaries_for_Locales') for the required locale.

Take a look below for an example of links in code. 

    <!--HTML-->
    <!--Globalize libraries-->
    <script type="text/javascript" src="/js/cldr.js"></script>
    <script type="text/javascript" src="/js/cldr/event.js"></script>
    <script type="text/javascript" src="/js/cldr/supplemental.js"></script>
    <script type="text/javascript" src="/js/globalize.js"></script>
    <script type="text/javascript" src="/js/globalize/message.js"></script>
    <script type="text/javascript" src="/js/globalize/number.js"></script>
    <script type="text/javascript" src="/js/globalize/currency.js"></script>
    <script type="text/javascript" src="/js/globalize/date.js"></script>

    <!--DevExtreme library-->
    <script type="text/javascript" src="js/dx.mobile.js"></script>

    <!--DevExtreme dictionaries-->
    <script type="text/javascript" src="js/localization/dx.mobile.de.js"></script>
    <script type="text/javascript" src="js/localization/dx.mobile.ja.js"></script>
    <script type="text/javascript" src="js/localization/dx.mobile.ru.js"></script>

    <!--Application dictionaries-->
    <script type="text/javascript" src="js/localization/localization.de.js"></script>
    <script type="text/javascript" src="js/localization/localization.ja.js"></script>
    <script type="text/javascript" src="js/localization/localization.ru.js"></script>

For the information on dependencies between Globalize modules, refer to the [Dependencies](https://github.com/jquery/globalize#1-dependencies) section of Globalize documentation.

[note]Dictionary scripts must be linked in the same order as presented in the example above. DevExtreme scripts must be linked above dictionary scripts.

Use AJAX requests to load the required CLDR data. You can download this data (stored in .json files) from the [Unicode-CLDR repository](https://github.com/unicode-cldr).

    <!--JavaScript-->
    $.when(
        $.getJSON("lib/js/cldr/main/de/ca-gregorian.json"),
        $.getJSON("lib/js/cldr/main/de/numbers.json"),
        $.getJSON("lib/js/cldr/main/de/currencies.json"),
        $.getJSON("lib/js/cldr/supplemental/likelySubtags.json"),
        $.getJSON("lib/js/cldr/supplemental/timeData.json"),
        $.getJSON("lib/js/cldr/supplemental/weekData.json"),
        $.getJSON("lib/js/cldr/supplemental/currencyData.json"),
        $.getJSON("lib/js/cldr/supplemental/numberingSystems.json")
    ).then(function () {
        //The following code converts the got results into an array
        return [].slice.apply( arguments, [0] ).map(function( result ) {
            return result[ 0 ];
        });
    }).then(
        Globalize.load //loads data held in each array item to Globalize
    ).then(function(){
        //initialize your application here
    })

To learn which .json data is required by each Globalize module, refer to the [CLDR content](https://github.com/jquery/globalize#2-cldr-content) section of Globalize documentation.