package edu.oswego.cs.gmaldona.rest.datastore;

import edu.oswego.cs.gmaldona.rest.user.Message;

import java.util.List;
import java.util.Stack;

public class ChatDatastore {

    private static Stack<Message> chatStack = new Stack<>();

    public ChatDatastore() {
        chatStack = new Stack<>();
    }

    public static void push(Message message) {
        chatStack.add(message);
    }

    public static List<Message> retrieveAllMessage() {
        return chatStack;
    }

    public static int stackSize() { return chatStack.size(); }

}
