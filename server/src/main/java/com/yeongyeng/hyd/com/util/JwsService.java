package com.yeongyeng.hyd.com.util;

import com.yeongyeng.hyd.user.vo.UserVO;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.*;

@Service
public class JwsService {
    private Jws<Claims> jws;
    private static final Logger LOGGER = LoggerFactory.getLogger(JwsService.class);
    private static Date expirationDate(int minute) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Date());
        cal.add(Calendar.MINUTE, minute);
        LOGGER.info("cal: " + cal.getTime());
        return cal.getTime();
    }

    public String getRefreshToken(SecretKey key) {
        String jws = Jwts.builder()
                .setIssuer("refresh")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1 * 1000))
                .signWith(key)
                .compact();
        LOGGER.debug("refresh: " + key.toString());
        LOGGER.debug("refresh: " + jws);
        return jws;
    }

    public String createJws(SecretKey key, UserVO userVO) {
        LOGGER.info("create Key: " + key);
        Map<String, Object> claims = new HashMap<>();
        claims.put("email", userVO.getEmail());
        claims.put("password", userVO.getPassword());
        String jws = Jwts.builder()
                .setExpiration(new Date(System.currentTimeMillis() + 1 * 1000))
                .setIssuedAt(new Date())
                .setClaims(claims)
                .signWith(key)
                .compact();
        LOGGER.debug(key.toString());
        LOGGER.debug(jws);
        return jws;
    }
    public Jws<Claims> readJws(String jwsString, SecretKey key) {
        LOGGER.info("read Key: " + key);
        jws = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwsString);
        return jws;
    }
}
