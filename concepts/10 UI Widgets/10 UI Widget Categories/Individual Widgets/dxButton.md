<article data-show="Content/Applications/16_1/UIWidgets/dxButton/markup.html,
        Content/Applications/16_1/UIWidgets/dxButton/script.js,
        Content/Applications/16_1/UIWidgets/dxButton/styles.css">

The [Button](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') widget is a button, which executes a specified action when clicked.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsbuttonbuttonbutton/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
  
The action executed by a click should be passed to the [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') option.

    <!--JavaScript-->
    var buttonOptions = {
        onClick: function() {
            alert("The button is clicked");
        }
    }

The widget can display a text and an icon on the button. The text is specified using the [text](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/text.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#text') option. You can specify the button icon using either [icon](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/icon.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#icon') option.

You can pass the name of an existing icon from the [built-in icon library](/concepts/60%20Themes/30%20Icon%20Library '/Documentation/Guide/Themes/Icon_Library/') or a [custom icon](/concepts/60%20Themes/30%20Icon%20Library/4%20Extend%20Icon%20Library.md '/Documentation/Guide/Themes/Icon_Library/#Extend_Icon_Library') name to the **icon** option.

    <!--JavaScript-->
    var buttonOptions = {
        text: 'Click me',
        icon: 'home'
    }

The **icon** option also accepts the URL pointing to the image to be displayed on the button.

    <!--JavaScript-->
    var buttonOptions = {
        text: 'Click me',
        icon: '/images/icons/buttonIcon.png'
    }

In addition, you can specify the type of the displayed button using the [type](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/type.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#type') option, which accepts any of the following values: 'normal', 'default', 'back', 'danger', 'success'.

    <!--JavaScript-->
    var buttonOptions = {
        text: 'Return',
        type: 'back'
    }

If the button is focused, an end-user can use the **Enter** or **Space** key to perform a click.
</article>