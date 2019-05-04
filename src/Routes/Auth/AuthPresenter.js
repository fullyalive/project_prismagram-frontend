import React from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({
  action,
  username,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit,
  secret
}) => (
  <Wrapper>
    <Form>
      {action === "logIn" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"이메일"} {...email} type="email" />
          <Button text={"로그인"} />
        </form>
      )}
      {action === "signUp" && (
        <form onSubmit={onSubmit}>
          <Input placeholder={"이름"} {...firstName} />
          <Input placeholder={"성"} {...lastName} />
          <Input placeholder={"이메일"} {...email} type="email" />
          <Input placeholder={"닉네임"} {...username} />
          <Button text={"회원가입"} />
        </form>
      )}
      {action === "confirm" && (
        <form onSubmit={onSubmit}>
          <Input
            placeholder="이메일로 전송된 인증코드를 입력해주세요"
            required
            {...secret}
          />
          <Button text={"확인"} />
        </form>
      )}
    </Form>

    {action !== "confirm" && (
      <StateChanger>
        {action === "logIn" ? (
          <>
            회원이 아니신가요?{" "}
            <Link onClick={() => setAction("signUp")}>회원가입</Link>
          </>
        ) : (
          <>
            회원이신가요? <Link onClick={() => setAction("logIn")}>로그인</Link>
          </>
        )}
      </StateChanger>
    )}
  </Wrapper>
);
