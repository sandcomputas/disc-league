package no.sondre

import jakarta.ws.rs.GET
import jakarta.ws.rs.Path

data class PlayerStanding(val position: Int, val name: String)

@Path("/leaderboard")
class LeaderBoard {

    @GET
    fun leaderboard(): List<PlayerStanding> {
        return (1..3).map {
            PlayerStanding(it, "Navn $it")
        }
    }
}