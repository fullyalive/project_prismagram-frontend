import React, { useState } from "react";
import styled from "styled-components";
import Input from "../Components/Input";
import Button from "../Components/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  width: 100%;
  max-width: 350px;
  border-radius: 0px;
`;

const StateChanger = styled(Box)`
  padding: 20px 0px;
  text-align: center;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      border-radius: 3px;

      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      border-radius: 3px;
      margin-top: 10px;
    }
  }
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

export default () => {
  const [action, setAction] = useState("logIn");

  return (
    <Wrapper>
      <Form>
        {action === "logIn" ? (
          <form>
            <Input placeholder={"아이디"} />
            <Input placeholder={"비밀번호"} />
            <Button text={"로그인"} />
          </form>
        ) : (
          <form>
            <Input placeholder={"이름"} />
            <Input placeholder={"성"} />
            <Input placeholder={"이메일"} />
            <Input placeholder={"아이디"} />
            <Input placeholder={"비밀번호"} />
            <Button text={"회원가입"} />
          </form>
        )}
      </Form>
      <StateChanger>
        {action === "logIn" ? (
          <>
            비회원이신가요?{" "}
            <Link onClick={() => setAction("signUp")}>회원가입</Link>
          </>
        ) : (
          <>
            회원이신가요? <Link onClick={() => setAction("logIn")}>로그인</Link>
          </>
        )}
      </StateChanger>
    </Wrapper>
  );
};
