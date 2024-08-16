package no.sondre

import jakarta.ws.rs.GET
import jakarta.ws.rs.Path
import jakarta.ws.rs.Produces
import jakarta.ws.rs.core.MediaType

@Path("/")
class IndexResource {

    @GET
    fun hello() = "Welcome to Disc-Service"
}