package com.yeongyeng.hyd.user.web;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.yeongyeng.hyd.com.util.JwsService;
import com.yeongyeng.hyd.user.service.UserService;
import com.yeongyeng.hyd.user.vo.UserVO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.crypto.SecretKey;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("hyd/api/user")
public class UserController {
    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);
    private SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    @Autowired
    private JwsService jwsService;
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

    @PutMapping("/update/nickname")
    public String updateNickname(@RequestBody UserVO userVO) {
        userService.updateNickname(userVO);
        return "OK";
    }

    @PutMapping("update/thumb")
    public String updateUserThumb(@RequestBody UserVO userVO) {
        userService.updateUserThumb(userVO);
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

    @CrossOrigin(origins = "http://localhost:8080", exposedHeaders = "Authorization")
    @PostMapping("/login")
    public JsonNode login(@RequestBody UserVO userVO, HttpServletResponse res) throws JsonProcessingException {
        res.addHeader("Access-Control-Expose-Headers", "Access-Token, Uid");
        LOGGER.info("userVO: " + userVO.getEmail());
        ObjectMapper mapper = new ObjectMapper();
        String tokenJson = null;
        if (userService.isLogin(userVO)) {
            String refreshToken = jwsService.getRefreshToken(key);
            String accessToken = jwsService.createJws(key, userVO);
            Cookie refreshCookie = new Cookie("refreshToken", refreshToken);
            res.addCookie(refreshCookie);
            tokenJson = "{\"accessToken\":\"" + accessToken + "\"}";
        } else {
            tokenJson = "{\"message\":" + "\"LOGIN_FAIL\"}";
        }
        JsonNode json = mapper.readTree(tokenJson);
        return json;
    }

    @PostMapping("/silent-refresh")
    public JsonNode silentRefresh(@RequestBody UserVO userVO, HttpServletResponse res) throws JsonProcessingException {
        LOGGER.info("userVO: " + userVO.getEmail());
        ObjectMapper mapper = new ObjectMapper();
        String tokenJson = null;
        if (userService.isLogin(userVO)) {
            String refreshToken = jwsService.getRefreshToken(key);
            String accessToken = jwsService.createJws(key, userVO);
            Cookie refreshCookie = new Cookie("refreshToken", refreshToken);
            res.addCookie(refreshCookie);
            tokenJson = "{\"accessToken\":\"" + accessToken + "\"}";
        } else {
            tokenJson = "{\"message\":" + "\"LOGIN_FAIL\"}";
        }
        JsonNode json = mapper.readTree(tokenJson);
        return json;
    }
    @CrossOrigin(origins = "http://localhost:8080", exposedHeaders = "Authorization")
    @PostMapping("/auth/info")
    public UserVO getAuthInfo(HttpServletRequest req, HttpServletResponse res) {
        res.addHeader("Access-Control-Expose-Headers", "Access-Token, Uid");
        String authorization = req.getHeader("Authorization");
        LOGGER.info("authorization: " + authorization);
        String accessToken = authorization.split("Bearer ")[1];
        LOGGER.info(accessToken);
        Jws<Claims> jws = jwsService.readJws(accessToken, key);
        LOGGER.info("jws: " + jws);
        String email = (String) jws.getBody().get("email");
        UserVO userVO = userService.findByEmail(email);
        return userVO;
    }
}
