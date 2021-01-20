DevExtreme has five drop-down editors:

- [SelectBox](/Documentation/ApiReference/UI_Components/dxSelectBox/)
- [TagBox](/Documentation/ApiReference/UI_Components/dxTagBox/)
- [Lookup](/Documentation/ApiReference/UI_Components/dxLookup/)
- [Autocomplete](/Documentation/ApiReference/UI_Components/dxAutocomplete/)
- [DropDownBox](/Documentation/ApiReference/UI_Components/dxDropDownBox/)

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
        <td><a href="/Documentation/Guide/UI_Components/SelectBox/Create_a_User-Defined_Item/">Yes</a></td>
        <td><a href="/Documentation/Guide/UI_Components/TagBox/Create_a_User-Defined_Item/">Yes</a></td>
        <td>-</td>
        <td>Yes</td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#acceptCustomValue">Yes</a></td>
    </tr>
    <tr>
        <td>Custom buttons</td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/buttons/">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/buttons/">Yes</a></td>
        <td>-</td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/buttons/">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/buttons/">Yes</a></td>
    </tr>
    <tr>
        <td>Keyboard navigation</td>
        <td><a href="/Documentation/Guide/UI_Components/SelectBox/Keyboard_Support/">Yes</a></td>
        <td><a href="/Documentation/Guide/UI_Components/TagBox/Keyboard_Support/">Yes</a></td>
        <td><a href="/Documentation/Guide/UI_Components/Lookup/Keyboard_Support/">Yes</a></td>
        <td>Yes</td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Search box in drop down</td>
        <td>-</td>
        <td>-</td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#searchEnabled">Yes</a></td>
        <td>-</td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Display groups</td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#grouped">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#grouped">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#grouped">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#grouped">Yes</a></td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Search based on user input</td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#minSearchLength">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#minSearchLength">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxLookup/Configuration/#minSearchLength">Yes</a></td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#minSearchLength">Yes</a></td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Multiple selection</td>
        <td>-</td>
        <td><a href="/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showSelectionControls">Yes</a></td>
        <td>-</td>
        <td>-</td>
        <td>Requires custom configuration</td>
    </tr>
    <tr>
        <td>Paging</td>
        <td><a href="/Documentation/Guide/UI_Components/SelectBox/Enable_Paging/">Yes</a></td>
        <td><a href="/Documentation/Guide/UI_Components/TagBox/Enable_Paging/">Yes</a></td>
        <td><a href="/Documentation/Guide/UI_Components/Lookup/Enable_Paging/">Yes</a></td>
        <td>-</td>
        <td>Requires custom configuration</a></td>
    </tr>
</table>

Drop-Down Box has a flexible API that allows you to implement multiple features, including the following (see [dropDownOptions](/Documentation/ApiReference/UI_Components/dxDropDownBox/Configuration/#dropDownOptions)):

- Custom drop-down field
- Multiple columns in the drop-down field
- Group paging

Refer to the [guides](/Documentation/Guide/UI_Components/DropDownBox/Overview/) section for the drop-down box to see more available customizations. 

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/",
    name: "Drop-Down Box - Single Selection"
} 
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/MultipleSelection/",
    name: "Drop-Down Box - Multiple Selection"
}

#####See Also#####
- [Lookup vs SelectBox](/Documentation/Guide/UI_Components/Lookup/Lookup_vs_SelectBox/)