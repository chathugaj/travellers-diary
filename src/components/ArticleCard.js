import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/ArticleCard.module.css";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`posts/${article.id}`);
  };

  return (
    <Card className={styles.ArticleCard}>
      <Card.Img
        variant="top"
        src={article.banner}
        className={styles.ImageArticle}
      />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text className={styles.TextArticle}>{article.body}</Card.Text>
        <Button variant="dark" onClick={handleSubmit}>
          Read More...
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticleCard;
