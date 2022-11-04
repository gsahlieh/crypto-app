import React from 'react'
import CoinSearch from '../components/CoinSearch'
import TrendingCoins from '../components/TrendingCoins'
import Home3d from '../components/three/Home3d'

function HomePage({coins}) {
  return (
    <div>
      <div className='h-[200px]'>
        <Home3d />
      </div>
      <CoinSearch coins={coins} />
      <TrendingCoins />
    </div>
  )
}

export default HomePage