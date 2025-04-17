package no.sondre.domain

import java.util.UUID


class ScorecardResult(
    val player: Player,
    val result: Int,
    val handicap: Double
)

class Scorecard(
    id: UUID = UUID.randomUUID(),
    val course: Course,
    val results: List<ScorecardResult>
) : Domain(id)

