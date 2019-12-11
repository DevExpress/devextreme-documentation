Open the view with controls to localize, add a `<script>` tag to the bottom, and call the **DevExpress.localization.locale** method to set the current locale.

    <!--Razor C#-->
    <script>
        DevExpress.localization.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

    <!--Razor VB-->
    <script>
        DevExpress.localization.locale(navigator.languages && navigator.languages[0] ||
            navigator.language ||
            navigator.userLanguage);
    </script>

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Localization/UsingIntl/Mvc/Light/"
}
