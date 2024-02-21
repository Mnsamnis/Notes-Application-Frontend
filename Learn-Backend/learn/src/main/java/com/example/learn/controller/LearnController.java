package com.example.learn.controller;

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

/*import com.example.learn.dao.LearnDao;*/
import com.example.learn.entity.Learn;
import com.example.learn.service.LearnService;

@RestController
public class LearnController {
	
	/*
	 * @Autowired private LearnDao learnDao;
	 */
	@Autowired
	private LearnService learnService;
	
	
	@GetMapping("/home")
	public String home() {
		return "this is home page";
	}
	
	@CrossOrigin("*")
	@GetMapping("/learns")
	public List<Learn> getLearnList(){
		return this.learnService.getLearnList();
	}
	
	@GetMapping("/learns/{id}")
	public Learn getLearn(@PathVariable String id) {
		return this.learnService.getLearn(Long.parseLong(id));
	}
	
	@CrossOrigin("*")
	@PostMapping("/learns")
	public Learn addLearn(@RequestBody Learn learn) {
		return this.learnService.addLearn(learn);
	}
	
	@CrossOrigin("*")
	@PutMapping("/learns")
	public Learn updateLearn(@RequestBody Learn learn) {
		return this.learnService.updateLearn(learn);
	}
	
	@CrossOrigin("*")
	@DeleteMapping("/learns/{id}")
	public void deletelearn(@PathVariable String id) {
		this.learnService.deleteLearn(Long.parseLong(id));
	}
	
	
	
}
