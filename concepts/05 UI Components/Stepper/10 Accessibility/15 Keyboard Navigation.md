A user can use the following keys to interact with the Stepper component: 

<table class="dx-table">
    <tr>
        <th>Key</th>
        <th>Action</th>
    </tr>
    <tr>
        <td>&larr; &rarr; &uarr; &darr; <br> Home, End <br> PageUp, PageDown</td>
        <td>Moves focus between steps. Focused steps are automatically selected if <a href="/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectOnFocus">selectOnFocus</a> is <code>true</code>.</td>
    </tr>
    <tr>
        <td>Enter or Space</td>
        <td>Selects a step if <b>selectOnFocus</b> is set to <code>false</code>.</td>
    </tr>
</table>

#include common-code-register-key-handler