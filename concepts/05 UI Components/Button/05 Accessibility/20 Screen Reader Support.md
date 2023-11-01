The Button component supports screen readers and complies to <a href="https://www.w3.org/WAI/standards-guidelines/aria/" target="_blank">WAI-ARIA</a> standards.

The Button aria-label depends on the properties that you use. If you specify the [text](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#text) property, its value is copied to aria-label. If you do not specify text, but set the [icon](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#icon) property, the icon can affect aria-label, depending on the value:

- SVG    
The content of the `title` tag is copied to aria-label.

- DevExtreme icon, font icon    
The icon name is copied to aria-label.

- Path to the icon file    
The file name is copied to aria-label.

In other cases, use [elementAttr](/Documentation/ApiReference/UI_Components/dxButton/Configuration/#elementAttr) to specify the aria-label directly.