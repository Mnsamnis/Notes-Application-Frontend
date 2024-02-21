package com.example.learn.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Learn {
	
	@Id
	private long id;
	
	@Column
	private String name;
	
	@Column
	private String details;
	
	public long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public Learn(long id, String name, String details) {
		super();
		this.id = id;
		this.name = name;
		this.details = details;
	}
	

	public Learn() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Learn [id=" + id + ", name=" + name + ", details=" + details + "]";
	}

	
	

}
