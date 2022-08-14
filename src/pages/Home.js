import React from "react";

//css in js
import styled from "styled-components";
import catImage from '../assets/cat.jpg';
import  Button  from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom';

const Home = () => {
    //함수 선언
    const navigate = useNavigate();

    //button click 시 
    const handleClickButton = () => {
        navigate('/question');  //여기로 이동
    }
    return (
        <Wrapper>
        <Header>헤더</Header>
        <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
            <img src={catImage} className="rounded-circle" width={350} height={350}></img>
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button style={{fontFamily : "mabinogi"}} onClick={handleClickButton}>TEST START!!</Button>
        </Contents>
        </Wrapper>
    )
}

export default Home;

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