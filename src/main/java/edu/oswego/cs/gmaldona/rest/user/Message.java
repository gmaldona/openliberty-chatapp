package edu.oswego.cs.gmaldona.rest.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Message {
    @Id
    public String username;
    public String message;

    public Message(String username, String message) {
        super();
        this.username = username;
        this.message = message;
    }

    public Message() {
    }

    public String getUsername() { return username; }

    public String getMessage() { return message; }

    public String toString() { return username + ": " + message; }
}
