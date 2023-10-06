import React from 'react';
import images from '../images/images';

const items = [
    {
        id: 1,
        imgSrc: images.event1,
        alt: '이벤트1',
        subText: '지금 신청하면 신규고객 모두',
        mainText: '렌탈등록비 10만원 면제!'
    },
    {
        id: 2,
        imgSrc: images.event2,
        alt: '이벤트2',
        subText: '놓치고 싶지 않은 할인 혜택!',
        mainText: '매월 렌탈/멤버쉽 요금 할인'
    },
    {
        id: 3,
        imgSrc: images.event3,
        alt: '이벤트3',
        subText: '최대 40%까지 할인 혜택!',
        mainText: '기업, 학교 특별 우대'
    },
]

const Event = () => {
    return (
        <div className='eventWrap'>
            <div className='wrapper'>
                <div className='intro'>
                    <h3>웅진코웨이 판매인몰 EVENT</h3>
                    <span>판매인몰의 다양한 이벤트를 확인해보세요.</span>
                </div>
                <div className='listWrap'>
                    {items.map((item, id) => {
                        return (
                            <div key={id} className='eventList'>
                                <img src={item.imgSrc} alt={item.alt} />
                                <div className='textWrap'>
                                    <p>{item.subText}</p>
                                    <h4>{item.mainText}</h4>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Event;