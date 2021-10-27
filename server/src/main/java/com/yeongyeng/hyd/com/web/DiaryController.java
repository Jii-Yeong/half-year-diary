package com.yeongyeng.hyd.com.web;

import com.yeongyeng.hyd.com.service.DiaryService;
import com.yeongyeng.hyd.com.vo.DiaryVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("hyd/api/diary")
public class DiaryController {
    @Autowired
    private DiaryService diaryService;

    @PostMapping("/insert")
    public String save(@RequestBody DiaryVO diaryVO) {
       diaryService.save(diaryVO);
       return "OK";
    }

    @DeleteMapping("/delete")
    public String delete(@RequestBody DiaryVO diaryVO) {
        int id = diaryVO.getId();
        diaryService.delete(id);
        return "OK";
    }

    @PutMapping("/update")
    public String update(@RequestBody DiaryVO diaryVO) {
        diaryService.update(diaryVO);
        return "OK";
    }

    @GetMapping("/select/id")
    public DiaryVO selectById(String id) {
        return diaryService.selectById(id);
    }

    @GetMapping("/select/all")
    public List<DiaryVO> selectAll() {
        return diaryService.selectAll();
    }
}
