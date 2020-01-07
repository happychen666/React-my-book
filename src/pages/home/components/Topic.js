import React,{Component} from 'react';
import {
    TopicWrapper,
    TopicItem
}from '../style';
class Topic extends Component{
    render(){
        return (

            <TopicWrapper>
                <TopicItem>
                    <img className="topic-pic" src="http://m.imeitou.com/uploads/allimg/2019111010/siaz3nfqyqs.jpeg"/>社会热点
                </TopicItem>
                <TopicItem>
                    <img className="topic-pic" src="http://m.imeitou.com/uploads/allimg/2019111010/siaz3nfqyqs.jpeg"/>社会热点
                </TopicItem>
                <TopicItem>
                    <img className="topic-pic" src="http://m.imeitou.com/uploads/allimg/2019111010/siaz3nfqyqs.jpeg"/>社会热点
                </TopicItem>
                <TopicItem>
                    <img className="topic-pic" src="http://m.imeitou.com/uploads/allimg/2019111010/siaz3nfqyqs.jpeg"/>社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}
export default Topic;