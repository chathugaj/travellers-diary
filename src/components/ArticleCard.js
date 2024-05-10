import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/ArticleCard.module.css";

function ArticleCard() {
  return (
    <Card>
      <Card.Img
        variant="top"
        src="holder.js/100px180"
        className={styles.ImageArticle}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
