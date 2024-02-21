package com.example.learn.service;

import java.util.List;

import com.example.learn.entity.Learn;

public interface LearnService {
	

	 public List<Learn> getLearnList();
	 
	 public Learn getLearn(long id);
	 
	 public Learn addLearn(Learn learn);
	 
	 public Learn updateLearn(Learn learn);
	 
	 public void deleteLearn(long id);

}
