import PropTypes from 'prop-types';
import { Container } from 'components/App/App.styled';
import SectionStyled from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionStyled className={`section`}>
      <Container className="container">
        {title && <h3 className={`section__title`}>{title}</h3>}
        {children}
      </Container>
    </SectionStyled>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
