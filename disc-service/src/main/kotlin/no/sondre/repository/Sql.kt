package no.sondre.repository

import jakarta.persistence.Entity
import jakarta.persistence.Id
import java.util.*


interface SQLModel<POJO> {
    fun toPOJO(): POJO
    fun update(new: POJO)
}

interface SQLModelCreator<POJO, SQLModel> {
    fun fromPOJO(pojo: POJO): SQLModel
}
