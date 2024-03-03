package com.project.NotesApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.NotesApplication.entities.Note;

public interface NotesDao extends JpaRepository<Note, Long> {

}
