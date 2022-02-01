package edu.oswego.cs.gmaldona.rest.resources;

import edu.oswego.cs.gmaldona.rest.datastore.ChatDatastore;
import edu.oswego.cs.gmaldona.rest.datastore.UserDatastore;
import edu.oswego.cs.gmaldona.rest.user.Message;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;

@RequestScoped
@Path("/chat")
public class ChatResource {
    private static final Jsonb jsonb = JsonbBuilder.create();

    @GET
    @Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
    @Produces(MediaType.APPLICATION_JSON)
    public String retrieveAllMessages() {
        ArrayList<Message> messages = new ArrayList<>(ChatDatastore.retrieveAllMessage());
        return messages.size() > 10 ? jsonb.toJson(messages.subList(0, 10).toArray()) : jsonb.toJson(messages.toArray());
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON) 
   public Response postMessage(Message message) {

        ChatDatastore.push(message);
        String responseMessage = "user: " + message.getUsername() + " / " + message.getMessage() + "\n";
        return Response.status(Response.Status.CREATED).entity(responseMessage).build();
    }

}
