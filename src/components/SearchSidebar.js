import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  ListGroup,
} from "react-bootstrap";
import styles from "../styles/SearchSidebar.module.css";

function SearchSidebar() {
  return (
    <Container>
      <Accordion defaultActiveKey={0}>
        <AccordionItem eventKey="0">
          <AccordionHeader className={styles.SidebarContentGroupHeader}>
            DESTINATION
          </AccordionHeader>
          <AccordionBody className={styles.SidebarContent}>
            <ListGroup className={styles.SidebarContentGroup}>
              <ListGroup.Item className={styles.SidebarContentItem}>
                Sweden
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                Switzerland
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                Australia
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                Brazil
              </ListGroup.Item>
            </ListGroup>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="0">
          <AccordionHeader className={styles.SidebarContentGroupHeader}>
            POSTED ON
          </AccordionHeader>
          <AccordionBody className={styles.SidebarContent}>
            <ListGroup className={styles.SidebarContentGroup}>
              <ListGroup.Item className={styles.SidebarContentItem}>
                2024-04-28
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                2024-04-19
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                2024-04-09
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                Older...
              </ListGroup.Item>
            </ListGroup>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="0">
          <AccordionHeader className={styles.SidebarContentGroupHeader}>
            TRAVELLED
          </AccordionHeader>
          <AccordionBody className={styles.SidebarContent}>
            <ListGroup className={styles.SidebarContentGroup}>
              <ListGroup.Item className={styles.SidebarContentItem}>
                &lt; 1 Month ago
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                &lt; 3 Month ago
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                &lt; 6 Month ago
              </ListGroup.Item>
              <ListGroup.Item className={styles.SidebarContentItem}>
                Older...
              </ListGroup.Item>
            </ListGroup>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </Container>
  );
}

export default SearchSidebar;
