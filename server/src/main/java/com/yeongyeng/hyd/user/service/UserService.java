package com.yeongyeng.hyd.user.service;

import com.yeongyeng.hyd.com.util.JwsService;
import com.yeongyeng.hyd.user.repository.UserRepository;
import com.yeongyeng.hyd.user.vo.UserVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.sql.Timestamp;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserService.class.getSimpleName());

    public UserVO save(UserVO userVO) {
        Timestamp now = new Timestamp(System.currentTimeMillis());
        userVO.setRegTime(now);
        userVO.setAltTime(now);
        userRepository.save(userVO);
        return userVO;
    }

    public void delete(UserVO userVO) {
        userRepository.delete(userVO);
    }

    public void updateNickname(UserVO userVO) {
        Timestamp now = new Timestamp(System.currentTimeMillis());
        userVO.setAltTime(now);

        UserVO user = userRepository.findByEmail(userVO.getEmail());
        user.setNickname(userVO.getNickname());
        userRepository.save(user);
    }

    public void updateUserThumb(UserVO userVO) {
        Timestamp now = new Timestamp(System.currentTimeMillis());
        userVO.setAltTime(now);

        UserVO user = userRepository.findByEmail(userVO.getEmail());
        user.setUserThumb(userVO.getUserThumb());
        userRepository.save(user);
    }

    public void updateUserRefreshToken(UserVO userVO) {
        UserVO user = userRepository.findByEmail(userVO.getEmail());
        user.setRefreshToken(userVO.getRefreshToken());
        LOGGER.info("refresh: " + userVO.getRefreshToken());
        userRepository.save(user);
    }

    public UserVO findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public UserVO findByNickname(String nickname) {
        return userRepository.findByNickname(nickname);
    }

    public UserVO findByRefreshToken(String refreshToken) {
        return userRepository.findByRefreshToken(refreshToken);
    }
    public List<UserVO> findAll() {
        return userRepository.findAll();
    }

    public boolean isLogin(UserVO userVO) {
        LOGGER.info("emailVO: " + userVO);
        UserVO emailVO = userRepository.findByEmail(userVO.getEmail());
        if (emailVO != null) {
            if (userVO.getPassword().equals(emailVO.getPassword())) {
                return true;
            }
        }
        return false;
    }

    public void setRefreshTokenToNull(UserVO userVO) {
        userVO.setRefreshToken(null);
        userRepository.save(userVO);
    }
}
