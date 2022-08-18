import React from 'react';
import  Button  from "react-bootstrap/Button";
const {Kakao} = window;

const KakaoShareButton = () => {
    const url = "/"
    const resultUrl = window.location.href;

    console.log('ddd', resultUrl, url)

    //권한 설정, 부여된 내 자바스크립트키 설정
    React.useEffect( ()=>{
        //여러번 인증 방지하기 위해
        Kakao.cleanup();

        Kakao.init("6396712b3c5ac158b555fcb591e7ff83");

        //중복 인증 방지 콘솔 확인
        console.log(Kakao.isInitialized());
    }, []);

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '테스트 결과',
          description: '나와 잘 맞는 고양이는 ㅇㅇㅇ 입니다',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            androidExecutionParams: 'test',
          },
        },
        buttons: [
          {
            title: '테스트 하러 가기',
            link: {
              mobileWebUrl: url,
            },
          },
        ]
      });
     
    return ( <Button style={{fontFamily : "mabinogi", width : 170, marginLeft:'20px' }} >카카오톡 공유</Button>)
}
export default KakaoShareButton;
