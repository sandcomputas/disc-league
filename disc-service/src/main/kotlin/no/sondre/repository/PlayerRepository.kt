package no.sondre.repository

import io.quarkus.hibernate.orm.panache.kotlin.PanacheRepository
import jakarta.enterprise.context.ApplicationScoped
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import jakarta.transaction.Transactional
import no.sondre.domain.Player
import java.util.*

@Entity
@Table(name = "player")
class SQLPlayer(
    @Id
    val id: UUID,
    var name: String,
) : SQLModel<Player> {
    companion object : SQLModelCreator<Player, SQLPlayer> {
        override fun fromPOJO(pojo: Player): SQLPlayer {
            return SQLPlayer(
                id = pojo.id,
                name = pojo.name,
            )
        }
    }

    override fun toPOJO(): Player {
        return Player(
            id = id,
            name = name,
        )
    }

    override fun update(new: Player) {
        name = new.name
    }
}

@ApplicationScoped
@Transactional
class PlayerRepository : PanacheRepository<SQLPlayer> {

    fun all(): List<Player> {
        return listAll().map { it.toPOJO() }
    }

    fun save(player: Player): Player {
        val sql = SQLPlayer.fromPOJO(player)
        persist(sql)
        return sql.toPOJO()
    }
}