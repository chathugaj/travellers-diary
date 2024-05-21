import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/ArticleCard.module.css";

function ArticleCard({article}) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={article.banner}
        className={styles.ImageArticle}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className={styles.TextArticle}>
            {article.body}
        </Card.Text>
        <Button variant="dark">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
