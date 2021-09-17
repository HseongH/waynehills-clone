import React from 'react';
import classNames from 'classnames';
// router
import { Link } from 'react-router-dom';
// elements
import { Container, Button } from '../../elements';
// style
import './style.scss';

type SignInProps = {
  signInStatus: number;
  signIn: () => void;
};

const SignInPresenter: React.FC<SignInProps> = ({ signInStatus, signIn }) => {
  const [visible, setVisible] = React.useState({
    status: false,
    message: '표시',
  });

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signIn();
  };

  const handleToggleVisible = () => {
    const { status } = visible;

    setVisible({
      ...visible,
      status: !status,
      message: status ? '표시' : '숨기기',
    });
  };

  return (
    <main className="signin">
      <section className="section__signin">
        {signInStatus === 2 ? (
          <div className="alert">
            입력하신 이메일과 비밀번호가 일치하지 않습니다.
          </div>
        ) : null}

        <h1 className="signin-logo">
          <img
            src="http://ttv.waynehills.co/assets/i_logo_w_nomal.png"
            alt="ttv waynehills"
          />
        </h1>

        <div className="signin-outer">
          <Link to="/">
            <img
              src="http://ttv.waynehills.co/assets/i_x_g.png"
              alt="close button"
              className="close-btn"
            />
          </Link>

          <div className="signin-inner">
            <h2 className="title">로그인</h2>

            <form id="signin-form" onSubmit={handleSignIn}>
              <div
                className={classNames('enter-area', {
                  failed: signInStatus === 2,
                })}
              >
                <input
                  className={classNames('input--text')}
                  type="email"
                  placeholder="이메일 입력"
                />
              </div>

              <div
                className={classNames('enter-area', {
                  failed: signInStatus === 2,
                })}
              >
                <input
                  className="input--text"
                  type={visible.status ? 'text' : 'password'}
                  placeholder="비밀번호 입력"
                />

                <Button type="button" onClick={handleToggleVisible}>
                  {visible.message}
                </Button>
              </div>

              <div className="forgot-pwd">
                <p>비밀번호를 잊으셨나요?</p>

                <Link to="login">비밀번호 찾기</Link>
              </div>

              <Button size="large" color="purple" type="submit">
                로그인
              </Button>
            </form>

            <div className="save-signin-info">
              <img
                src="http://ttv.waynehills.co/assets/i_select_small_g.png"
                alt="checkbox"
                className="checkbox"
              />
              로그인 정보 저장
            </div>

            <div className="auth">
              <div className="auth__kinds">
                <img
                  src="http://ttv.waynehills.co/assets/i_google_b.png"
                  alt="google logo"
                />
                구글로 로그인하기
              </div>

              <div className="vertical-dividor" />

              <div className="auth__kinds">
                <img
                  src="http://ttv.waynehills.co/assets/i_facebook_b.png"
                  alt="facebook logo"
                />
                페이스북으로 로그인하기
              </div>
            </div>

            <div className="link-to-signup-page">
              <p>회원가입하고 영상을 제작해보세요!</p>

              <Button size="large" color="black" disabled>
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <Container>
          <div className="footer-block-1">
            <strong className="language">한국어</strong>
            <span>자주 묻는 질문</span>
            <span>이용약관</span>
            <span className="copyright">
              <img
                src="http://ttv.waynehills.co/assets/i_copyright.png"
                alt="copyright"
              />
              Copyright all rights reserved
            </span>
          </div>

          <div className="footer-block-2">
            <img
              src="http://ttv.waynehills.co/assets/i_logo_footer.png"
              alt="waynehills"
              className="footer-logo"
            />

            <span className="sns">
              <img
                src="http://ttv.waynehills.co/assets/i_sns_facebook.png"
                alt="facebook"
                className="sns-icon"
              />

              <img
                src="http://ttv.waynehills.co/assets/i_sns_youtube.png"
                alt="youtube"
                className="sns-icon"
              />

              <img
                src="http://ttv.waynehills.co/assets/i_sns_instagram.png"
                alt="instagram"
                className="sns-icon"
              />
            </span>
          </div>
        </Container>
      </footer>
    </main>
  );
};

export default SignInPresenter;
