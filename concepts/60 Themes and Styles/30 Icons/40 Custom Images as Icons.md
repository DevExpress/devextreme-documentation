Assign an image URL to the **icon** property of a DevExtreme UI component to implement a custom icon. You can also encode images in Base64 format to avoid additional HTTP requests at the cost of increased file sizes in your project.

You can assign Base64 code directly to a component's **icon** property or integrate it into a CSS style. We recommend the latter approach because of the Base64 string length.

The following code snippet demonstrates how you can specify Base64 images in CSS. Replace "customicon" in the `.dx-icon-customicon` selector with the value you assign to component **icon** properties:

---
##### jQuery

    <!--CSS-->
    .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE IS HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

##### Angular

    <!--CSS-->
    ::ng-deep .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE IS HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

##### Vue

    <!--CSS-->
    .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE IS HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

##### React

    <!--CSS-->
    .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE IS HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

---

You can define specific icons for different UI component states. The following code snippet specifies a unique icon for selected tabs:

    <!--CSS-->
    .dx-tab-selected .dx-icon-customicon {
        background-image: url(data:image/png;base64,... LONG BASE64 CODE GOES HERE ...);
        background-repeat: no-repeat;
        background-position: 0px 0px;
    }

[note] Classes like `dx-tab-selected` are not documented. [Inspect CSS rules](/concepts/80%20Troubleshooting/00%20Basics/15%20Examine%20CSS.md '/Documentation/Guide/Troubleshooting/Basics/#Examine_CSS') to determine which selectors you need to use.
