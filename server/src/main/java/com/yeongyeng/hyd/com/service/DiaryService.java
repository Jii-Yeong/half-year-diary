package com.yeongyeng.hyd.com.service;

import com.yeongyeng.hyd.com.repository.DiaryRepository;
import com.yeongyeng.hyd.com.vo.DiaryVO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class DiaryService {
    @Autowired
    private DiaryRepository diaryRepository;
    private final Logger LOGGER = LoggerFactory.getLogger(DiaryService.class);

    public DiaryVO save(DiaryVO diaryVO) {
        LOGGER.info("diaryVO" + diaryVO);
        Timestamp now = new Timestamp(System.currentTimeMillis());
        diaryVO.setRegTime(now);
        diaryVO.setAltTime(now);
        return diaryRepository.save(diaryVO);
    }

    public void delete(int id) {
        DiaryVO diaryVO = new DiaryVO();
        diaryVO.setId(id);
        diaryRepository.delete(diaryVO);
    }

    public void update(DiaryVO diaryVO) {
        Timestamp now = new Timestamp(System.currentTimeMillis());
        DiaryVO vo = diaryRepository.findById(diaryVO.getId());
        diaryVO.setId(vo.getId());
        diaryVO.setAltTime(now);
        diaryRepository.save(diaryVO);
    }

    public DiaryVO selectById(String id) {
        int parseId = Integer.parseInt(id);
        return diaryRepository.findById(parseId);
    }

    public List<DiaryVO> selectAll() {
        return diaryRepository.findAll();
    }
}
