package no.sondre.resource

import jakarta.inject.Inject
import jakarta.ws.rs.GET
import jakarta.ws.rs.POST
import jakarta.ws.rs.PUT
import jakarta.ws.rs.Path
import jakarta.ws.rs.PathParam
import no.sondre.domain.Player
import no.sondre.repository.PlayerRepository
import java.util.*


@Path("/player")
class PlayerResource {

    @Inject
    lateinit var repo: PlayerRepository

    @GET
    fun all(): List<Player> {
        return repo.all()
    }

    @GET
    @Path("/{id}")
    fun player(@PathParam("id") id: UUID): Player {
        // TODO: Load player from repo
        return Player(name = "Static Player")
    }

    @POST
    fun newPlayer(new: Player): Player {
        return repo.save(new)
    }

    @PUT
    fun updatePlayer(updated: Player): Player {
        // TODO: assert player exists
        // TODO: check that player update is valid
        // TODO: save new player
        return updated
    }
}