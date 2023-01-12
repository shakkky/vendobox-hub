import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { round } from 'lodash';
import { queryLocations_locations_locations } from 'schema/queryLocations';

import Avatar from 'Components/Avatar';

const LocationCard = ({
  location,
}: {
  location: queryLocations_locations_locations;
}) => {
  const { push } = useHistory();
  const { address, name, image_url, revenue, next_restock } = location;
  const { google_address } = address ?? {};
  const { operator } = next_restock ?? {};
  const { week, all_time } = revenue ?? {};
  return (
    <Wrapper>
      <Image src={image_url} alt={`${name} company`}></Image>
      <Content>
        <Rows>
          <Revenue>${round(week ?? 0, 2) / 100}</Revenue>
          /week
        </Rows>
        <MarginTop>
          <div>
            <b>{name}</b>
          </div>
          <Address>{google_address}</Address>
        </MarginTop>
      </Content>
      <Footer>
        <MarginTop>${round(all_time ?? 0, 2) / 100}/total</MarginTop>
        {operator && (
          <Avatar
            firstName={operator.first_name}
            lastName={operator.last_name}
            // photo={operator.photo}
            size={32}
            push={push}
          />
        )}
      </Footer>
    </Wrapper>
  );
};

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

LocationCard.propTypes = {
  location: PropTypes.object.isRequired,
};

export default LocationCard;
