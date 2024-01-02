package com.Crud.operation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Crud.operation.model.User;

public interface UserRepository extends JpaRepository <User,Long>{

}
