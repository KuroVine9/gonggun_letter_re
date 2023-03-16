import React from 'react';
import handImg0 from "./resource/hand0.png"
import handImg1 from "./resource/hand1.png"
import handImg2 from "./resource/hand2.png"

function Letter(params: { state: boolean }) {
    document.title = "편지답장"
    const letter = (
        <div className="Letter" style={{width: "1000px", border: "1px solid black", margin: "10px"}}>
            <header className="Letter-header">
                <h3 id="Letter-title">
                    RE: 편지답장
                </h3>
            </header>
            <div id="Letter-main">
                <p>
                    원래 챕터1 다 보낼려고했느데 웹페이지 자꾸 에러나서 그냥 첫장만보냄ㅋㅋ;
                </p>
                <p>
                    아무튼 손패 6개 답 적어드림
                </p>
                <ul id="answer-hand-list">
                    <li>
                        <img src={handImg0}/>
                        <p>234m 2233455p 234s 쯔모 4p | 7판 6000-12000</p>
                    </li>
                    <li>
                        <img src={handImg1}/>
                        <p>678m 3455678p 678s 쯔모 5p | 6판 6000-12000</p>
                    </li>
                    <li>
                        <img src={handImg2}/>
                        <p>55567m 567p 34567s 쯔모 2s | 9판 8000-16000</p>
                    </li>
                </ul>
                <p>
                    아니이거 역이 너무 구체적이라 다 비슷비슷하게 나오는데?ㅋㅋ
                </p>
                <p>
                    자원해서 군대간사람 너포함해서 몇명있는데 다 후회하더라... 나중에 휴가나올때 말해주셈 어디 놀러가자
                </p>
                <p>
                    나도요즘 바빠서 vr마작도 못치고있넹..암튼 몸 다치지말고 잘 지내 나중에 운기회복법 뒷내용 보내줄게ㅋㅋ
                </p>
            </div>
        </div>
    );
    return params.state ? letter : <div></div>
}

export default Letter;
