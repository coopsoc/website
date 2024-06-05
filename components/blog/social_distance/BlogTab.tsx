import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row, TabContent, TabPane } from "reactstrap";
import { partition } from "scripts/list";

interface BlogTabProps {
  children: Child[];
}

type Child = {
  props: {
    image: string;
    children: string;
  };
};

const BlogTab = (props: BlogTabProps) => {
  const NONE = -1;
  const [tab, setTab] = useState<number>(NONE);

  const images: React.JSX.Element[] = [];
  const contents: React.JSX.Element[] = [];

  const generateImage = (src: string, index: number) => {
    return (
      <Image
        src={src}
        alt={`${index}`}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
        onClick={() => setTab(index)}
      />
    );
  };

  const generateContents = (contents: string, index: number) => (
    <TabPane tabId={`blog-tab-${index}`} key={`blog-tab-contents-${index}`}>
      {contents}
    </TabPane>
  );

  props.children.forEach((child: Child, index: number) => {
    images.push(generateImage(child.props.image, index));
    contents.push(generateContents(child.props.children, index));
  });

  return (
    <>
      <Container className="pb-md-4">
        {partition(images, 4).map((row, index) => (
          <Row key={`blog-tab-row-${index}`}>
            {row.map((image, rowIndex) => (
              <Col key={`blog-tab-item-${index}-${rowIndex}`} sm={3}>
                {image}
              </Col>
            ))}
          </Row>
        ))}
      </Container>

      <TabContent activeTab={`blog-tab-${tab}`}>{contents}</TabContent>
    </>
  );
};

export default BlogTab;
