Use the following properties to adapt the TagBox text field to multiple selected tags:        

- [multiline](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#multiline)     
Set this property to **true** to display tags on multiple lines when the tags overflow the component's width.

- [maxDisplayedTags](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#maxDisplayedTags)      
Use this property to specifiy the limit after which the TagBox replaces selected tags with a single multi-tag.

- [showMultiTagOnly](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showMultiTagOnly)      
Specifies whether to display the multi-tag without ordinary tags. This property is not demonstrated in this tutorial. Refer to the following demo to see it in action: [Tag Count Limitation](https://js.devexpress.com/Demos/WidgetsGallery/Demo/TagBox/TagCountLimitation/).

Drop-down list values can display selection checkboxes. To enable this feature, set the [showSelectionControls](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#showSelectionControls) property to **true**. This property also adds the *"Select All"* checkbox to the list.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#tagBox").dxTagBox({
            // ...
            multiline: true,
            maxDisplayedTags: 6,
            showSelectionControls: true
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-tag-box ...
        [multiline]="true"
        [maxDisplayedTags]="6"
        [showSelectionControls]="true">
    </dx-tag-box>

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


Use the [applyValueMode](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#applyValueMode) property to specify whether to apply values instantly or when users click the *"OK"* button. You can also enable the [hideSelectedItems](/Documentation/ApiReference/UI_Components/dxTagBox/Configuration/#hideSelectedItems) property if you want to remove already selected items from the drop-down list. These properties are not demonstrated in this tutorial.
