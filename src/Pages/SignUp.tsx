import styled from "styled-components";
import { VerticalWrap } from "@Components/Layout";
import { FormError, VerticalForm } from "@Components/Form";
import InputWrap from "@Components/Input";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface ISignUpForm {
  name: string;
  email: string;
  password: string;
  agree: boolean;
}
export default function SignUp() {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignUpForm>({
    mode: "onChange",
  });

  return (
    <>
      <VerticalWrap />
      <VerticalForm>
        <Wrap>
          <Title>SignUp</Title>
          <InputBox>
            <InputWrap>
              <input
                {...register("name", {
                  required: "User name is required",
                })}
                className="inp"
                type="text"
                placeholder="User name"
                autoComplete="off"
              />
            </InputWrap>
            {errors.name?.message && (
              <FormError message={errors.name.message} />
            )}
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
            <CheckBoxWrap>
              <input type="checkbox" id="agree" name="agree" />
              <label htmlFor="agree">I agree all statements in</label>
              <Link to="/">Terms of service</Link>
            </CheckBoxWrap>
          </InputBox>
          <ButtonWrap>
            <Button>Sign up</Button>
          </ButtonWrap>
        </Wrap>
      </VerticalForm>
    </>
  );
}

const Wrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  padding: 40px 50px 45px 50px;
  font-weight: 600;
  font-size: 54px;
  line-height: 65px;
`;
const InputBox = styled.div`
  flex: 1;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 8px;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid #6a6a6a;
    cursor: pointer;
    transition: background 0.2s;
  }

  input[type="checkbox"]:checked {
    background: ${(props) => props.theme.accentColor};
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }

  label,
  a {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
    color: #6a6a6a;
  }
  a {
    margin-left: 5px;
    text-decoration: underline;
    color: ${(props) => props.theme.accentColor};
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  height: 50px;
`;
const Button = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  font-size: 14px;
  font-weight: 400;
  background-color: #2f2f2f;
  color: #ffffff;
`;
