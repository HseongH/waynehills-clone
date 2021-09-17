import React from 'react';
// type
import { MainProps } from '../MainPresenter';
// elements
import { Container, Button } from '../../../elements';
// style
import './style.scss';

const Action = ({ getVideoList }: MainProps) => {
  const [value, setValue] = React.useState('');

  return (
    <section className="section__action">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        className="outer-border"
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#000" />
      </svg>

      <div className="action__wrapper">
        <Container>
          <div className="action">
            <div className="action-step">
              <span className="step">1</span>
              <h3 className="step-title">Scripting</h3>
            </div>

            <div className="content">
              <textarea
                className="scripting-enter-area"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                placeholder="Put your script here 500~5,000 letters."
              />

              <p className="number-of-characters">{value.length} letters</p>

              <Button color="white" size="middle" onClick={getVideoList}>
                Convert
              </Button>
            </div>
          </div>

          <div className="action">
            <div className="action-step">
              <span className="step">2</span>
              <h3 className="step-title">Matching videos</h3>
            </div>
          </div>

          <div className="action">
            <div className="action-step">
              <span className="step">3</span>
              <h3 className="step-title">Encoding</h3>
            </div>
          </div>
        </Container>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        className="outer-border"
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#000"></path>
      </svg>
    </section>
  );
};

export default Action;
