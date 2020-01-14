The [SelectBox](/api-reference/10%20UI%20Widgets/dxSelectBox '/Documentation/ApiReference/UI_Widgets/dxSelectBox/') and [Lookup](/api-reference/10%20UI%20Widgets/dxLookup '/Documentation/ApiReference/UI_Widgets/dxLookup/') widgets implement similar functionality - both of them consist of a text field and show a collection of items in the drop-down list, but they also have differences:

- On desktop, the widgets behave in almost the same way. They consist of a text field with a drop-down list of the same width, but **Lookup** also has the search field and *'cancel'* button in this list.

- On mobile platforms, **SelectBox** represents also a text field with a drop-down list and has no significant differences. **Lookup** was intended for mobile development and designed according to mobile guidelines. **Lookup** changes its appearance - the drop-down list is replaced with a popup view that occupies most of the screen.

<div class="simple-table normal-font-style">
    <table class="tooltip-table">
        <tr>
          <th>SelectBox on any device</th>
          <th>Lookup on desktop</th>
          <th>Lookup on a mobile device</th>
        </tr>
        <tr style="background-color:transparent">
          <td><img src="/Content/images/doc/20_1/UiWidgets/selectbox-mobile-desktop.png" alt="dxSelectBox on any device" /></td>
          <td><img src="/Content/images/doc/20_1/UiWidgets/lookup-desktop.png" alt="dxLookup on desktop" style=""/></td>
          <td><img src="/Content/images/doc/20_1/UiWidgets/lookup-mobile.png" alt="dxLookup on a mobile device" /></td>
        </tr>
    </table>
</div>