const firstUser = {
    id: "1",
    name: "User"
};

const secondUser = {
    id: "2",
    name: "ChatBack",
    avatarUrl: "./images/Chat/bot.png"
};

const initialMessages = [{
    timestamp: Date.now(),
    author: secondUser,
    text: `Hello! We'd love to hear your feedback. Please share your thoughts below!`
}];

const alert = [{
    id: 1,
    message: "You have been disconnected"
}];

$(() => {
    function sendToBackend() {
        chat.option("typingUsers", [secondUser]);
        setTimeout(() => {
            chat.option("typingUsers", []);
            chat.renderMessage({
                text: "Thanks for helping us improve!",
                author: secondUser,
                timestamp: Date.now()
            });
        }, 1000);
        setTimeout(() => {
            chat.option("alerts", alert);
            chat.option("disabled", true);
        }, 3000);
    }

    const chat = $("#chat")
        .dxChat({
            width: 400,
            height: 450,
            user: firstUser,
            onMessageEntered: ({ component, message }) => {
                component.renderMessage(message);
                sendToBackend();
            },
            items: initialMessages
        })
        .dxChat("instance");
});
