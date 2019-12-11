DevExtreme requires jQuery. Currently, jQuery version 2.1 - 2.2 and 3.x is supported.

Certain DevExtreme functionality also requires [Globalize](https://github.com/jquery/globalize/releases) library to be referenced if your application should support the following functionality.

1. Non-English locales
2. Custom message dictionaries
3. Non-USD currency [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')
4. Custom date and number [formatting](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/')

The currently supported version of Globalize is version 1.x. 

 To learn more about how to use the globalize library, refer the [Localization](/concepts/05%20Widgets/zz%20Common/05%20UI%20Widgets/11%20Localization%20-%20Use%20Globalize '/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/') topic.

You can also load these libraries from a Content Delivery Network (CDN).

    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-3.1.0.min.js"></script>

<!---->

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr/event.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/cldrjs/0.4.5/cldr/supplemental.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.1.1/globalize.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.1.1/globalize/message.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.1.1/globalize/number.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.1.1/globalize/currency.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/globalize/1.1.1/globalize/date.js"></script>