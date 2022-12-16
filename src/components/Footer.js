import styled from "styled-components"
import { CircularProgressbar, buildStyles } from'react-circular-progressbar';
import { Link } from "react-router-dom";
import axios from "axios";
export default function Footer() {
    const percentage = 66;
    return (
        <Rodapé>
            <CircularProgressbar
                className="barraprogresso"
                value={percentage} text={`${percentage}%`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    textColor: "black",
                    pathColor: "white",
                    textSize: '16px',
                    backgroundColor: " #52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })} />
            <Link to='/habitos'><p>Hábitos</p></Link>
            <Link to='/historico'><p>Histórico</p></Link>
        </Rodapé>
    )
}

export const Rodapé = styled.div`
box-sizing: border-box;
padding-left: 30px;
padding-right: 30px;
width: 100%;
height: 70px;
position:fixed;
left: 0px;
bottom: 0px;
background: #FFFFFF;
display:flex;
justify-content: space-between;
align-items:center;

p{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
}
`