A user can use the following keys to interact with the Stepper component: 

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>Arrow Keys <br> PageUp, PageDown</td>
        <td>Moves focus between steps. Focused steps are automatically selected if <a href="/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectOnFocus">selectOnFocus</a> is <code>true</code>.</td>
    </tr>
    <tr>
        <td>Home, End</td>
        <td>Moves focus to the first step and last step when <a href="/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#linear">linear</a> is set to <code>false</code>. When <b>linear</b> is set to <code>true</code>, acts like the arrow keys.</td>
    </tr>
    <tr>
        <td>Enter or Space</td>
        <td>Selects a step if <b>selectOnFocus</b> is set to <code>false</code>.</td>
    </tr>
</table>

#include common-code-register-key-handler