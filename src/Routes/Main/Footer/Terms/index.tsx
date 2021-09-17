import React from 'react';
// material
import ClickAwayListener from '@mui/material/ClickAwayListener';
// elements
import { Button } from '../../../../elements';
// style
import './style.scss';

type TermsProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Terms = ({ setOpen }: TermsProps) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <article className="terms">
      <ClickAwayListener onClickAway={handleClose}>
        <div className="terms-container">
          <h2 className="main-title">Terms of Use</h2>

          <h3 className="sub-title">Shutterstock</h3>

          <p className="contents">
            ● Content is for digital use within Wayne Hills Ventures only and
            may not be used for printing.
            <br />● You may not use the content as a trademark for a business.
            <br />● You may not portray a person in a way that may be offensive,
            including: in connection with adult-oriented services or ads for
            dating services;
            <br />
            in connection with the promotion of tobacco products; in connection
            with political endorsements; with pornographic, defamatory,
            unlawful, offensive or immoral content; and as suffering from, or
            being treated for, a physical or mental ailment.
            <br />● You may only use the content in campaigns and content
            created on Wayne Hills Ventures, and not with other website or
            content services.
          </p>

          <div className="button-wrapper">
            <Button onClick={handleClose}>Got It!</Button>
          </div>
        </div>
      </ClickAwayListener>
    </article>
  );
};

export default Terms;
