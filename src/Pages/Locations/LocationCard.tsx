import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { round } from 'lodash';
import Avatar from 'Components/Avatar';

type Location = {
  name: string;
  photo: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  address_slug: string;
  address: {
    street_number: number;
    street_name: string;
    street_type: string;
    suburb: string;
    state: string;
  };
  revenue: number;
  total_revenue: number;
  next_restock: {
    operator: {
      first_name: string;
      last_name: string;
      photo: string;
    };
  };
};

/**
 * ---Header
 * $$ earned over the last week
 *
 * -- Body
 * Name
 * Address
 *
 * ----Footer
 * Amount of money earned all-time
 * person restocking the machines at this location next
 */

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

  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 4px #aaa;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 22px;
  border-bottom: 1px solid lightgrey;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
`;

const Revenue = styled.div`
  font-size: 1rem;
  color: ${p => p.theme.colors.jade};
  font-weight: 600;
  margin-right: 0.2ch;
`;

const Address = styled.div`
  color: ${p => p.theme.colors.regentGrey};
`;

const Footer = styled.div`
  padding: 8px 22px;
  font-size: 0.8rem;
  font-weight: 600;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MarginTop = styled.div`
  margin-top: 8px;
`;

const LocationCard = ({ location }: { location: Location }) => {
  const { push } = useHistory();
  const {
    revenue,
    address_slug,
    name,
    photo,
    total_revenue,
    next_restock,
  } = location;
  const { operator } = next_restock;
  return (
    <Wrapper>
      <Image src={photo} alt={`${name} company`}></Image>
      <Content>
        <Rows>
          <Revenue>${round(revenue, 2) / 100}</Revenue>
          /week
        </Rows>
        <MarginTop>
          <div>
            <b>{name}</b>
          </div>
          <Address>{address_slug}</Address>
        </MarginTop>
      </Content>
      <Footer>
        <MarginTop>${round(total_revenue, 2) / 100}/total</MarginTop>
        <Avatar
          firstName={operator.first_name}
          lastName={operator.last_name}
          photo={operator.photo}
          size={32}
          push={push}
        />
      </Footer>
    </Wrapper>
  );
};

LocationCard.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationCard;
