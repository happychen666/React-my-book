import React,{PureComponent} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends PureComponent{
    render(){
        const {title,content} = this.props;
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html:content}}></Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        //获取路由传过来的参数
        const params = this.props.match.params;
        this.props.getDetail(params.id);
    }    
}

const mapStateToProps = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

const mapDispatchToProps = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));