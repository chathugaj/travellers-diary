import {Col, Row, Spinner} from "react-bootstrap";
import {Avatar} from "../../components";
import {useEffect, useState} from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollableList from "./ScrollableList";

const CommentList = ({currentUser, post}) => {
    const [data, setData] = useState({results: []})
    const [previousData, setPreviousData] = useState({results: []});
    const [next, setNext] = useState(null);
    const [count, setCount] = useState(0);

    const fetchMoreData = async () => {
        console.log("calling fetchMore")
        const { data: curr } = await axios(next ? next : `comments/?page=1&post=${post?.id}`);
        setData( (prevData) => {
            return {
                // results: [...prevData?.results || [], ...curr?.results || []]
                results: [...new Set([...prevData?.results, ...curr?.results])]
            }
        });
        setPreviousData(data)
        // console.log(curr?.next)
        setNext(curr?.next)
        setCount(curr?.count)
        // console.log(curr)
    }

    useEffect(() => {
        if (post) {
            console.log("inside useeffect if")
            fetchMoreData()
        }
    }, [post]);

    const mergeData = (prev, curr) => {
        const mergedList = [...new Set([...prev?.results, ...curr?.results])];
        return {results: mergedList};
    }

    // useEffect(() => {
    //     const fetchMoreData = async () => {
    //         const curr = await axios(`comments/?page=${page}&post=${post?.id}`);
    //         setPreviousData(data)
    //         setData(curr)
    //         setCount(curr?.count)
    //     }
    //     fetchMoreData();
    // }, [post])

    // useEffect(() => {
    //     console.log(">>>>>>>>>>>>>>>>>>>>")
    //     const mergedList = [...new Set([...previousData?.results, ...data?.results])];
    //     setData({results: mergedList});
    // }, [previousData, data]);

    console.log(data)
    return (
        <Row id="scrollableList">
            {/*{post && <ScrollableList dataLoad={fetchMoreData} data={data}></ScrollableList>}*/}
            {post && data && data?.results?.length > 0 && <InfiniteScroll
                dataLength={data?.count}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{textAlign: "center"}}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {data?.results?.map((comment, index) => (
                    <Col col={12} md={12}>
                        <Row>
                            <Col col={2} className="text-center">
                                <Avatar src={comment?.profile_image} alt="avatar"/>
                            </Col>
                            <div className="col-10">
                                <h5>{comment?.owner}</h5>
                                <p>
                                <span>
                                    {comment?.content}
                                </span>
                                </p>
                            </div>
                        </Row>
                    </Col>
                    // <div>help me!!!</div>
                ))}
            </InfiniteScroll>}
        </Row>
    );
}

export default CommentList;