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
            .csrf(csrf -> csrf.disable()) // Disable CSRF for testing; enable it in production
            .cors(cors -> cors.disable()) // Disable CORS for testing; configure if necessary
            .authorizeHttpRequests(authz -> authz
                .requestMatchers(
                    "/api/auth/**",
                    "/api/auth/register",
                    "/api/auth/login",
                    "/api/auth/profile",
                    "/api/auth/users/{id}/",
                    "/swagger-ui/**",
                    "/v3/api-docs/**",
                    "/api/contact/**",
                    "/api/timeoffs/**" // Ensure this matches your actual endpoints
                ).permitAll()
                .requestMatchers(
                    "/api/admin/**",
                    "/api/schedules/**",
                    "/api/employees/**",
                    "/api/employeetasks/**",
                    "/api/projects/**",
                    "/api/tasks/**",
                    "/api/teams/**",
                    "/api/product_manager/schedule/**",
                    "/api/product-manager/**",
                    "/api/timeoffrequests/**"
                ).permitAll() // Adjust if some endpoints need authentication
                .anyRequest().authenticated()
            )
            .formLogin(form -> form.disable()); // Disable form login; configure if needed
    
        return http.build();
    }
}
