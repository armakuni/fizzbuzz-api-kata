package com.armakuni.fizzbuzz.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FizzBuzzController {

    @GetMapping("/healthcheck")
    public String isHealthy() {

        return "Service is up!";
    }

}
