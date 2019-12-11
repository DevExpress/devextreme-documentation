To extend the built-in Icon Library, add the [dx-icon-...](/api-reference/10%20UI%20Widgets/zz%20CSS%20Classes/dx-icon-IconName.md '/Documentation/ApiReference/UI_Widgets/CSS_Classes/#dx-icon-IconName') CSS class to your CSS file that is used in your application. Set the icon name as the third part of the class name. For instance, the following class will be used to display the *myicon* icon.

    <!--CSS-->.dx-icon-myicon
    {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAQAAAACj/
        OVAAAARElEQVRYw+3WKQ4AIAADMPb/R4PHIDgTOr/ULUstZxPgfbAvBAgEAoFAIPAhcPebChAIHIKmDQgEAoFA4E/
        g7JcCrk4DW5xoAVzaKL0AAAAASUVORK5CYII=) 0 0 no-repeat;
    }

When an icon is set in this way, it can be applied to DevExtreme widgets and commands in the same way as a built-in icon. This means that you can use the **icon** widget option, setting the name of your icon to it.

    <!--HTML--><div class="button" data-bind="dxButton: { text: 'Click me', icon: 'myicon' }"></div>
 
[note]We recommend that you use the **Base64** type for icons when using them for DevExtreme widgets in this way to reduce the number of requests and the amount of data transferred. You can use any "image to data URI" converter to generate a base64 URL.

You can set a specific icon variant for different themes. In this instance, add the **dx-icon-...** class under the **dx-theme-...** CSS class where the latter defines one of the themes supplied with DevExtreme.

    <!--CSS-->.dx-theme-android5 .dx-icon-myicon
    {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAQAAAACj/
        OVAAAARElEQVRYw+3WKQ4AIAADMPb/R4PHIDgTOr/ULUstZxPgfbAvBAgEAoFAIPAhcPebChAIHIKmDQgEAoFA4E/
        g7JcCrk4DW5xoAVzaKL0AAAAASUVORK5CYII=);
    }
    .dx-theme-ios7 .dx-icon-myicon
    {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAQAAABtnpmgAAAAZUlE
        QVRo3u3SsQkAIAwEQDOw0ziwFhZiY6OixX0VCDwXSNT0ZwIMDAwMDAwMDAwMDAzsJKyMsVfFvM9gYGBgYGBgYCvG1h0
        5wL6BeX4wMDAwMDCw27BbAQMDAwMDAwMDAwMDe5IGFJGKAcyLcs4AAAAASUVORK5CYII=);
    }    

In addition, consider providing a specific icon variant for different states of a widget (widget item). The following example shows how to provide an icon for a selected tab.

    <!--CSS-->.dx-theme-ios7 .dx-tab-selected .dx-icon-myicon
    {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAQAAAACj/OVAAAAQElEQVRYw+3XsQ0AIAwDMPL/
        0TD0BEQ74OyRl0pVsldvAgQCgcAxsGoBAoFA4Pfg3ecK0JUCgUAg0CAFAoHAdzlK5VcBsySXawAAAABJRU5ErkJggg==);
    }

To see more examples of DevExtreme-specific CSS classes, research the style sheets that come with the product.

**Requirements to icon images**

To make UI widgets display your icons correctly, the icon images should satisfy the following requirements.

- **format**  
PNG-24 with alpha channel

- **resolution**  
56x56 px, except for icons displayed on **NavBar** items in the iOs platform, which should be 76x76 px with 10 px transparent padding on each side. Thus, the image size without padding is 56x56 px.