---
##### shortDescription
Use this class to add a custom icon to the style sheet used in your application.

---
The name of this class must include the real name of the icon. For instance, the "myicon" icon must be defined by the "dx-icon-myicon" class.

    <!--CSS-->.dx-icon-myicon
    {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAQAAAACj/
      OVAAAARElEQVRYw+3WKQ4AIAADMPb/R4PHIDgTOr/ULUstZxPgfbAvBAgEAoFAIPAhcPebChAIHIKmDQgEAoFA4E/
      g7JcCrk4DW5xoAVzaKL0AAAAASUVORK5CYII=);
    }

As you can see, the icon is added in the Base64 type in the code above. We recommend that you also use this type to reduce the number of requests and the amount of data transferred.

The icons that are added to the stylesheet via this class can be used for DevExtreme widgets like predefined icons from the [built-in icon library](/concepts/60%20Themes%20and%20Styles/30%20Icons/10%20Built-In%20Icon%20Library.md '/Documentation/Guide/Themes_and_Styles/Icons/#Built-In_Icon_Library').

    <!--HTML--><div class="button" data-bind="dxButton: { icon: 'myicon', text: 'Click me' }"></div>