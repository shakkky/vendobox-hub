import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PageHeader from 'Components/PageHeader';
import { PageWrapper } from 'Components/Page';
import Section, { SectionContainer } from 'Components/Section';
import { RowLoader } from 'Components/Loader';
import Table, { TableBody } from 'Components/Table';
import TableRowData from './Components/TableRowData';
import TableHeader from './Components/TableHeader';

// const QUERY_DOWNLOAD_REQUESTS = gql`
//   query queryDownloadRequests {
//     downloadRequests {
//       downloadRequests {
//         id
//         name
//         email
//         is_download_approved
//         has_accepted_terms_and_conditions
//         comments
//         download_link
//         created_at
//       }
//     }
//   }
// `;

const Leads = () => {
  // const { data = {}, loading = true, refetch } = useQuery(
  //   QUERY_DOWNLOAD_REQUESTS
  // );
  // const downloadRequests = data?.downloadRequests?.downloadRequests ?? [];

  const leads = [
    {
      id: 1,
      name: 'Steve Jobs',
      phone: '0200000000',
      email: 'steve.jobs@smith-and-nephew.com',
      company_name: 'Smith & Nephew',
      est_traffic: '20 to 50',
      machine_type: 'Combo',
      notes: 'We would like a combo machine at our Macquarie Park office.',
    },
    {
      id: 2,
      name: 'Steve WithoutJobs',
      phone: '0200000000',
      email: 'steve.withoutjobs@bridgestone.com',
      company_name: 'Bridgestone',
      est_traffic: 'Less than 20',
      machine_type: 'Combo',
      notes: 'We would like a combo machine at our Blacktown garage.',
    },
    {
      id: 3,
      name: 'Mike Tyson',
      phone: '0200000000',
      email: 'mt@bcf.com',
      company_name: 'Boats, Camping, Fishing',
      est_traffic: '20 to 50',
      machine_type: 'Combo',
      notes: null,
    },
  ];

  const loading = false;
  return (
    <PageWrapper title="Leads">
      <PageHeader
        title="Leads"
        subHeading="from the website funnel, partners, etc"
      />

      <Section border={false}>
        <SectionContainer>
          <Table>
            <TableHeader />
            {loading ? (
              <RowLoader col={5} />
            ) : (
              <TableBody>
                {leads?.map(lead => (
                  <TableRowData
                    key={lead.id}
                    lead={lead}
                    // refetch={refetch}
                  />
                ))}
              </TableBody>
            )}
          </Table>
        </SectionContainer>
      </Section>
    </PageWrapper>
  );
};

export default Leads;
