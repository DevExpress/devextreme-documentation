Globalize 1.x uses the CLDR library, which is based on the LDML standard. This standard has too many differences with the standard used in Globalize 0.x. The structure and the API of Globalize 1.x is absolutely new, so we have to remove Globalize 0.x integration to support Globalize 1.x. However, if you want to postpone migration to Globalize 1.X, you can use the Globalize 0.1 [Integration module](https://github.com/DevExpress/DevExtreme-Globalize-0.1).

Starting with the 16.1 release, DevExtreme applications do not require Globalize. You need to reference Globalize only if your application should support the following functionality.

1. Non-English locales
2. Custom message dictionaries
3. Non-USD currency [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')
4. Custom date and number [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')

The most valuable changed points are these.

- New method for localization scripts and data including.

    DevExtreme requires the core globalize script and 4 globalize modules (message, number, date, currency). Also, Globalize requires some cldrjs scripts. Here is a list of the required Globalize scripts.

        <!--HTML-->
        <script src="js/cldr.min.js"></script>
        <script src="js/cldr/event.min.js"></script>
        <script src="js/cldr/supplemental.min.js"></script>

        <script src="js/globalize.min.js"></script>
        <script src="js/globalize/message.min.js"></script>
        <script src="js/globalize/number.min.js"></script>
        <script src="js/globalize/currency.min.js"></script>
        <script src="js/globalize/date.min.js"></script>

- New acceptable values for the **format** option.

    - Used in Globalize 0.x, number shortcuts (like "n0", "c2") and date shortcuts (like "d", "T") are not supported anymore. Use a format object instead.  
    - Date patterns are using LDML format instead of Microsoft standard.  
    - Custom quarters formats ('q', 'qq', 'Q', 'QQ') are removed. Now quarters can be formatted in CLDR formats only.

- Currencies are no longer defined by the current locale.

    Use the [DevExpress.config(config)](/api-reference/50%20Common/utils/config(config).md '/Documentation/ApiReference/Common/utils/#configconfig') method to set the **defaultCurrency** or the **format.currency** widget's option to define currency.
