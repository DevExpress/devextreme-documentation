Open the `global.scss` file in the `src` folder and import `dx.common.css` and a [predefined theme stylesheet](/concepts/60%20Themes%20and%20Styles/05%20Predefined%20Themes/00%20Predefined%20Themes.md '/Documentation/Guide/Themes_and_Styles/Predefined_Themes/') (`dx.light.css` in the code below).

    <!-- tab: global.scss -->
    @import '~devextreme/dist/css/dx.common.css';
    @import '~devextreme/dist/css/dx.light.css';

[note] [SVG-based UI components](/concepts/60%20Themes%20and%20Styles/00%20HTML-%20and%20SVG-Based%20Widgets.md '/Documentation/Guide/Themes_and_Styles/HTML-_and_SVG-Based_UI_Components/') do not require theme stylesheets. If you choose to import the stylesheets, the UI components apply an appearance that matches them.