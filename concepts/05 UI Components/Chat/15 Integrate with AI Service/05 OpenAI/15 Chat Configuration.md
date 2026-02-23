To synchronize Chat and OpenAI, declare the `processMessageSending()` function. This function configures [typingUsers](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/typingUsers.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers'), pushes the assistant message to the store, and renders the message.

---

##### jQuery

    <!-- tab: index.js -->
    async function processMessageSending() {
        toggleDisabledState(true);
        instance.option({ typingUsers: [assistant] });
        try {
            const aiResponse = await getAIResponse(messages);
            setTimeout(() => {
                instance.option({ typingUsers: [] });
                messages.push({ role: 'assistant', content: aiResponse });
                renderMessage(aiResponse);
            }, 200);
        } catch {
            instance.option({ typingUsers: [] });
            alertLimitReached();
        } finally {
            toggleDisabledState(false);
        }
    }

##### Angular

    <!--TypeScript-->
    async processMessageSending() {
        this.toggleDisabledState(true);
        this.typingUsersSubject.next([this.assistant]);
        try {
            const aiResponse = await this.getAIResponse(this.messages);
            setTimeout(() => {
                this.typingUsersSubject.next([]);
                this.messages.push({ role: "assistant", content: aiResponse ?? "" });
                this.renderAssistantMessage(aiResponse ?? "");
            }, 200);
        } catch {
            this.typingUsersSubject.next([]);
            this.alertLimitReached();
        } finally {
            this.toggleDisabledState(false);
        }
    }

##### Vue

    <!--TypeScript-->
    const processMessageSending = async() => {
        toggleDisabledState(true);
        typingUsers.value = [assistant];
        try {
            const aiResponse = await getAIResponse(messages.value);
            setTimeout(() => {
                typingUsers.value = [];
                messages.value.push({ role: 'assistant', content: aiResponse ?? '' });
                renderAssistantMessage(aiResponse ?? '');
            }, 200);
        } catch {
            typingUsers.value = [];
            alertLimitReached();
        } finally {
            toggleDisabledState(false);
        }
    };

##### React

    <!--TypeScript-->
     async processMessageSending(): Promise<void> {
        this.toggleDisabledState(true);
        this.typingUsersSubject.next([this.assistant]);
        try {
            const aiResponse = await this.getAIResponse(this.messages);
            setTimeout(() => {
                this.typingUsersSubject.next([]);
                this.messages.push({ role: 'assistant', content: aiResponse ?? '' });
                this.renderAssistantMessage(aiResponse ?? '');
            }, 200);
        } catch {
            this.typingUsersSubject.next([]);
            this.alertLimitReached();
        } finally {
            this.toggleDisabledState(false);
        }
    }

---

Call `processMessageSending()` after a user message is sent in the [onMessageEntered](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/onMessageEntered.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#onMessageEntered') event handler:

---

##### jQuery

    <!-- tab: index.js -->
    const instance = $('#dx-ai-chat').dxChat({
        // ...
        dataSource: customStore,
        reloadOnChange: false,
        onMessageEntered: (e) => {
            const { message } = e;
            customStore.push([{ type: 'insert', data: { id: Date.now(), ...message } }]);
            messages.push({ role: 'user', content: message.text });
            processMessageSending();
        }
    }).dxChat('instance');

##### Angular

    <!--TypeScript-->
     async onMessageEntered({ message, event }: MessageEnteredEvent) {
        this.dataSource
        ?.store()
        .push([{ type: "insert", data: { id: Date.now(), ...message } }]);

        this.messages.push({ role: "user", content: message?.text ?? "" });
        this.processMessageSending();
    }

##### Vue

    <!--TypeScript-->
    const onMessageEntered = async(e: MessageEnteredEvent) => {
        let { message } = e;
        dataSource.value?.store().push([{
            type: 'insert',
            data: { id: Date.now(), ...message }
        }]);

        messages.value.push({ role: 'user', content: message?.text ?? '' });
        await processMessageSending();
    };

##### React

    <!--TypeScript-->
    onMessageEntered({ message }: MessageEnteredEvent): void {
        this.dataSource
        ?.store()
        .push([{ type: 'insert', data: { id: Date.now(), ...message } }]);

        this.messages.push({ role: 'user', content: message?.text ?? '' });
        void this.processMessageSending();
    }

---
