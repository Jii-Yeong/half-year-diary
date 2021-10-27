package com.yeongyeng.hyd.com.repository;

import com.yeongyeng.hyd.com.vo.DiaryVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiaryRepository extends JpaRepository<DiaryVO, Long>  {
    DiaryVO findById(int id);
}
