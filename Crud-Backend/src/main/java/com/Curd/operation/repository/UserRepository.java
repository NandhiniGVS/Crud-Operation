package com.Curd.operation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Curd.operation.model.User;

public interface UserRepository extends JpaRepository <User,Long>{

}
