import styled from '@emotion/styled'

export default styled.main`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${props => (props.center ? 'center' : null)};
  align-items: ${props => (props.center ? 'center' : null)};
`
