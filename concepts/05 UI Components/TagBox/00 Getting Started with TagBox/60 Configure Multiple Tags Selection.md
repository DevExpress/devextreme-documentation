Use the following properties to adapt the TagBox text field to numerous selected tags:        

- [multiline](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#multiline)     
Specifies whether to display tags on multiple line when the tags overflow the component's width.

- [maxDisplayedTags](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#maxDisplayedTags)      
Specifies the limit after which the TagBox replaces selected tags with a single multi-tag.

- [showMultiTagOnly](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showMultiTagOnly)      
Specifies whether to display the multi-tag without ordinary tags. This property is not demonstrated in this tutorial. You can see this feature in action in [this demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/).

You can add the checkboxes to be displayed alongside of the drop-down list values. To enable this feature, set the [showSelectionControls](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showSelectionControls) property to **true**. This property also adds the *"Select All"* checkbox to the list.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#TagBox").dxTagBox({
            // ...
            multiline: true,
            maxDisplayedTags: 6,
            showSelectionControls: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-TagBox ...
        [multiline]="true"
        [maxDisplayedTags]="6"
        [showSelectionControls]="true">
    </dx-TagBox>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxTagBox ...
            :multiline="true"
            :max-displayed-tags="6"
            :show-selection-controls="true"
        />
    </template>

    <script>
        // ...
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    function App() {
        // ...
        return (
            <TagBox ...
                multiline={true}
                maxDisplayedTags={6}
                showSelectionControls={true}
            />
        );   
    }

    export default App;
    
---


You can also use [applyValueMode](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#applyValueMode) to specify whether to apply values instantly or when users click the *"OK"* button. The [hideSelectedItems](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#hideSelectedItems) property removes the already selected items from the drop-down list. These properties are not demonstrated in this tutorial.

You have configured basic TagBox features. To take a more detailed look at this UI component, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/Overview)
* [API Reference](/Documentation/ApiReference/UI_Components/dxTagBox/)