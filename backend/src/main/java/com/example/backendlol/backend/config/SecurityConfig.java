package com.example.backendlol.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
   .csrf(csrf -> csrf.disable())
   .authorizeHttpRequests(authz -> authz
       .requestMatchers("/api/auth/register", "/api/auth/login", "/api/auth/verify","/api/admin/**","/api/employees/**","/api/employeetasks/**").permitAll()
       .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll() 
       .anyRequest().authenticated()
   )
   .formLogin(form -> form.disable())
   .cors(cors -> cors.disable());
    
        return http.build();
    }
    
}
