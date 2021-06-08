import { Container } from "react-bootstrap";
const Map = () => {
  return (
    <Container fluid style={{ background: "#1c1c1c" }} class="mapouter">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28976.71732497613!2d67.065662!3d24.792383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7e2ded11148c9f9!2sTake4Media!5e0!3m2!1sen!2sus!4v1622551771039!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{
          border: 0,
          width: "100%",
          marginTop: "12%",
          height: "38rem",
        }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </Container>
  );
};

export default Map;
