import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import PostPreserter from "./PostPresenter";

const PostContainer = () => {
  // 게시물을 각각 배열에 담음
  const [diary, setDiary] = useState({
    popular: [],
  });

  const [item, setItem] = useState(20);

  const makeReq = async (item) => {
    try {
      // data는 요청하여 얻은 결과를 담는 변수명
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // 데이터 20개만 보여지게 설정
      let resultData = data.slice(0, item);

      return [resultData, null];
    } catch (e) {
      return [null, e];
    }
  };

  // 무한 스크롤 함수
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setItem(item + 20);
      getData(item);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // useCallback hook은 함수를 재사용하기 위해 사용
  const getData = useCallback(async () => {
    const [popular, popularError] = await makeReq(item);
    setDiary({
      popular,
      popularError,
    });
  }, [item]);

  useEffect(() => {
    getData();
  }, [getData]);

  // ...diary는 모든 데이터를 담는다는 뜻
  return <PostPreserter await={getData} {...diary} />;
};

export default PostContainer;
