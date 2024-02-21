
package com.example.learn.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.learn.entity.Learn;

public interface LearnDao extends JpaRepository<Learn, Long> {

}
