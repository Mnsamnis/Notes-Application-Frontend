package com.project.NotesApplication.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.NotesApplication.entities.Note;
import com.project.NotesApplication.services.NotesServiceImpl;

@RestController
public class NotesController {
	
	@Autowired
	private NotesServiceImpl notesServiceImpl;
	
	@CrossOrigin("*")
	@PostMapping("/note")
	public Note createNote(@RequestBody Note note) {
		return this.notesServiceImpl.createNote(note);
	}
	
	@CrossOrigin("*")
	@GetMapping("/notes")
	public List<Note> getAllNotes(){
		return this.notesServiceImpl.getAllNotes();
	}
	
	@GetMapping("/notes/{id}")
	public Note getNoteById(@PathVariable String id) {
		return this.notesServiceImpl.getNoteById(Long.parseLong(id));
	}
	
	@PutMapping("/note")
	public Note updateNote(@RequestBody Note note) {
		return this.notesServiceImpl.updateNote(note);
	}
	
	@DeleteMapping("/notes/{id}")
	public String deleteNoteById(@PathVariable String id) {
		return this.notesServiceImpl.deleteNoteById(Long.parseLong(id));
	}
	
	
	
}
