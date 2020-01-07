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
    width:240px;
    float:right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    margin-left:-18px;
    padding:20px 0 10px 0;
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