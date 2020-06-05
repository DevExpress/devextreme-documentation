---
id: dxTextEditor.Options.mask
type: String
default: ''
---
---
##### shortDescription
The editor mask that specifies the custom format of the entered string.

---
A mask can contain the following elements.

<table class="dx-table">
    <tr>
        <th>Masking Element</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>0</td>
        <td>A digit.</td>
    </tr>
    <tr>
        <td>9</td>
        <td>A digit or a space.</td>
    </tr>
    <tr>
        <td>&#35;</td>
        <td>A digit, a space, "+" or "-" sign.</td>
    </tr>
    <tr>
        <td>L</td>
        <td>A literal.</td>
    </tr>
    <tr>
        <td>C</td>
        <td>Any character except space.</td>
    </tr>
    <tr>
        <td>c</td>
        <td>Any character.</td>
    </tr>
    <tr>
        <td>A</td>
        <td>An alphanumeric.</td>
    </tr>
    <tr>
        <td>a</td>
        <td>An alphanumeric or a space.</td>
    </tr>
</table>

[note] To escape the masking elements, use the double backslash character (\\\). For example, *"000.\\\0\\\0"*.