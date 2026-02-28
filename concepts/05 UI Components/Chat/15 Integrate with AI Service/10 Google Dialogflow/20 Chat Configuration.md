To process DevExtreme Chat messages with Google Dialogflow, declare the `processMessageSending()` function. This function configures [typingUsers](/api-reference/10%20UI%20Components/dxChat/1%20Configuration/typingUsers.md '/Documentation/ApiReference/UI_Components/dxChat/Configuration/#typingUsers'), pushes the assistant message to the store, and renders the message.

---

##### jQuery

    <!--JavaScript-->
    async function processMessageSending(text, instance, customStore) {
        toggleDisabledState(true);
        instance.option({ typingUsers: [assistant] });
        try {
            const aiResponse = await getAIResponse(text);
            setTimeout(() => {
                instance.option({ typingUsers: [] });
                renderMessage(aiResponse, customStore);
            }, 200);
        } catch (error) {
            instance.option({ typingUsers: [] });
            pushAlert(error, instance);
        } finally {
            toggleDisabledState(false, instance);
        }
    }

##### Angular

    <!--TypeScript-->
    async processMessageSending(e: DxChatTypes.MessageEnteredEvent): Promise<void> {
        let { message } = e;
        this.toggleDisabledState(true, e.event);
        this.typingUsersSubject.next([this.assistant]);
        try {
            const aiResponse = await this.getAIResponse(message.text);
            setTimeout(() => {
                this.typingUsersSubject.next([]);
                this.renderAssistantMessage(aiResponse ?? '');
            }, 200);
        } catch (error) {
            this.typingUsersSubject.next([]);
            this.alertLimitReached(error);
        } finally {
            this.toggleDisabledState(false, e.event);
        }
    }

##### Vue

    <!--TypeScript-->
    const processMessageSending = async(e: DxChatTypes.MessageEnteredEvent) => {
        let { message } = e;
        toggleDisabledState(true);
        (e.event?.target as HTMLElement).blur();
        typingUsers.value = [assistant];
        try {
            const aiResponse = await getAIResponse(message.text);
            setTimeout(() => {
                typingUsers.value = [];
                renderAssistantMessage(aiResponse ?? '');
            }, 200);
        } catch {
            (e.event?.target as HTMLElement).focus();
            typingUsers.value = [];
            alertLimitReached(error);
        } finally {
            (e.event?.target as HTMLElement).focus();
            toggleDisabledState(false);
        }
    };

##### React

    <!--TypeScript-->
     async processMessageSending(setDisabled: Function, e: ChatTypes.MessageEnteredEvent): Promise<void> {
        let { message } = e;
        setDisabled(true);
        (e.event?.target as HTMLElement).blur();
        this.typingUsersSubject.next([assistant]);
        try {
            const aiResponse = await this.getAIResponse(message.text);
            setTimeout(() => {
                this.typingUsersSubject.next([]);
                this.renderAssistantMessage(aiResponse ?? '');
            }, 200);
        } catch (error) {
            (e.event?.target as HTMLElement).focus();
            this.typingUsersSubject.next([]);
            this.alertLimitReached(error);
        } finally {
            (e.event?.target as HTMLElement).focus();
            setDisabled(false);
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
            processMessageSending(message.text, instance, customStore);
        },
    }).dxChat('instance');

##### Angular

    <!--TypeScript-->
    async onMessageEntered(event: DxChatTypes.MessageEnteredEvent): Promise<void> {
        let { message } = event;
        this.dataSource
            ?.store()
            .push([{ type: 'insert', data: { id: Date.now(), ...message } }]);
        this.messages.push({ role: 'user', content: message?.text ?? '' });
        await this.processMessageSending(event);
    }

##### Vue

    <!--TypeScript-->
    const onMessageEntered = async(e: DxChatTypes.MessageEnteredEvent) => {
        let { message } = e;
        dataSource.value?.store().push([{
            type: 'insert',
            data: { id: Date.now(), ...message }
        }]);
        messages.value.push({ role: 'user', content: message?.text ?? '' });
        await processMessageSending(e);
    };

##### React

    <!--TypeScript-->
    async onMessageEntered(event: ChatTypes.MessageEnteredEvent, setDisabled: Function): Promise<void> {
        let { message } = event;
        this.dataSource
            ?.store()
            .push([{ type: 'insert', data: { id: Date.now(), ...message } }]);
        this.messages.push({ role: 'user', content: message?.text ?? '' });
        await this.processMessageSending(setDisabled, event);
    }

---

For additional configuration options, refer to the [Additional Configuration](/concepts/05%20UI%20Components/Chat/15%20Integrate%20with%20AI%20Service/05%20OpenAI/20%20Additional%20Configuration.md '/Documentation/Guide/UI_Components/Chat/Integrate_with_AI_Service/#OpenAI/Additional_Configuration') help topic.