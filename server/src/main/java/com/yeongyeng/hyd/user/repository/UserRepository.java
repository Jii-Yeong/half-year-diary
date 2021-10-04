package com.yeongyeng.hyd.user.repository;

import com.yeongyeng.hyd.user.vo.UserVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserVO, Long> {
    UserVO findByEmail(String email);

    UserVO findByNickname(String nickname);
    UserVO findByPassword(String password);
}
