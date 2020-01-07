import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    margin:0 auto;
    width:960px;

`

export const HomeLeft = styled.div`
    margin-left:15px;
    padding-top:30px;
    width:625px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    margin-left:-18px;
    padding:20px 0 10px 0;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float:left;
    margin-left:18px;
    margin-bottom:18px;
    height:32px;
    line-height:32px;
    font-size:14px;
    background:#f7f7f7;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    .topic-pic{
        display:float;
        margin-right:10px;
        float:left;
        width:32px;
        height:32px;
    }
`
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
   width:500px;
   float:left;
   .title{
       line-height:27px;
       font-size:18px;
       font-weight:bold;
       color:#333;
   }
   .desc{
       font-size:13px;
       line-height:24px;
       color:#999;
   }
`
export const RecommendWrapper = styled.div`
   margin:30px 0;
   width:280px;
`

export const RecommendItem = styled.div`
    margin-bottom:10px;
   width:280px;
   height:50px;
   border-bottom:1px solid #dcdcdc;
   background:url(${(props) => props.imgUrl});
   background-size:cover;
`

export const LoadMore = styled.div`
   margin:40px 0;
   width:100%;
   height:40px;
   line-height:40px;
   background:#a5a5a5;
   text-align:center;
   border-radius:20px;
   color:#fff;
   cursor:pointer;
`

export const BackTop = styled.div`
   
`