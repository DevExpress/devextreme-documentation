---
##### jQuery

### jQuery 4 Beta Support

jQuery v4.0.0 beta 2 [was just released](https://blog.jquery.com/2024/07/17/second-beta-of-jquery-4-0-0/). We've tested this new framework against our UI components and found no significant issues.

If you are considering jQuery v4.0.0 for a current/upcoming project, feel free to share your jQuery-specific thoughts/experiences with us.

##### Angular

### Service for Popup Open Operations

Previously, to define a Popup, it was necessary to add the Popup to markup and define a template for its content:

    <dx-popup 
        title="Popup Title" 
        [(visible)]="isPopupVisible" 
    > 
        <div *dxTemplate="let data of 'content'"> 
            <p>Popup content</p> 
        </div> 
    </dx-popup>

The `visible` property controlled Popup visibility.

The use of [services](https://angular.dev/tutorials/first-app/09-services) that display popups is a common practice in Angular libraries. DevExtreme Popup component now includes `DxPopupService` which allows you to open a Popup and initialize its content using an `open` method. The `open` method accepts a component to be displayed and Popup options.

    import { DxPopupService } from "devextreme-angular/ui/popup"; 
    // ... 
    constructor(private popupService: DxPopupService) 
    // ... 
    this.popupRef = popupService.open(ContentComponent, { showCloseButton: true });

You can access the Popup instance through `DxPopupServiceComponent`. Call the `hide()` method to close the Popup programmatically:

    popupRef: DxPopupServiceComponent;  
    this.popupRef.instance.hide();

#include common-readguidesbutton with {
    url: "/Documentation/Guide/UI_Components/Popup/Show_and_Hide_the_Popup/#Using_DxPopupService"
}
#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/devbox/devextreme-v24-2-beta-service-for-popup-opening-vhmdkx?file=%2Fsrc%2Fapp%2Fapp.component.ts"
}

### New Configuration Components

If you've used `devextreme-angular` in the past, you are familiar with our configuration components (they have a `dxo-` or `dxi-` prefixes).

Our goal is to augment these components with updated TypeScript definitions. Changing them, however, would affect existing projects. Thus, in v24.2, we launched a new set of devextreme-angular configuration components (these can be used independently).

You can access these new components by appending the parent component's name after the prefix. For example, `dxo-editing` in DataGrid becomes `dxo-data-grid-editing`, and `dxi-column` changes to `dxi-data-grid-column`, etc.

This "named set" improves usage as follows:

- Each configuration component now displays properties related to its specific parent component only.

![editorType in form-item displays only relevant editors](/images/whats-new/24-2-js-angular-new-components-properties@2x.png)

- Property values for each configuration component are strictly typed.

![Intellisense hints for property values in the new components](/images/whats-new/24-2-js-angular-new-components-empty-value@2x.png)

[note] You can either use new collection items (`dxi-` prefix) or the previous in a single parent component, but not both. This limitation does not apply to options (`dxo-` prefix).

### Angular 19 Support

Angular 19 was recently [released](https://blog.angular.dev/meet-angular-v19-7b29dfd05b84). We've tested the [19.0.0 version](https://github.com/angular/angular/releases/tag/19.0.0) against our UI components and found no issues.

If you are considering Angular 19 for a current/upcoming project, feel free to share your Angular-specific thoughts/experiences with us.

##### Vue

### Support TypeScript IDE Assistance

DevExtreme Vue component props fully support types. Our components also support TypeScript IDE assistance (IntelliSense) for Vue-based projects.

![IntelliSense hinting for property value in Vue project](/images/whats-new/24-2-js-vue-ide@2x.png)

##### React

### Custom Configuration Components
You can now extract parts of a component's configuration in a separate React component and reuse these settings across multiple DevExtreme components by simply nesting this custom component.

For example, you can wrap a DataGrid column into a custom component for reuse purposes:

    const ReadonlyColumn = (props) => {
        return (
        <Column
            allowEditing={false}
            {...props}
        />
        );
    }

    function ProductOrders() {
        return (
            <DataGrid ... >
                <ReadonlyColumn dataField="OrderId" />
                <Column dataField="Product" />
                <Column dataField="Customer" />
                <Column dataField="Region" />
                <ReadonlyColumn dataField="Price" />
            </DataGrid>
        );
    }

#include btn-open-codesandbox with {
    href: "https://codesandbox.io/p/sandbox/hz24vt?file=%2Fsrc%2FApp.tsx"
}

### React 19 Support

We've tested our UI components, [demo gallery](https://js.devexpress.com/React/Demos/WidgetsGallery/), and responsive [UI templates](https://js.devexpress.com/React/Demos/WidgetsGallery/Demo/Templates/CrmContactList/MaterialBlueLight/Compact/) with [React 19](https://react.dev/blog/2024/12/05/react-19) and found no issues.

If you are considering React 19 for a current/upcoming project, feel free to share your React-specific thoughts/experiences with us.

---