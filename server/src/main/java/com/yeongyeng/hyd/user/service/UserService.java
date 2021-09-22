package com.yeongyeng.hyd.user.service;

import com.yeongyeng.hyd.user.repository.UserRepository;
import com.yeongyeng.hyd.user.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public UserVO save(UserVO userVO) {
        //TODO now
        userRepository.save(userVO);
        return userVO;
    }

    public void delete(UserVO userVO) {
        userRepository.delete(userVO);
    }

    public void updateNickname(UserVO userVO) {
        UserVO user = userRepository.findByEmail(userVO.getEmail());
        user.setNickname(userVO.getNickname());
        userRepository.save(user);
    }

    public void updateUserThumb(UserVO userVO) {
        UserVO user = userRepository.findByEmail(userVO.getEmail());
        user.setUserThumb(userVO.getUserThumb());
        userRepository.save(user);
    }

    public UserVO findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public UserVO findByNickname(String nickname) {
        return userRepository.findByNickname(nickname);
    }

    public List<UserVO> findAll() {
        return userRepository.findAll();
    }
}
