package com.project.NotesApplication.services;

import java.util.List;

import com.project.NotesApplication.entities.Note;

public interface NotesService {

	public Note createNote(Note note);

	public List<Note> getAllNotes();

	public Note getNoteById(long id);

	public Note updateNote(Note note);

	public String deleteNoteById(long id);
}
