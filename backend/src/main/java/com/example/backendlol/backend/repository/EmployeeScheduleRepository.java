package com.example.backendlol.backend.repository;

import com.example.backendlol.backend.model.EmployeeSchedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeScheduleRepository extends JpaRepository<EmployeeSchedule, Long> {
    EmployeeSchedule findByEmployeeId(Long employeeId);
}
