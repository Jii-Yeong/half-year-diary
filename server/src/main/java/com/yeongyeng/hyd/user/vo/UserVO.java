package com.yeongyeng.hyd.user.vo;

import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Data
@Entity
@Table(name="user", schema="public")
@ToString
public class UserVO {
    @Id
    private String email;
    private String password;
    private String nickname;
    private String userThumb;
    private Timestamp regTime;
    private Timestamp altTime;

    public UserVO() {
    }


    @Builder
    public UserVO(String email, String password, String nickname, String userThumb, Timestamp regTime, Timestamp altTime) {
        this.email = email;
        this.password = password;
        this.nickname = nickname;
        this.userThumb = userThumb;
        this.regTime = regTime;
        this.altTime = altTime;
    }
}
