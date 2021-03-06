import memoize from 'memoizee'
import BigNumber from 'bignumber.js'

import store from 'src/store'

import selectMyPositions from 'modules/my-positions/selectors/my-positions'
import { closePosition } from 'modules/my-positions/actions/close-position'

import { ZERO } from 'modules/trade/constants/numbers'

// import { augur } from 'services/augurjs'
import { formatEtherTokens, formatShares, formatNumber } from 'utils/format-number'

export default function () {
  const myPositions = selectMyPositions()
  return generateMarketsPositionsSummary(myPositions)
}

export const generateOutcomePositionSummary = memoize((adjustedPosition) => {
  if (!adjustedPosition) {
    return null
  }
  const outcomePositions = Array.isArray(adjustedPosition) ? adjustedPosition.length : 1
  const qtyShares = accumulate(adjustedPosition, 'numShares')
  const realized = accumulate(adjustedPosition, 'realizedProfitLoss')
  const unrealized = accumulate(adjustedPosition, 'unrealizedProfitLoss')
  // todo: check if this calculation is correct for UI
  const averagePrice = accumulate(adjustedPosition, 'averagePrice')
  const isClosable = !!new BigNumber(qtyShares || '0').toNumber() // Based on position, can we attempt to close this position

  const marketId = Array.isArray(adjustedPosition) && adjustedPosition.length > 0 ? adjustedPosition[outcomePositions-1].marketId : null
  const outcomeId = Array.isArray(adjustedPosition) && adjustedPosition.length > 0 ? adjustedPosition[outcomePositions-1].outcome : null

  return {
    // if in case of multiple positions for same outcome use the last one, marketId and outcome will be the same
    marketId,
    outcomeId,
    ...generatePositionsSummary(outcomePositions, qtyShares, averagePrice, realized, unrealized),
    isClosable,
    closePosition: (marketId, outcomeId) => {
      store.dispatch(closePosition(marketId, outcomeId))
    }
  }
}, { max: 50 })

export const generateMarketsPositionsSummary = memoize((markets) => {
  if (!markets || !markets.length) {
    return null
  }
  let qtyShares = ZERO
  let totalRealizedNet = ZERO
  let totalUnrealizedNet = ZERO
  const positionOutcomes = []
  markets.forEach((market) => {
    market.outcomes.forEach((outcome) => {
      if (!outcome || !outcome.position || !outcome.position.numPositions || !outcome.position.numPositions.value) {
        return
      }
      qtyShares = qtyShares.plus(new BigNumber(outcome.position.qtyShares.value, 10))
      totalRealizedNet = totalRealizedNet.plus(new BigNumber(outcome.position.realizedNet.value, 10))
      totalUnrealizedNet = totalUnrealizedNet.plus(new BigNumber(outcome.position.unrealizedNet.value, 10))
      positionOutcomes.push(outcome)
    })
  })
  const positionsSummary = generatePositionsSummary(positionOutcomes.length, qtyShares, 0, totalRealizedNet, totalUnrealizedNet)
  return {
    ...positionsSummary,
    positionOutcomes
  }
}, { max: 50 })

export const generatePositionsSummary = memoize((numPositions, qtyShares, meanTradePrice, realizedNet, unrealizedNet) => {
  const totalNet = new BigNumber(realizedNet, 10).plus(new BigNumber(unrealizedNet, 10))
  return {
    numPositions: formatNumber(numPositions, {
      decimals: 0,
      decimalsRounded: 0,
      denomination: 'Positions',
      positiveSign: false,
      zeroStyled: false
    }),
    qtyShares: formatShares(qtyShares),
    purchasePrice: formatEtherTokens(meanTradePrice),
    realizedNet: formatEtherTokens(realizedNet),
    unrealizedNet: formatEtherTokens(unrealizedNet),
    totalNet: formatEtherTokens(totalNet)
  }
}, { max: 20 })

function accumulate(objects, property) {
  if (!objects) return 0
  if (typeof objects === 'number') return objects
  if (!Array.isArray(objects) && typeof objects === 'object') return objects[property]
  if (!Array.isArray(objects)) return 0
  return objects.reduce((accum, item) => item[property] + accum, 0)
}
