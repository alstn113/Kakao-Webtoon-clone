import { Button, Container, Wrapper, Item } from "@/shared/styled";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Home() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <Wrapper>
      <Container
        style={{
          scale,
        }}
      >
        <Item
          style={{
            scaleY: scrollYProgress,
          }}
        ></Item>
      </Container>
    </Wrapper>
  );
}

export default Home;
