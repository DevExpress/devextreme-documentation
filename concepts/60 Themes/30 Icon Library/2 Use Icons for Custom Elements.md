You can also apply icons from the library to custom elements in your application. For this purpose, apply the [dx-icon-...](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-icon-IconName.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-icon-IconName') CSS class to the required element.

[note]Since DevExtreme built-in icons are supplied as an icon font, you can specify their size and color using the **font-size** and **color** css attributes respectively.

    <!--CSS-->
    .icon {
        font-size: 28px;
        color: #aaa;
    }

<!---->

    <!--HTML--><a href="#index"><span class="dx-icon-home icon"></span> Home</a>