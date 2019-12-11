Add the required DevExtreme localization files to your project. Add links to these files within the main page of your application.

Take a look below for an example of links in code. 

    <!--HTML-->
    <script type="text/javascript" src="js/cldr.js"></script>
    <script type="text/javascript" src="js/cldr/event.js"></script>
    <script type="text/javascript" src="js/cldr/supplemental.js"></script>
    <script type="text/javascript" src="js/globalize.js"></script>
    <script type="text/javascript" src="js/globalize/message.js"></script>
    <script type="text/javascript" src="js/globalize/number.js"></script>
    <script type="text/javascript" src="js/globalize/currency.js"></script>
    <script type="text/javascript" src="js/globalize/date.js"></script>
    <script type="text/javascript" src="js/dx.mobile.js"></script>
    <script type="text/javascript" src="js/localization/dx.mobile.de.js"></script>
    <script type="text/javascript" src="js/localization/dx.mobile.ja.js"></script>
    <script type="text/javascript" src="js/localization/dx.mobile.ru.js"></script>

For information on dependencies between Globalize modules, refer to the [Dependencies](https://github.com/jquery/globalize#1-dependencies) section of Globalize documentation.

[note]Dictionary scripts must be linked in the same order as presented in the example above. DevExtreme scripts must be linked above dictionary scripts.

Also, you need to load the required CLDR data. Refer to the [Globalize documentation](https://github.com/jquery/globalize/blob/master/doc/cldr.md) to learn how to load CLDR data to Globalize. For example, you can load it using AJAX requests to load the required CLDR data.

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

You can download this data (stored in .json files) from the [Unicode-CLDR repository](https://github.com/unicode-cldr).

To learn which .json data is required by each Globalize module, refer to the [CLDR content](https://github.com/jquery/globalize#2-cldr-content) section of Globalize documentation.