DevExtreme ASP.NET MVC Controls mirror the [client-side widget options](/api-reference/10%20UI%20Widgets/dxAccordion '/Documentation/ApiReference/UI_Widgets/') with only one difference: instead of the lower camel case usual in JavaScript, control methods use the upper camel case common in .NET, for example:

<div class="simple-table" style="font-size:14px; font-style:normal; text-align:center">
  <table>
    <thead>
    <tr>
      <th>Widget Option</th>
      <th>Control Method</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="font-style:normal">dataSource</td>
      <td>DataSource</td>
    </tr>
    <tr>
      <td style="font-style:normal">tooltip</td>
      <td>Tooltip</td>
    </tr>
    <tr>
      <td style="font-style:normal">showColumnHeaders</td>
      <td>ShowColumnHeaders</td>
    </tr>
    </tbody>
  </table>
</div>

Control methods are called using a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface). In Visual Studio, IntelliSense prompts you the available method names, their accepted values, and short descriptions.

![DevExtreme ASP.NET MVC Controls - InstelliSense](/images/Common/MvcWrappers/fluent-interface.png)