package edu.oswego.cs.gmaldona.rest.datastore;

import edu.oswego.cs.gmaldona.rest.user.User;

import java.util.HashMap;

public class UserDatastore {

    private HashMap<String, User> userDatastore;

    public UserDatastore() {
        userDatastore = new HashMap<>();
    }
}
