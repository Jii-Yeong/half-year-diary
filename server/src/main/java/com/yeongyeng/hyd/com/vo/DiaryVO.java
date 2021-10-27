package com.yeongyeng.hyd.com.vo;

import lombok.Data;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Data
@Entity
@Table(name="diary", schema="public")
@ToString
public class DiaryVO {
    @Id
    private int id;
    private String title;
    private String content;
    private int likeCnt;
    private int readCnt;
    private String thumbnail;
    private boolean isOpen;
    private String regUser;
    private Timestamp regTime;
    private Timestamp altTime;

    public DiaryVO() {
    }

    public DiaryVO(int id, String title, String content, int likeCnt, int readCnt, String thumbnail, boolean isOpen, String regUser, Timestamp regTime, Timestamp altTime) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.likeCnt = likeCnt;
        this.readCnt = readCnt;
        this.thumbnail = thumbnail;
        this.isOpen = isOpen;
        this.regUser = regUser;
        this.regTime = regTime;
        this.altTime = altTime;
    }
}
