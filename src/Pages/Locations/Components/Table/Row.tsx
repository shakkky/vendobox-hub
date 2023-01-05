import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-weight: lighter;
  background-color: white;
  border-radius: 8px;
  color: ${p => p.theme.colors.offBlack};

  box-shadow: 1px 1px 2px #aaa;

  display: flex;
  flex-direction: column;

  margin: 16px 0;

  overflow: auto;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 22px;
`;

type Location = {
  name: string;
  photo: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
};

const TableRowBody = ({ location }: { location: Location }) => {
  const { name, photo, contact_name, contact_phone, contact_email } = location;
  return (
    <Wrapper>
      <Image src={photo} alt={`${name} company`}></Image>
      <Content>
        <div>
          <b>{name}</b>
        </div>
        <div>{contact_name}</div>
        <div>{contact_phone}</div>
        <div>{contact_email}</div>
      </Content>
    </Wrapper>
  );
};

TableRowBody.propTypes = {
  location: PropTypes.object.isRequired,
};

export default TableRowBody;
