DevExtreme has five drop-down editors:

- [SelectBox](/Documentation/ApiReference/UI_Widgets/dxSelectBox/)
- [TagBox](/Documentation/ApiReference/UI_Widgets/dxTagBox/)
- [Lookup](/Documentation/ApiReference/UI_Widgets/dxLookup/)
- [Autocomplete](/Documentation/ApiReference/UI_Widgets/dxAutocomplete/)
- [DropDownBox](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/)

The following table lists available drop-down editor features:

<table class="dx-table full-width">
    <tr>
        <th></th>
        <th>SelectBox</th>
        <th>TagBox</th>
        <th>Lookup</th>
        <th>Autocomplete</th>
        <th>DropDownBox</th>
    </tr>
    <tr>
        <td>Accept custom values</td>
        <td><a href="/Documentation/Guide/Widgets/SelectBox/Create_a_User-Defined_Item/">Yes</a></td>
        <td><a href="/Documentation/Guide/Widgets/TagBox/Create_a_User-Defined_Item/">Yes</a></td>
        <td>-</td>
        <td>Yes</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#acceptCustomValue">Yes</a></td>
    </tr>
    <tr>
        <td>Custom buttons</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/buttons/">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/buttons/">Yes</a></td>
        <td>-</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/buttons/">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/buttons/">Yes</a></td>
    </tr>
    <tr>
        <td>Keyboard navigation</td>
        <td><a href="/Documentation/Guide/Widgets/SelectBox/Keyboard_Support/">Yes</a></td>
        <td><a href="/Documentation/Guide/Widgets/TagBox/Keyboard_Support/">Yes</a></td>
        <td><a href="/Documentation/Guide/Widgets/Lookup/Keyboard_Support/">Yes</a></td>
        <td>Yes</td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Search box in drop down</td>
        <td>-</td>
        <td>-</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#searchEnabled">Yes</a></td>
        <td>-</td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Display groups</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#grouped">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#grouped">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#grouped">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#grouped">Yes</a></td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Search based on user input</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#minSearchLength">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#minSearchLength">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#minSearchLength">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxAutocomplete/Configuration/#minSearchLength">Yes</a></td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Multiple selection</td>
        <td>-</td>
        <td><a href="/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#showSelectionControls">Yes</a></td>
        <td>-</td>
        <td>-</td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Paging</td>
        <td><a href="/Documentation/Guide/Widgets/SelectBox/Enable_Paging/">Yes</a></td>
        <td><a href="/Documentation/Guide/Widgets/TagBox/Enable_Paging/">Yes</a></td>
        <td><a href="/Documentation/Guide/Widgets/Lookup/Enable_Paging/">Yes</a></td>
        <td>-</td>
        <td>Requires custom configuration</a></td>
    </tr>
</table>

Drop-Down Box has a flexible API that allows you to implement multiple features, including the following (see [dropDownOptions](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dropDownOptions)):

- Custom drop-down field
- Multiple columns in the drop-down field
- Group paging

Refer to the [guides](/Documentation/Guide/Widgets/DropDownBox/Overview/) section for the drop-down box to see more available customizations. 

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/",
    name: "Drop-Down Box - Single Selection"
} 
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/MultipleSelection/",
    name: "Drop-Down Box - Multiple Selection"
}

#####See Also#####
- [Lookup vs SelectBox](/Documentation/Guide/Widgets/Lookup/Lookup_vs_SelectBox/)