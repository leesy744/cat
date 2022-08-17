
import React from "react";
import styled from "styled-components";
import { ProgressBar, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { QuestionData } from "../assets/data/questiondata";


const Question = () => {

    const [questionNo, setQuestionNo] = React.useState(0);  //버튼 누를 시 progressBar 상태 한칸씩 증가 
    const [totalScore, setTotalScore] = React.useState([
        {id: "1211", score:0},
        {id: "EI", score:0},
        {id: "EI", score:0},
        {id: "EI", score:0},
    ])
    const navigate = useNavigate(); //useNavigate() 이용 선언
    
    console.log('totalScore', totalScore);

    //숫자로 넘겼으니 no라는 변수로 받아줌 / button click 이벤트 발생시
    const handleClickButton = (no, type) => {
        const newScore = totalScore.map((s) =>
        s.id === type ? {id:s.id, score: s.score + no} : s
        );

        setTotalScore(newScore);
        //다음 문제로 문제수 증가
        if(QuestionData.length !== questionNo + 1){
            setQuestionNo(questionNo + 1);
        }else{
            //결과 페이지 이동
            navigate("/result");
        }


        // if(type === "1211"){
        //     //기존 스코어에 더할 값 계산 (기존 값 + 배점)
        //     const addScore = totalScore[0].score + no;
        //     //새로운 객체
        //     const newObject = {id: "1211", score: addScore};
        //     //splice 함수 통해서 새로운 객체를 해당 객체 자리에 넣어줌
        //     totalScore.splice(0,1, newObject); //0번째 인덱스에 첫번째 요소 지워주고 새 객체를 넣는다
        // }else if (type === "EI") {
        //      //기존 스코어에 더할 값 계산 (기존 값 + 배점)
        //      const addScore = totalScore[0].score + no;
        //      //새로운 객체
        //      const newObject = {id: "1211", score: addScore};
        //      //splice 함수 통해서 새로운 객체를 해당 객체 자리에 넣어줌
        //      totalScore.splice(1,1, newObject); //0번째 인덱스에 첫번째 요소 지워주고 새 객체를 넣는다
        // }
    }
    // const handleClickButtonB = (no) => {
    //     if(type === "1211"){
    //         //기존 스코어에 더할 값 계산 (기존 값 + 배점)
    //         const addScore = totalScore[0].score + no;
    //         //새로운 객체
    //         const newObject = {id: "1211", score: addScore};
    //         //splice 함수 통해서 새로운 객체를 해당 객체 자리에 넣어줌
    //         totalScore.splice(0,1, newObject); //0번째 인덱스에 첫번째 요소 지워주고 새 객체를 넣는다
    //     }else if (type === "EI") {
    //          //기존 스코어에 더할 값 계산 (기존 값 + 배점)
    //          const addScore = totalScore[0].score + no;
    //          //새로운 객체
    //          const newObject = {id: "1211", score: addScore};
    //          //splice 함수 통해서 새로운 객체를 해당 객체 자리에 넣어줌
    //          totalScore.splice(1,1, newObject); //0번째 인덱스에 첫번째 요소 지워주고 새 객체를 넣는다
    //     }

    //     setQuestionNo(questionNo + 1);
    // }

    return (
        <Wrapper>
            <ProgressBar striped variant="danger" now={(questionNo /QuestionData.length) * 100} style={{marginTop:'20px'}}></ProgressBar> {/* %니까 *100 */}
            <Title>{QuestionData[questionNo].title}</Title>
            <ButtonGroup>
                {/* button click시 ProgressBar 증가 */}
                <Button onClick = {()=>handleClickButton(1, QuestionData[questionNo].type)} style={{width:"40%", minHeight:"200px", fontSize: "15pt"}}>{QuestionData[questionNo].answera}</Button>
                <Button onClick = {()=>handleClickButton(0, QuestionData[questionNo].type)} style={{width:"40%", minHeight:"200px", fontSize: "15pt", marginLeft: "20px"}}>{QuestionData[questionNo].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default Question;

/* Component */
const Wrapper = styled.div`
height: 100vh;
width: 100%;
`
const Title = styled.div`
font-size: 40pt;
text-align: center;
font-family: "mabinogi";
`
const ButtonGroup = styled.div`
display: flex;
flex-direction : row;
align-items : center;
justify-content : center;
font-family: "mabinogi";
`