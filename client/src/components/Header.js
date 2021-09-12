import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div class="header-inner">
        <div className="hamburger-button">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="logo">
          <Link to="/">반년일기</Link>
        </div>

        <div className="profile-thumbnail">
          <Link to="/myPage/:id">마이페이지</Link>
        </div>
      </div>

      <nav className="gnb">
        <ul>
          <li>
            <Link to="/guide">사이트 이용 가이드</Link>
          </li>
          <li>
            <Link to="/diary/list">회고록</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
