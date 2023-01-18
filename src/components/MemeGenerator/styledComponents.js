import styled from "styled-components";

export const MainContainer = styled.div`
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
gap:60px;
`
export const FormCont = styled.form`
height:70vh;
width:400px
`
export const MainHeading = styled.h1`
color: #35469c;
font-size:40px;
`
export const LabelEl = styled.label`
font-size:13px;
font-weight:500;
color:  #7e858e;
`
export const InputEl = styled.input`
width:100%;
height:39px;
border-radius:4px;
border:1px solid #7e858e;
margin:10px 0px;
color:#5a7184;
outline:none;
font-weight:500;
padding:4px 10px;
font-size:15px;
`

export const ButtonEl = styled.button`
background-color: #0b69ff;
height:45px;
width:140px;
border:none;
border-radius:6px;
color:white;
font-weight:600;
font-size:14px;
cursor:pointer;
`
export const SelectEl= styled.select`
width:100%;
height:39px;
border-radius:4px;
border:1px solid #7e858e;
margin:10px 0px;
color: #1e293b;
outline:none;
font-weight:500;
padding:4px 10px;
font-size:15px;
`
export const OptionEl = styled.option`
`

export const DisplayCont = styled.div`
height:300px;
width:450px;
background-image:url(${(props)=>props.bgImg});
background-size:cover;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

export const DisplayText = styled.p`
font-size:${(props)=>props.fontSizeText};
color:#ffffff;
font-weight:500;
` 