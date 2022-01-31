package edu.oswego.cs.gmaldona.rest.user;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    private String username;
}
