package no.sondre.domain

import java.util.*

class Course(
    id: UUID = UUID.randomUUID(),
    val name: String,
    val rating: Double
): Domain(id)
