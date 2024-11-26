package com.armakuni.fizzbuzz;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FizzBuzzController {

    @GetMapping("/fizzbuzz/{number}")
    public String getFizzBuzz(@PathVariable int number) {

        // TODO : make this test pass

        return "";
    }
}
