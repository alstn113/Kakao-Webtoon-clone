import styled from 'styled-components';
import Link from 'next/link';
import Slider from 'react-slick';
import { useRouter } from 'next/router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeaderComponent() {
  const router = useRouter();
  const items = [
    [0, '/', 'KAKAO WEBTOON'],
    [1, '/original-webtoon', '웹툰원작'],
    [2, '/original-novel', '소설원작'],
    [3, '/ranking', '랭킹'],
    [4, '/gift', '선물함'],
    [5, '/my-page', '보관함'],
  ];
  const settings = {
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    speed: 200,
    afterChange: (currentSlide) => router.push(items[currentSlide][1]),
  };

  return (
    <>
      <Header>
        <div className="notification">
          <Link href="/notification">
            <a>Notification</a>
          </Link>
        </div>
        <div className="links">
          <Link href="/search">
            <a>Search</a>
          </Link>
          <Link href="/more">
            <a>More</a>
          </Link>
        </div>
      </Header>
      <TapMenu>
        <Slider {...settings}>
          {items.map(([id, path, pageName]) => (
            <TapItem key={id}>
              <p className={router.pathname === path ? 'active' : ''}>{pageName}</p>
            </TapItem>
          ))}
        </Slider>
      </TapMenu>
    </>
  );
}

const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  .links {
    margin-left: auto;
    a {
      margin-right: 20px;
    }
  }
`;

const TapMenu = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

const TapItem = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 60px;
  text-align: center;
  ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.light_grey1};
  p {
    text-align: center;
    display: block;
  }
  .active {
    color: ${({ theme }) => theme.color.white};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: blue;
  max-width: 630px;
  height: 1000px;
`;

export default HeaderComponent;
