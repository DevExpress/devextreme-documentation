Use the following patterns in zoneless applications:

<table class="dx-table">
    <tr>
        <th>Scenario</th>
        <th>Recommendation</th>
    </tr>
    <tr>
        <td>Display data that a component changes</td>
        <td>Use two-way binding to a signal, for example, <code>[(value)]="value"</code>.</td>
    </tr>
    <tr>
        <td>Respond to component events</td>
        <td>Use event bindings in templates or subscribe to outputs in code.</td>
    </tr>
    <tr>
        <td>Change data in asynchronous code or callback functions</td>
        <td>Store the data in signals or call <code>markForCheck()</code>.</td>
    </tr>
    <tr>
        <td>Update a bound array in asynchronous code</td>
        <td>Pass a new array to the signal's <code>set()</code> or <code>update()</code> method.</td>
    </tr>
    <tr>
        <td>Refresh the view manually</td>
        <td>Call <code>markForCheck()</code>. Do not call <code>ApplicationRef.tick()</code> or <code>detectChanges()</code> in frequently called handlers.</td>
    </tr>
</table>

#####See Also#####
- [Using Angular Signals with DevExtreme](/Documentation/Guide/Angular_Components/Common_Features/Using_Angular_Signals_with_DevExtreme/)
