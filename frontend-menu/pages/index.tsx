import { Typography, Row, Col, Card } from "antd";
import Head from "next/head";

const { Meta } = Card;
const { Title } = Typography;

export default () => (
  <>
    <Head>
      <title>Hub</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://cadams.io/favicons/favicon-32x32.png"
      ></link>
    </Head>
    <div
      style={{
        zIndex: 0,
        top: 0,
        height: "100vh",
        position: "fixed",
        width: "100vw",
        backgroundImage:
          "url('https://drscdn.500px.org/photo/123293205/q%3D80_m%3D2000_k%3D1/v2?sig=4b1213b1fcc8ea3b0749bccd4dfc527d81bf66ea9c33b1f403ad55e9fb7fd81c')"
      }}
    />
    <div
      style={{
        zIndex: 2,
        maxWidth: 1200,
        margin: "50px auto",
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 50,
        textAlign: "center"
      }}
    >
      <Row justify="center" align="middle" gutter={[32, 32]}>
        <Col span={24} md={8}>
          <a target="_blank" href="https://news.ycombinator.com/">
            <Card
              hoverable
              style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
              cover={
                <img
                  style={{ height: 260, objectFit: "cover" }}
                  alt="Hacker News"
                  src="https://addons.cdn.mozilla.net/user-media/previews/thumbs/129/129382.png"
                />
              }
            >
              <Meta title="Hacker News" description="news.ycombinator.com" />
            </Card>
          </a>
        </Col>

        <Col span={24} md={8}>
          <a target="_blank" href="https://bin.cadams.io">
            <Card
              hoverable
              style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
              cover={
                <img
                  style={{ height: 260, objectFit: "cover" }}
                  alt="PrivateBin"
                  src="https://camo.githubusercontent.com/4c09e99ecb34a9f5969598c3bf79b560db5027bd/68747470733a2f2f7072697661746562696e2e696e666f2f696d672f312e302f706167652e706e67"
                />
              }
            >
              <Meta title="PrivateBin" description="bin.cadams.io" />
            </Card>
          </a>
        </Col>

        <Col span={24} md={8}>
          <a target="_blank" href="https://link.cadams.io">
            <Card
              hoverable
              style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
              cover={
                <img
                  style={{ height: 260, objectFit: "cover" }}
                  alt="Kutt"
                  src="https://kutt.it/images/card.png"
                />
              }
            >
              <Meta title="Link Shortener" description="link.cadams.io" />
            </Card>
          </a>
        </Col>

        <Col span={24} md={8}>
          <a target="_blank" href="https://code.cadams.io">
            <Card
              hoverable
              style={{ width: 240, marginLeft: "auto", marginRight: "auto" }}
              cover={
                <img
                  style={{ height: 260, objectFit: "cover" }}
                  alt="Code Server"
                  src="https://assets.digitalocean.com/articles/code-server-1804/step4f.png"
                />
              }
            >
              <Meta title="Code Server" description="code.cadams.io" />
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  </>
);
