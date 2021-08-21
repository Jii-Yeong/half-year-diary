package com.yeongyeng.hyd.com.web;

import com.yeongyeng.hyd.com.util.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/user")
@RestController
public class MainApiController {
    @GetMapping("/test")
    public User getUser() {
        User user = new User();
        user.setId("testId");
        user.setPassword("testPw");
        user.setNickname("testNickname");
        return user;
    }
}
