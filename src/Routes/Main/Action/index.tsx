import React from 'react';
import classNames from 'classnames';
// elements
import { Container, Button } from '../../../elements';
// style
import './style.scss';

const Action = () => {
  const [value, setValue] = React.useState('');
  const [step, setStep] = React.useState(0);

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

            <div className={classNames('content', { visible: step === 0 })}>
              <textarea
                className="scripting-enter-area"
                value={value}
                onChange={({ target }) => setValue(target.value)}
                placeholder="Put your script here 500~5,000 letters."
              />

              <p className="number-of-characters">{value.length} letters</p>

              <Button color="white">Convert</Button>
            </div>
          </div>

          <div className="action">
            <div className="action-step">
              <span className="step">2</span>
              <h3 className="step-title">Matching videos</h3>
            </div>

            <div className={classNames('content', { visible: step === 1 })}>
              {/* <textarea
              value={value}
              onChange={({ target }) => setValue(target.value)}
              placeholder="Put your script here 500~5,000 letters."
            />
            <p className="number-of-characters">{value.length} letters</p>
            <Button color="white">Convert</Button> */}
            </div>
          </div>

          <div className="action">
            <div className="action-step">
              <span className="step">3</span>
              <h3 className="step-title">Encoding</h3>
            </div>

            <div className={classNames('content', { visible: step === 2 })}>
              {/* <textarea
              value={value}
              onChange={({ target }) => setValue(target.value)}
              placeholder="Put your script here 500~5,000 letters."
            />
            <p className="number-of-characters">{value.length} letters</p>
            <Button color="white">Convert</Button> */}
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
