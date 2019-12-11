If you need to create a form that has an advanced layout containing groups and tabbed pages, or you need to create items only for certain fields of the data object, you should define form items manually. For this purpose, assign an array of item configuration objects to the [items](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration/items.md '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#items') option of the form.

The structure of an item configuration object depends on the item type. The **Form** widget supports the following item types.

- [Simple](/api-reference/10%20UI%20Widgets/dxForm/5%20Simple%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Simple_Item/')  
 A standard item consisting of a label and an editor widget used to specify a value of the associated data field.

- [Empty](/api-reference/10%20UI%20Widgets/dxForm/8%20Empty%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Empty_Item/')  
 An empty item used to add a space between neighboring items.

- [Group](/api-reference/10%20UI%20Widgets/dxForm/6%20Group%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Group_Item/')  
 An item representing a container of another form items.

- [Tabbed](/api-reference/10%20UI%20Widgets/dxForm/7%20Tabbed%20Item '/Documentation/ApiReference/UI_Widgets/dxForm/Tabbed_Item/')  
 An item representing a tabbed container of other form items.

The type of an item is defined by the **type** configuration option of this item. By default, the item type is **Simple**.

In addition to the itemType option, each form item supports the following configuration options regardless of the item type.

- **colSpan**  
 Specifies the number of columns spanned by the item.

- **cssClass**  
 Specifies a CSS class to be applied to the form item.

- **visible**  
 Specifies whether or not the item is displayed on a form.

- **visibleIndex**  
 Specifies the sequence number of the item in a form, group or tab.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-form-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>