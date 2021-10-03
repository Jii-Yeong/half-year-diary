import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import PostPreserter from "./PostPresenter";

const PostContainer = () => {
  // 게시물을 각각 배열에 담음
  const [diary, setDiary] = useState({
    popular: [],
  });

  const makeReq = async () => {
    try {
      // data는 요청하여 얻은 결과를 담는 변수명
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        console.log("게시물 요청 성공")
      );
      return [data, null];
    } catch (e) {
      return [null, e];
    }
  };

  // useCallback hook은 함수를 재사용하기 위해 사용
  const getData = useCallback(async () => {
    const [popular, popularError] = await makeReq();
    setDiary({
      popular,
      popularError,
    });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  // ...diary는 모든 데이터를 담는다는 뜻
  return <PostPreserter await={getData} {...diary} />;
};

export default PostContainer;
