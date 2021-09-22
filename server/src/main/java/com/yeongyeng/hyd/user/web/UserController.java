package com.yeongyeng.hyd.user.web;

import com.yeongyeng.hyd.user.service.UserService;
import com.yeongyeng.hyd.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @DeleteMapping("/delete")
    public String delete(@RequestBody String email) {
        UserVO userVO = new UserVO();
        userVO.setEmail(email);
        userService.delete(userVO);
        return "OK";
    }

    @PutMapping("/update")
    public String updateNickname(@RequestBody UserVO userVO) {
        userService.updateNickname(userVO);
        return "OK";
    }

    @GetMapping("/select/email")
    public UserVO selectByEmail(@RequestParam("email") String email) {
        return userService.findByEmail(email);
    }

    @GetMapping("/select/nickname")
    public UserVO selectByNickname(@RequestParam("nickname") String nickname) {
        return userService.findByNickname(nickname);
    }

    @GetMapping("/select/all")
    public List<UserVO> selectAll() {
        return userService.findAll();
    }
}
