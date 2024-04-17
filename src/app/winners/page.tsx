'use client';
import { FC } from 'react';
import { Body, Caption, Header, Row, Table, Car } from '@/components/ui';
import PageSelector from '@/components/ui/page-selector/PageSelector';
import Selectors from './selectors/Selectors';
import { useWinnersPage } from './useWinnersPage';

const WinnersPage: FC = () => {
  const {
    headerTitles,

    winners,
    isLoading,
    isSuccess,
    page,
    totalCount,
    setPage,

    sortParam,
    sortOrder,
    setSortParam,
    setSortOrder,
  } = useWinnersPage();

  return (
    <main>
      <Selectors
        sortParam={sortParam}
        setSortParam={setSortParam}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <Table>
        <Caption title='winners' />
        <Header headerTitles={headerTitles} />
        {isLoading || !isSuccess || !winners?.length ? null : (
          <Body>
            {winners.map((winner) => (
              <Row
                key={winner.id}
                rowData={[
                  winner.id,
                  <Car
                    key={winner.id}
                    color={winner.color}
                  />,
                  winner.name,
                  winner.wins,
                  winner.time,
                ]}
              />
            ))}
          </Body>
        )}
      </Table>
      <PageSelector
        type='winners'
        page={page}
        setPage={setPage}
        totalCount={totalCount}
      />
    </main>
  );
};
export default WinnersPage;
