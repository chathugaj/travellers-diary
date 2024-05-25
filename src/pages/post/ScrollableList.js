import {Col, Row} from "react-bootstrap";
import {Avatar} from "../../components";
import InfiniteScroll from "react-infinite-scroll-component";

const ScrollableList = ({dataLoad, data}) => {
    console.log(data?.count, data?.results?.length)
    return (
        <InfiniteScroll
            dataLength={data?.count || 0}
            next={dataLoad}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
                <p style={{textAlign: "center"}}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            {data?.results?.map((comment, index) => (
                // <Col col={12} md={12}>
                //     <Row>
                //         <Col col={2} className="text-center">
                //             <Avatar src={comment?.profile_image} alt="avatar"/>
                //         </Col>
                //         <div className="col-10">
                //             <h5>{comment?.owner}</h5>
                //             <p>
                //             <span>
                //                 {comment?.content}
                //             </span>
                //             </p>
                //         </div>
                //     </Row>
                // </Col>
                <div>help me!!!</div>
            ))}
        </InfiniteScroll>
    );
}

export default ScrollableList;