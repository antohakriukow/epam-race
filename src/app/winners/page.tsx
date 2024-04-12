'use client';
import { FC } from 'react';
import { useWinners } from './useWinners';
import { Body, Caption, Header, Row, Table, Car } from '@/components/ui';

const WinnersPage: FC = () => {
  const { winners, isLoading, isSuccess } = useWinners();
  const headerTitles = ['№', 'car', 'name', 'wins', 'best time (seconds)'];

  return (
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
  );
};
export default WinnersPage;
