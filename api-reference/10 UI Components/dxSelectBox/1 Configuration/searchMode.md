This property changes how users search SelectBox items and controls the component's auto-fill functionality. The following values are available for **searchMode**:

- *'contains'*    
Searches items that **contain** the typed text. SelectBox does not activate autofill.

- *'startswith'*    
Searches items that **start with** the typed text. SelectBox autofills the input with the first matched item if [acceptCustomValue](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#acceptCustomValue) is `false` (default). If **acceptCustomValue** is `true`, the component does not activate autofill.

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/SearchAndEditing/"
}