import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends Component{
    render(){
        const {list,articlePage,getMoreList} = this.props;
        return (
            <div>
                {list.map((item,index)=>{
                    return (
                        <ListItem key={index}>
                            <img className="pic" src={item.get('imgUrl')}/>
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })}
                <LoadMore onClick={()=>{getMoreList(articlePage)}}>加载更多</LoadMore>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    list:state.getIn(['home','articleList']),
    articlePage:state.getIn(['home','articlePage'])
})

const mapDispatchToProps = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(List);