---
id: dxAccordionItem.titleTemplate
type: template
---
---
##### shortDescription
Specifies a template that should be used to render the title for this item only.

##### return: String | Element | jQuery
A template name or container.

---
The following types of the specified value are available:

- Assign a string containing the name of the required [template](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/').
- Assign a jQuery object of the template's container.
- Assign a DOM Node of the template's container.
- Assign a function that returns the jQuery object or a DOM Node of the template's container.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#accordion").dxAccordion({
            // ...
           items: [
            {
                titleTemplate: () => $('<b>').text('First item title')
            }],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-accordion ... >
        <dxi-item titleTemplate="firstItemTemplate">
            Item content
        </dxi-item>
        <div *dxTemplate="let data of 'firstItemTemplate'">
            <b>First item title</b>
        </div>
    </dx-accordion>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxAccordion ... >
            <DxItem titleTemplate='firstItemTitleTemplate'>
                Item content
            </DxItem>
            <template #firstItemTitleTemplate>
                <b>First item template</b>
            </template>
        </DxAccordion> 
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    function App() {
        return (
            <Accordion ... >
                <Item 
                    titleRender={() => (<b>First item title</b>)}
                >
                    Item content
                </Item>
            </Accordion>
        ); 
    }

    export default App;

--- 