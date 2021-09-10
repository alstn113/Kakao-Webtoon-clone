import styled from 'styled-components';
import Link from 'next/dist/client/link';

const links: [number, string, string][] = [
  [0, '/more/customer-center/service-information/business', '사업자 정보'],
  [1, '/more/customer-center/service-information/policy', '서비스 이용약관'],
  [2, '/more/customer-center/service-information/policy/personal-information', '개인정보처리방침'],
  [3, '/more/customer-center/service-information/policy/youth', '청소년 보호 정책'],
  [4, '/more/customer-center', '고객센터'],
];

function FooterComponent() {
  return (
    <div>
      <FooterWrapper>
        <FooterItems>
          {links.map(([id, link, name]) => (
            <div className="item" key={id}>
              <Link href={link}>
                <a>
                  <p>{name}</p>
                </a>
              </Link>
              {id !== links.slice(-1)[0][0] && <div>&nbsp;|&nbsp;</div>}
            </div>
          ))}
        </FooterItems>
        <p>&copy; KAKAO WEPTOON</p>
      </FooterWrapper>
    </div>
  );
}

export default FooterComponent;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
  flex-direction: column;
  ${({ theme }) => theme.font.small};
`;

const FooterItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .item {
    display: flex;
    flex-direction: row;
  }
`;
