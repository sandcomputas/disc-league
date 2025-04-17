package no.sondre.domain

import java.util.UUID

class Tournament(
    id: UUID = UUID.randomUUID(),
    val name: String,
    val scorecard: List<Scorecard>
): Domain(id)
