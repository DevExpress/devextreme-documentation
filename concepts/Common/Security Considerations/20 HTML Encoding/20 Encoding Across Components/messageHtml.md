[DevExtreme Dialog UI methods](/api-reference/50%20Common/utils/ui/dialog/alert(messageHtml_title).md '/Documentation/ApiReference/Common/Utils/ui/dialog/#alertmessageHtml_title') accept an unencoded HTML string as a dialog message. Encode this string in the following manner:


    <!-- tab: JavaScript -->
    $(function() {
        // Use your favorite sanitizing tool to encode the `message` string:
        const message = "Are you sure?<script>alert('XSS')</script>";
        DevExpress.ui.dialog.confirm(message, "Confirm changes");
    });

This code produces the following output:

![DevExtreme Dialog: An Encoded String](/images/UiWidgets/dialog-encoded-string.png)
