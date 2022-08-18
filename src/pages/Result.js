import React from "react";

//css in js
import styled from "styled-components";
//import catImage from '../assets/cat.jpg';
import  Button  from "react-bootstrap/Button";
import { ResultData } from "../assets/data/resultdata";
import { useNavigate } from 'react-router-dom';
import { ButtonGroup } from "react-bootstrap";
import KakaoShareButton from "../component/kakaoShareButton";


const Result = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Header>나와 맞는 캔들</Header>
        <Contents>
            <Title>결과 보기</Title>
        <LogoImage>
            <img alt="결과 사진" src={ResultData[0].image} className="rounded-circle" width={350} height={350}></img>
        </LogoImage>
        <Desc>여행시 나와 맞는 찰떡궁합 캔들은 {ResultData[0].name}입니다!</Desc>
        <ButtonGroup>
            <Button style={{fontFamily : "mabinogi", width : 170}} onClick={()=> navigate("/")}>TEST RESET!!</Button>
            <KakaoShareButton />
        </ButtonGroup>
        </Contents>
        </Wrapper>
    )
}

export default Result;

//전체를 감싸줄 wrapper 적용
const Wrapper = styled.div `
height: 100vh;
width: 100%;
`
const Header = styled.div`
font-size: 40pt;
display: flex;
justify-content: center;
align-items: center;
font-family: "mabinogi";
`
const Title = styled.div`
font-size: 30pt;
margin-top: 40px;
font-family: "mabinogi";
`
const LogoImage = styled.div`
margin-top: 10px;
`
const Desc = styled.div`
font-size: 20pt;
margin-top: 20px;
font-family: "mabinogi";
`

const Contents = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;     /* 세로 정렬 */
font-family: "mabinogi";
`
// const ButtonGroup = styled.div`
// display: flex;
// flex-direction: row;
// `