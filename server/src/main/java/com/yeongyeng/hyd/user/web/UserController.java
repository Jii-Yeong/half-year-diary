package com.yeongyeng.hyd.user.web;

import com.yeongyeng.hyd.user.service.UserService;
import com.yeongyeng.hyd.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hyd/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/insert")
    public String insert(@RequestBody UserVO userVO) {
        userService.save(userVO);
        return "OK";
    }
}
