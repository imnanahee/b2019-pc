import React from 'react';
import logoImage from '../images/ci_skyblue.png';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="wrapper">
                <img src={logoImage} alt="코웨이 coway" />
                <div className="companyInfo">
                    <ul>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보취급방침</a></li>
                        <li><a href="#">사업자정보확인</a></li>
                    </ul>
                    <address>
                        <span>00사업본부 0000사업점 상호명: 000</span>
                        <span>서울특별시 금천구 벚꽃로 234, 1202호 아이보스 대표자: 코웨이</span>
                        <span>대표번호 : 010-0000-0000 사업자번호 : 000-00-00000</span>
                        <span>관리자 : 코웨이, 이메일 :coway@i-boss.co.kr</span>
                        <span>상담 시간: 24시간 (주말, 공휴일포함)</span>
                        <span>*본 쇼핑몰은 일체의 결제 시스템이 없으며, 모든 결제는 후불로 처리됩니다.</span>
                    </address>
                </div>
            </div>
        </footer>
    );
};

export default Footer;