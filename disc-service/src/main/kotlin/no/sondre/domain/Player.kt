package no.sondre.domain

import java.util.*

class Player(
    id: UUID = UUID.randomUUID(),
    val name: String,
): Domain(id) {
    val handicap
        get() = 10.0 // TODO: Should be dynamically loaded
}

