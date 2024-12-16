const firstUser = {
    id: "1",
    name: "User"
};

const secondUser = {
    id: "2",
    name: "Feedback Bot",
    avatarUrl: "/Content/images/doc/24_2/Chat/bot.png"
};

const initialMessages = [{
    timestamp: Date.now(),
    author: secondUser,
    text: `Hello! We'd love to hear your feedback. Please share your thoughts below!`
}];

const alert = [{
    id: 1,
    message: "Session expired"
}];

$(() => {
    function sendToBackend() {
        setTimeout(() => {
            chat.option("typingUsers", []);
            chat.renderMessage({
                text: "Thanks for helping us improve!",
                author: secondUser,
                timestamp: Date.now()
            });
            chat.option("alerts", alert);
            chat.option("disabled", true);
        }, 1000);
    }

    const chat = $("#chat")
        .dxChat({
            width: 400,
            height: 450,
            user: firstUser,
            onMessageEntered: ({ component, message }) => {
                component.renderMessage(message);
                chat.option("typingUsers", [secondUser]);
                sendToBackend();
            },
            items: initialMessages
        })
        .dxChat("instance");
});
