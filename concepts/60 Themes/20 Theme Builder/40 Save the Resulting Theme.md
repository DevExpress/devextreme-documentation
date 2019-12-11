Select **Save CSS** from the **Export** menu to save a CSS file with the resulting theme.

![DevExtreme HTML5 JavaScript Theme Builder Import Metadata](/images/PhoneJS/save_css_button.png)

Link this theme to your project after `dx.common.css` but before the DevExtreme script:

    <!--HTML-->
    <head>
        <link rel="stylesheet" type="text/css" href="css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="css/dx.mycustomtheme.css" />
        <script type="text/javascript" src="js/dx.all.js"></script>
    </head>

[note] Predefined themes are periodically updated and improved. We recommend saving your custom theme's metadata to avoid possible difficulties when upgrading to the latest release. Refer to the [Postpone Customization](/concepts/60%20Themes/20%20Theme%20Builder/30%20Postpone%20Customization.md '/Documentation/Guide/Themes/Theme_Builder/#Postpone_Customization') topic for more details.
