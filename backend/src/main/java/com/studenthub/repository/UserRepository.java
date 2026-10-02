package com.studenthub.repository;

import com.studenthub.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    //to find a user//
    Optional<User> findByEmail(String email);
//to check whether an email is already registered//
    boolean existsByEmail(String email);
}