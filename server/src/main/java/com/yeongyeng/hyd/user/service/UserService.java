package com.yeongyeng.hyd.user.service;

import com.yeongyeng.hyd.user.repository.UserRepository;
import com.yeongyeng.hyd.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserVO save(UserVO userVO) {
        userRepository.save(userVO);
        return userVO;
    }
}
