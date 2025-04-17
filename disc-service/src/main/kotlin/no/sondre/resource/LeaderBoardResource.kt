package no.sondre.resource

import jakarta.ws.rs.GET
import jakarta.ws.rs.Path

data class PlayerStanding(val position: Int, val name: String, val lastFive: List<Int>)

@Path("/leaderboard")
class LeaderBoard {

    @GET
    fun leaderboard(): List<PlayerStanding> {
        return (1..3).map {
            PlayerStanding(it, "Navn $it", (0..5).map { (-10 until 20).random() } )
        }
    }
}