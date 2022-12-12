import styled from "styled-components";
import { VerticalWrap } from "@Components/Layout";
import { FormError, VerticalForm } from "@Components/Form";
import InputWrap from "@Components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface ILoginForm {
  email: string;
  password: string;
}
export default function Login() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    mode: "onChange",
  });

  const onCompleted = () => {
    const { email, password } = getValues();
    // TODO: EXECUTE REACT QUERY.
    console.log(getValues());
    alert(isValid);
  };

  return (
    <>
      <VerticalWrap />
      <form onSubmit={handleSubmit(onCompleted)}>
        <VerticalForm>
          <LoginFormBox>
            <LoginTitle>Login</LoginTitle>
            <LoginInput>
              <InputWrap>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  className="inp"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </InputWrap>
              {errors.email?.message && (
                <FormError message={errors.email.message} />
              )}
              <InputWrap>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 10,
                      message: "Password must be more than 10 chars.",
                    },
                  })}
                  className="inp"
                  type="password"
                  placeholder="Password"
                />
              </InputWrap>
              {errors.password?.message && (
                <FormError message={errors.password.message} />
              )}
            </LoginInput>
          </LoginFormBox>
          <LoginBtnBox>
            <LoginBtn as="button">Login</LoginBtn>
            <LoginBtn to="/signup" bgcolor="#EFF2F1" color="#2F2F2F">
              SignUp
            </LoginBtn>
          </LoginBtnBox>
        </VerticalForm>
      </form>
    </>
  );
}

const LoginFormBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px 50px;
`;
const LoginTitle = styled.h1`
  margin-bottom: 45px;
  font-weight: 600;
  font-size: 54px;
  line-height: 65px;
`;
const LoginInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const LoginBtnBox = styled.div`
  display: flex;
  height: 50px;
`;
const LoginBtn = styled(Link)<{ bgcolor?: string; color?: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  font-size: 14px;
  font-weight: 400;
  background-color: ${(props) => props.bgcolor || "#2F2F2F"};
  color: ${(props) => props.color || "#FFFFFF"};
`;
