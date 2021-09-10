import styled from 'styled-components';
import Link from 'next/link';
import Slider from 'react-slick';
import { useRouter } from 'next/router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeaderComponent() {
  const router = useRouter();
  const items: [number, string, string][] = [
    [0, '/', 'KAKAO WEBTOON'],
    [1, '/original-webtoon', '웹툰원작'],
    [2, '/original-novel', '소설원작'],
    [3, '/ranking', '랭킹'],
    [4, '/gift', '선물함'],
    [5, '/my-page', '보관함'],
  ];

  const location = () => {
    for (const item of items) {
      if (item[1] === router.pathname) {
        return item[0];
      }
    }
    return 0;
  };
  const present = location();

  const settings = {
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    initialSlide: present,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    speed: 400,
    afterChange: (currentSlide: number) => router.push(items[currentSlide][1]),
  };

  return (
    <>
      <TopHeader>
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
          {settings && (
            <Slider {...settings}>
              {items.map(([id, path, pageName]) => (
                <TapItem key={id}>
                  <p className={router.pathname === path ? 'active' : ''}>{pageName}</p>
                </TapItem>
              ))}
            </Slider>
          )}
        </TapMenu>
      </TopHeader>
      <Container>
        <div>가나다</div>
      </Container>
    </>
  );
}
const TopHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
`;

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
  text-align: center;
  ${({ theme }) => theme.font.medium};
  color: ${({ theme }) => theme.color.light_grey1};
  cursor: pointer;

  p {
    display: inline;
  }
  .active {
    color: ${({ theme }) => theme.color.white};
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 150px;
  margin: 0 auto;
  height: 1000px;
  background-color: black;
`;

export default HeaderComponent;
