import styled from 'styled-components';
import Link from 'next/dist/client/link';

function NoHeaderComponent() {
  return (
    <div>
      <HeaderWrapper>
        <Link href="/">
          <a>뒤로가기</a>
        </Link>
      </HeaderWrapper>
    </div>
  );
}

export default NoHeaderComponent;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;
