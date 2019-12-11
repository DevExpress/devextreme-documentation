Open the view with controls to localize, add a `<script>` tag to the bottom, and call the **Globalize.locale** method to set the current locale.

    <!--Razor C#-->
    <script>
        Globalize.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

    <!--Razor VB-->
    <script>
        Globalize.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingGlobalize/Mvc/Light/"
}
