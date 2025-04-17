package no.sondre.resource

import jakarta.ws.rs.GET
import jakarta.ws.rs.Path

@Path("/")
class IndexResource {

    @GET
    fun hello() = "Welcome to Disc-Service"
}
