import React from 'react';
// icon
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
// elements
import { Container, Button } from '../../../elements';
// style
import './style.scss';

const tabList = ['Text', 'To', 'Video'];

const Summary = () => {
  const [tab, setTab] = React.useState(0);

  React.useEffect(() => {
    const changeTab = setTimeout(
      () => {
        if (tab < 2) {
          setTab((current) => current + 1);
          return;
        }

        setTab(0);
      },
      tab === 1 ? 300 : 1000,
    );

    return () => {
      clearTimeout(changeTab);
    };
  }, [tab]);

  return (
    <section className="section__summary">
      <Container>
        <div className="menu-wrapper">
          <div className="menu-tab">
            {tabList.map((list, idx) => (
              <Button key={idx} onClick={() => setTab(idx)}>
                {list}
              </Button>
            ))}

            <div
              className="show-current-tab"
              style={{ left: `${tab * 160}px` }}
            />
          </div>

          <ul
            className="slide-wrapper"
            style={{ transform: `translateX(-${tab * 480}px)` }}
          >
            <li className="slide-list">
              <TextSnippetOutlinedIcon style={{ fontSize: '200px' }} />
            </li>

            <li className="slide-list">
              <ArrowForwardIcon style={{ fontSize: '100px' }} />
            </li>

            <li className="slide-list">
              <MovieCreationOutlinedIcon style={{ fontSize: '200px' }} />
            </li>
          </ul>
        </div>

        <div className="vertical-divider" />

        <h2 className="description">The easiest way to make videos</h2>
      </Container>
    </section>
  );
};

export default Summary;
