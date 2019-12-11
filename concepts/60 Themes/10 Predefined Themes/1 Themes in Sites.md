In this topic, you will learn how to use predefined themes in websites that are built using DevExtreme UI widgets.

Add the following links to the main page of your site.

	<!--HTML--><link rel="stylesheet" type="text/css" href="css/dx.common.css" />
	<link rel="stylesheet" type="text/css" href="css/dx.light.css" />
	<!--link rel="stylesheet" type="text/css" href="css/dx.dark.css" /-->


[note]Add a link to the *dx.common.css* file before referencing the required theme. The *dx.common.css* file contains a set of common CSS classes that are not related to the currently applied theme.

If you need to have links to both the "light" and "dark" themes, replace the classic <link rel="stylesheet"> tag with the DevExtreme custom "dx-theme" tag.

	<!--HTML--><link rel="stylesheet" type="text/css" href="css/dx.common.css" />
	<link rel="dx-theme" data-theme="generic.light" href="css/dx.light.css" data-active="true" />
	<link rel="dx-theme" data-theme="generic.dark" href="css/dx.dark.css" data-active="false" />

[note]The "dx-theme" links must go before DevExtreme scripts in order to process themes in the early stages of initialization. If "dx-theme" links are found afterwards, an error will occur.

Since the "light" and "dark" themes are alternates (to each other), one of them must be set as an active one (see the **data-active** attribute within the links). But you can allow end users to change to the desired theme at runtime. For this purpose, use the [ui.themes.current](/api-reference/50%20Common/utils/ui/themes/3%20Methods/current(themeName).md '/Documentation/ApiReference/Common/Utils/ui/themes/Methods/#currentthemeName') method.

	<!--JavaScript-->DevExpress.ui.themes.current('generic.light');  //Generic Light theme
	//DevExpress.ui.themes.current('generic.dark');  //Generic Dark theme 