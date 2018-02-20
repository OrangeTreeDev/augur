import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import ReportingOpen from 'modules/reporting/components/reporting-open/reporting-open'

// import getAllMarkets from 'modules/markets/selectors/markets-all'
import { toggleFavorite } from 'modules/markets/actions/update-favorites'

import { loadMarketsInfo } from 'modules/markets/actions/load-markets-info'

import getValue from 'utils/get-value'

const mapStateToProps = state => ({
  isLogged: state.isLogged,
  markets, // getAllMarkets(),
  universe: state.universe,
  canLoadMarkets: !!getValue(state, 'universe.id'),
  hasLoadedMarkets: state.hasLoadedMarkets,
  isMobile: state.isMobile,
})

const mapDispatchToProps = dispatch => ({
  loadMarketsInfo: marketIDs => dispatch(loadMarketsInfo(marketIDs)),
  toggleFavorite: marketID => dispatch(toggleFavorite(marketID)),
})

const Reporting = withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportingOpen))

export default Reporting


const markets = [
  {
    id: '0xcd7b177af7a12ec3be1c7f992ec7d608959630f2113227a2cdd9db562bd01eb4',
    branchID: '0xf69b5',
    tradingPeriod: 8947,
    tradingFee: '0.025',
    makerFee: '0.0125',
    takerFee: '0.025',
    creationTime: {
      value: '2017-10-16T14:36:38.000Z',
      formatted: 'Oct 16, 2017 2:36 PM',
      formattedLocal: 'Oct 16, 2017 7:36 AM (UTC -7)',
      full: 'Mon, 16 Oct 2017 14:36:38 GMT',
      timestamp: 1508164598000
    },
    volume: {
      value: 3000,
      formattedValue: 3000,
      formatted: '3,000',
      roundedValue: 3000,
      rounded: '3,000.00',
      minimized: '3,000',
      denomination: ' shares',
      full: '3,000 shares'
    },
    category: 'Cryptocurrency',
    tags: [
      'Cryptocurrency',
      'Bitcoin',
      'Ethereum'
    ],
    endDate: {
      value: '2018-12-30T08:00:00.000Z',
      formatted: 'Dec 30, 2018 8:00 AM',
      formattedLocal: 'Dec 30, 2018 12:00 AM (UTC -8)',
      full: 'Sun, 30 Dec 2018 08:00:00 GMT',
      timestamp: 1546156800000
    },
    eventID: '0xee03ff4923cb4fc8f2f2370e0f1d5cffd321342d304e221e566623616f676ba4',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will Bitcoin be surpassed by Ethereum by the end of 2018?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 422516,
    creationFee: '7.2',
    author: '0xa5f5cecbb1e1a1e784a975b4d019f50e06a95091',
    eventBond: '3.6',
    outcomes: [
      {
        id: '2',
        outstandingShares: '1000',
        price: '0',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xcd7b177af7a12ec3be1c7f992ec7d608959630f2113227a2cdd9db562bd01eb4',
        lastPrice: {
          value: 0,
          formattedValue: 0,
          formatted: '0',
          roundedValue: 0,
          rounded: '0.0000',
          minimized: '0',
          denomination: ' ETH Tokens',
          full: '0 ETH Tokens'
        },
        lastPricePercent: {
          value: 50,
          formattedValue: 50,
          formatted: '50.0',
          roundedValue: 50,
          rounded: '50',
          minimized: '50',
          denomination: '%',
          full: '50.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    extraInfo: 'Will Ethereum value overpass Bitcoin by the end of 2018?',
    formattedDescription: 'will_bitcoin_be_surpassed_by_ethereum_by_the_end_of_2018',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2.5,
      formattedValue: 2.5,
      formatted: '2.5',
      roundedValue: 2,
      rounded: '2',
      minimized: '2.5',
      denomination: '%',
      full: '2.5%'
    },
    makerFeePercent: {
      value: 1.25,
      formattedValue: 1.2,
      formatted: '1.2',
      roundedValue: 1,
      rounded: '1',
      minimized: '1.2',
      denomination: '%',
      full: '1.2%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 1000,
      formattedValue: 1000,
      formatted: '1,000',
      roundedValue: 1000,
      rounded: '1,000',
      minimized: '1,000',
      denomination: '',
      full: '1,000'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b91b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a566ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae83c73772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04d1f28125c3c11c8bae84c73772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b78c5162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04c8f28125c3c11c8bae84c73772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae8vc73772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c7c772785a666ca272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
  {
    id: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ya272',
    branchID: '0xf69b5',
    tradingPeriod: 8738,
    tradingFee: '0.02',
    makerFee: '0.01',
    takerFee: '0.02',
    creationTime: {
      value: '2017-10-13T21:01:36.000Z',
      formatted: 'Oct 13, 2017 9:01 PM',
      formattedLocal: 'Oct 13, 2017 2:01 PM (UTC -7)',
      full: 'Fri, 13 Oct 2017 21:01:36 GMT',
      timestamp: 1507928496000
    },
    volume: {
      value: 30.5,
      formattedValue: 30.5,
      formatted: '30.5',
      roundedValue: 30.5,
      rounded: '30.50',
      minimized: '30.5',
      denomination: ' shares',
      full: '30.5 shares'
    },
    category: 'MLB Baseball',
    tags: [
      'MLB Baseball',
      'Baseball'
    ],
    endDate: {
      value: '2017-11-05T07:00:00.000Z',
      formatted: 'Nov 5, 2017 7:00 AM',
      formattedLocal: 'Nov 5, 2017 12:00 AM (UTC -7)',
      full: 'Sun, 05 Nov 2017 07:00:00 GMT',
      timestamp: 1509865200000
    },
    eventID: '0x55c24b4a613d57869cfb42a640d744d2d646aaa1f30e0147c6a7da5a6a72eeb8',
    minValue: '1',
    maxValue: '2',
    numOutcomes: 2,
    type: 'binary',
    consensus: null,
    description: 'Will the Yankees win the 2017 world series?',
    isLoadedMarketInfo: true,
    isLoading: false,
    network: '9000',
    cumulativeScale: '1',
    creationBlock: 405426,
    creationFee: '9',
    author: '0x8e0a2a84b8dab1a441d6f8c68562dc8a1708455c',
    eventBond: '4.5',
    outcomes: [
      {
        id: '2',
        outstandingShares: '10',
        price: '0.3',
        sharesPurchased: '0',
        name: 'Yes',
        marketID: '0xbb8b7835162b95b6994013cd04d8f28125c3c11c8bae84c73772785a666ca272',
        lastPrice: {
          value: 0.3,
          formattedValue: 0.3,
          formatted: '0.3000',
          roundedValue: 0.3,
          rounded: '0.3000',
          minimized: '0.3',
          denomination: ' ETH Tokens',
          full: '0.3000 ETH Tokens'
        },
        lastPricePercent: {
          value: 30,
          formattedValue: 30,
          formatted: '30.0',
          roundedValue: 30,
          rounded: '30',
          minimized: '30',
          denomination: '%',
          full: '30.0%'
        },
        trade: {
          side: 'buy',
          numShares: null,
          limitPrice: null,
          maxNumShares: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.00',
            minimized: '0',
            denomination: ' shares',
            full: '0 shares'
          },
          potentialEthProfit: null,
          potentialEthLoss: null,
          potentialLossPercent: null,
          potentialProfitPercent: null,
          totalFee: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          gasFeesRealEth: {
            value: 0,
            formattedValue: 0,
            formatted: '',
            roundedValue: 0,
            rounded: '',
            minimized: '',
            denomination: '',
            full: ''
          },
          totalCost: {
            value: 0,
            formattedValue: 0,
            formatted: '0',
            roundedValue: 0,
            rounded: '0.0000',
            minimized: '0',
            denomination: ' ETH Tokens',
            full: '0 ETH Tokens'
          },
          tradeTypeOptions: [
            {
              label: 'buy',
              value: 'buy'
            },
            {
              label: 'sell',
              value: 'sell'
            }
          ],
          tradeSummary: {
            totalGas: {
              value: 0,
              formattedValue: 0,
              formatted: '0',
              roundedValue: 0,
              rounded: '0.0000',
              minimized: '0',
              denomination: ' ETH',
              full: '0 ETH'
            },
            tradeOrders: [

            ]
          }
        },
        orderBook: {
          bids: [

          ],
          asks: [

          ]
        },
        orderBookSeries: {
          bids: [

          ],
          asks: [

          ]
        },
        topBid: null,
        topAsk: null,
        position: null,
        userOpenOrders: [

        ]
      }
    ],
    formattedDescription: 'will_the_yankees_win_the_2017_world_series',
    isBinary: true,
    isCategorical: false,
    isScalar: false,
    isMarketLoading: false,
    endDateLabel: 'ends',
    isOpen: true,
    isFavorite: false,
    takerFeePercent: {
      value: 2,
      formattedValue: 2,
      formatted: '2.0',
      roundedValue: 2,
      rounded: '2',
      minimized: '2',
      denomination: '%',
      full: '2.0%'
    },
    makerFeePercent: {
      value: 1,
      formattedValue: 1,
      formatted: '1.0',
      roundedValue: 1,
      rounded: '1',
      minimized: '1',
      denomination: '%',
      full: '1.0%'
    },
    isRequiredToReportByAccount: false,
    isPendingReport: true,
    isReportSubmitted: false,
    isReported: false,
    isMissedReport: false,
    isReportTabVisible: false,
    isSnitchTabVisible: false,
    report: {

    },
    outstandingShares: {
      value: 10,
      formattedValue: 10,
      formatted: '10',
      roundedValue: 10,
      rounded: '10',
      minimized: '10',
      denomination: '',
      full: '10'
    },
    priceTimeSeries: [

    ],
    reportableOutcomes: [
      {
        id: '1',
        name: 'No'
      },
      {
        id: '2',
        name: 'Yes'
      },
      {
        id: '1.5',
        name: 'Indeterminate'
      }
    ],
    userOpenOrdersSummary: null,
    tradeSummary: {
      totalGas: {
        value: 0,
        formattedValue: 0,
        formatted: '0',
        roundedValue: 0,
        rounded: '0.0000',
        minimized: '0',
        denomination: ' ETH',
        full: '0 ETH'
      },
      tradeOrders: [

      ],
      hasUserEnoughFunds: false
    }
  },
]
