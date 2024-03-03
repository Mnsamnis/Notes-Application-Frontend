package com.project.NotesApplication.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.NotesApplication.dao.NotesDao;
import com.project.NotesApplication.entities.Note;

@Service
public class NotesServiceImpl implements NotesService {

	@Autowired
	public NotesDao notesDao;

	@Override
	public Note createNote(Note note) {
		notesDao.save(note);
		return note;
	}

	@Override
	public List<Note> getAllNotes() {

		return notesDao.findAll();

	}

	@Override
	public Note getNoteById(long id) {
		return notesDao.getReferenceById(id);
	}

	@Override
	public Note updateNote(Note note) {
		notesDao.save(note);
		return note;
	}

	@Override
	public String deleteNoteById(long id) {
		notesDao.deleteById(id);
		return "Deleted";

	}

}
