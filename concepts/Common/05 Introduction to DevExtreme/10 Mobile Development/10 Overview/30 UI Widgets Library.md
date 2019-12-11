DevExtreme includes a comprehensive library of **UI widgets** - ready-to-use UI elements rendered to a page. Typically, a widget is bound to data and provides user interactions. It is represented by an HTML element (container), JavaScript code  and CSS stylesheets. 

Here is a full list of UI widgets that are currently provided for mobile development.

<!---->

<div class="three-col">

<ul>
<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxActionSheet">ActionSheet</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxAutocomplete">Autocomplete</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxBox">Box</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxButton">Button</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxCalendar">Calendar</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxCheckBox">CheckBox</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDateBox">DateBox</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDeferRendering">DeferRendering</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxFileUploader">FileUploader</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxGallery">Gallery</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxList">List</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxLoadIndicator">LoadIndicator</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxLoadPanel">LoadPanel</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxLookup">Lookup</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxMap">Map</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxMultiView">MultiView</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxNavBar">NavBar</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxNumberBox">NumberBox</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPanorama">Panorama</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPivot">Pivot</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPopover">Popover</a></li>
 
<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPopup">Popup</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxProgressBar">ProgressBar</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxRadioGroup">RadioGroup</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxRangeSlider">RangeSlider</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxResizable">Resizable</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxResponsiveBox">ResponsiveBox</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxScrollView">ScrollView</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxSelectBox">SelectBox</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxSlideOut">SlideOut</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxSlider">Slider</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxSwitch">Switch</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxTabPanel">TabPanel</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxTabs">Tabs</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxTagBox">TagBox</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxTextArea">TextArea</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxTextBox">TextBox</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxTileView">TileView</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxToast">Toast</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxToolbar">Toolbar</a></li>

<li><a href="/Documentation/16_1/ApiReference/UI_Widgets/dxTooltip">Tooltip</a></li>

</ul>

</div>

<!---->

Each DevExtreme widget includes a [jQuery plugin](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Create_and_Configure_a_Widget'), [AngularJS directive](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Create_and_Configure_a_Widget') and [KnockoutJS binding](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/01%20Create%20and%20Configure%20a%20Widget.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Create_and_Configure_a_Widget'). This enables you to use DevExtreme widgets in any mobile application. For instance, you can choose the Knockout approach and build an application using the [DevExtreme SPA framework](/concepts/Common/05%20Introduction%20to%20DevExtreme/10%20Mobile%20Development/10%20Overview/20%20SPA%20Framework.md '/Documentation/Guide/Common/Introduction_to_DevExtreme/#Mobile_Development/Overview/SPA_Framework'), or you can utilize the AngularJS approach and build a mobile application using the [AngularJS](https://angularjs.org) framework. Regardless of the approach you choose, create and initialize the widget once, passing an object with specified configuration options.

The DevExtreme UI widgets are designed to look natural in native mobile applications or be displayed harmonically in custom mobile applications. For this purpose, several themes are supplied. These themes are represented by a set of CSS classes. You can apply an appropriate theme as is or define a custom one using the [DevExtreme Theme Builder](https://js.devexpress.com/ThemeBuilder).

The DevExtreme UI widgets are designed to look natural in native web applications on tablets or be displayed harmonically on desktop sites. For this purpose, several themes are supplied. These themes are represented by a set of CSS classes. You can apply an appropriate theme as is or define a custom one using the [Theme Builder](/concepts/60%20Themes/20%20Theme%20Builder '/Documentation/Guide/Themes/Theme_Builder/').

DevExtreme UI widgets support accessibility features.

- [WAI-ARIA support](https://www.w3.org/WAI/intro/aria.php)  
Widgets include the WAI-ARIA markup and support screen readers (tested with the NVDA screen reader).

- [High-contrast mode](/concepts/60%20Themes/10%20Predefined%20Themes '/Documentation/Guide/Themes/Predefined_Themes/')  
With the predefined high-contrast platform-agnostic theme, you can create apps/sites that are optimized for those with visual impairments.