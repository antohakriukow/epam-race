'use client';
import { FC } from 'react';
import { useWinners } from '@/shared/hooks';
import { Body, Caption, Header, Row, Table, Car } from '@/components/ui';
import PageSelector from '@/components/ui/page-selector/PageSelector';

const WinnersPage: FC = () => {
  const { winners, isLoading, isSuccess, page, totalCount, setPage } =
    useWinners();
  const headerTitles = ['№', 'car', 'name', 'wins', 'best time (seconds)'];

  return (
    <main>
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
