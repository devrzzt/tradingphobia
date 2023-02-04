import { getFixtures } from '@/api/getFixtures'
import { IFixtures } from '@/models/fixtures'
import React from 'react'
import ContainerCardFixtures from './ContainerCardFixtures'
import ContainerFixtures from './ContainerFixtures'

const Fixtures = async () => {
  const { data }: { data: IFixtures[] } = await getFixtures()

  return (
    <>
      <ContainerFixtures />
      <ContainerCardFixtures fixtures={data} />
    </>
  )
}

export default Fixtures
