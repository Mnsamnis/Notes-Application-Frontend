package com.example.learn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.learn.dao.LearnDao;

import com.example.learn.entity.Learn;

@Service
public class LearnServiceImpl implements LearnService {
	 @Autowired 
	 LearnDao learnDao;
	
	
	List<Learn> list;
	
	public LearnServiceImpl() {
		/*
		 * list=new ArrayList<>(); list.add(new Learn(123,"Java",
		 * "I am learning Java")); list.add(new Learn(124,"Python",
		 * "I am learning Python"));
		 */
	}
	

	
	@Override
	public List<Learn> getLearnList(){
		return learnDao.findAll()	;
		/* return list; */
	}



	@Override
	public Learn getLearn(long id) {
		
		return learnDao.getReferenceById(id);
		/*
		 * Learn l=null; for(Learn learn:list) { if(learn.getId()==id) { l=learn; break;
		 * } } return l;
		 */
	}



	@Override
	public Learn addLearn(Learn learn) {
		
		learnDao.save(learn);
		return learn;
		/*
		 * list.add(learn); return learn;
		 */
	}



	@Override
	public Learn updateLearn(Learn learn) {
		
		learnDao.save(learn);
		return learn;
	
		/*
		 * for(Learn l:list) { if(l.getId()==learn.getId()) {
		 * l.setName(learn.getName()); l.setDetails(learn.getDetails()); break; } }
		 * 
		 * return list;
		 */
	}



	@Override
	public void deleteLearn(long id) {
		Learn l=learnDao.getReferenceById(id);
		learnDao.delete(l);
		
		/*
		 * for(Learn l:list) { if(l.getId()==id) { list.remove(l); break; } }
		 */
		
		
	}
	
	
		
}
