import React from "react";
import styled from "styled-components";

import DiaryListLayout from "../../components/layout/DiaryListLayout";
import DefaultProfile from "../../components/atoms/DefaultProfile";

const Diary = styled.article`
  width: 100%;
  height: 400px;
  border-radius: 25px;
  box-shadow: rgb(212 92 81 / 60%) 0px 0px 20px 5px;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
`;

const PostThumbnail = styled.div`
  width: 100%;
  height: 45%;
  background-image: url(https://placeimg.com/500/500/anys);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

const PostTitle = styled.h3`
  width: 100%;
  font-size: 1.5em;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  box-sizing: border-box;
`;

const PostDet = styled.p`
  display: -webkit-box;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.8;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  box-sizing: border-box;
`;

const LikeCount = styled.div`
  font-size: 13px;
  color: #868686;
  margin-right: 10px;
`;

const ComtCount = styled.div`
  font-size: 13px;
  color: #868686;
  padding-left: 10px;
`;

const PostDate = styled.time`
  width: 100%;
  text-align: right;
  font-size: 13px;
  color: #868686;
`;

const PostPreserter = ({ popular }) => {
  return (
    <DiaryListLayout>
      {popular.map((diary) => (
        <Diary key={diary.id}>
          <PostThumbnail />
          <div className="post-body">
            <PostTitle>{diary.title}</PostTitle>
            <PostDet>{diary.body}</PostDet>
          </div>
          <div className="post-panel">
            <div className="user-profile">
              <DefaultProfile img="/no_profile.png" />
            </div>
            <span className="user-name">{diary.userId}</span>
            <div className="post-info">
              <LikeCount>♥ 36</LikeCount>
              <span>/</span>
              <ComtCount>댓글 3개</ComtCount>
              <PostDate>2021-10-03 06:20</PostDate>
            </div>
          </div>
        </Diary>
      ))}
    </DiaryListLayout>
  );
};

export default PostPreserter;
