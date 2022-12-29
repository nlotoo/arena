
import React from 'react'

import { Bracket, RoundProps, Seed, SeedItem, SeedTeam, RenderSeedProps } from 'react-brackets';

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not


  console.log(seed)


  return (
    <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 12 }}>
      <SeedItem>
        <div>
          <SeedTeam>{seed.teams[0]?.name || 'NO TEAM '}</SeedTeam>
          <SeedTeam>{seed.teams[1]?.name || 'NO TEAM '}</SeedTeam>
        </div>
      </SeedItem>
    </Seed>
  );
};

export const BracketComponent2 = () => {
  const rounds = [
    {
      title: 'Round one',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 4,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 6,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
      ],
    },
    {
      title: 'Round two',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 4,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        },
      ],
    },
    {
      title: 'Round three',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: 'Team C' }, { name: 'Team D' }],
        }
      ],
    },
    {
      title: 'Round three',
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: 'Team A' }, { name: 'Team B' }],
        },
      ],
    }
  ];
  return <Bracket rounds={rounds} renderSeedComponent={CustomSeed} />;
};