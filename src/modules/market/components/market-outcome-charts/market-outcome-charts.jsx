import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MarketOutcomeChartsHeader from 'modules/market/components/market-outcome-charts--header/market-outcome-charts--header'
import MarketOutcomeCandlestick from 'modules/market/components/market-outcome-charts--candlestick/market-outcome-charts--candlestick'
import MarketOutcomeDepth from 'modules/market/components/market-outcome-charts--depth/market-outcome-charts--depth'
import MarketOutcomeOrderBook from 'modules/market/components/market-outcome-charts--orders/market-outcome-charts--orders'

import Styles from 'modules/market/components/market-outcome-charts/market-outcome-charts.styles'

// import { isEqual } from 'lodash'

export default class MarketOutcomeCharts extends Component {
  static propTypes = {
    priceTimeSeries: PropTypes.array.isRequired,
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    outcomeBounds: PropTypes.object.isRequired,
    orderBook: PropTypes.object.isRequired,
    orderBookKeys: PropTypes.object.isRequired,
    marketDepth: PropTypes.object.isRequired,
    selectedOutcome: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
      selectedPeriod: {},
      hoveredPeriod: {},
      hoveredDepth: [],
      hoveredPrice: null,
      fixedPrecision: 4
    }

    this.updateHoveredPeriod = this.updateHoveredPeriod.bind(this)
    this.updateHoveredPrice = this.updateHoveredPrice.bind(this)
    this.updatePrecision = this.updatePrecision.bind(this)
    this.updateHoveredDepth = this.updateHoveredDepth.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
    // if (
    //   !isEqual(this.state.fixedPrecision, nextState.fixedPrecision) ||
    //   !isEqual(this.state.fullPrice, nextState.fullPrice)
    // ) {
    //   console.log('fullPrice -- ', nextState.fullPrice)
    //   if (nextState.fullPrice === null) {
    //     this.updateHoveredPrice(null)
    //   } else {
    //     this.updateHoveredPrice(nextState.fullPrice.toFixed(nextState.fixedPrecision).toString())
    //   }
    // }
  }

  updateHoveredPeriod(hoveredPeriod) {
    this.setState({
      hoveredPeriod
    })
  }

  updateHoveredDepth(hoveredDepth) {
    this.setState({
      hoveredDepth
    })
  }

  updateHoveredPrice(hoveredPrice) {
    this.setState({
      hoveredPrice
    })
  }

  updateSelectedPeriod(selectedPeriod) {
    this.setState({
      selectedPeriod
    })
  }

  updatePrecision(isIncreasing) {
    let { fixedPrecision } = this.state

    if (isIncreasing) {
      fixedPrecision += 1
    } else {
      fixedPrecision = fixedPrecision - 1 < 0 ? 0 : fixedPrecision -= 1
    }

    return this.setState({ fixedPrecision })
  }

  render() {
    const s = this.state
    const p = this.props

    return (
      <section className={Styles.MarketOutcomeCharts}>
        <MarketOutcomeChartsHeader
          priceTimeSeries={p.priceTimeSeries}
          selectedOutcome={p.selectedOutcome}
          hoveredPeriod={s.hoveredPeriod}
          hoveredDepth={s.hoveredDepth}
          fixedPrecision={s.fixedPrecision}
          updatePrecision={this.updatePrecision}
          updateSelectedPeriod={this.updateSelectedPeriod}
        />
        <div className={Styles.MarketOutcomeCharts__Charts}>
          <div className={Styles.MarketOutcomeCharts__Candlestick}>
            <MarketOutcomeCandlestick
              priceTimeSeries={p.priceTimeSeries}
              selectedPeriod={s.selectedPeriod}
              fixedPrecision={s.fixedPrecision}
              outcomeBounds={p.outcomeBounds}
              orderBookKeys={p.orderBookKeys}
              marketMax={p.maxPrice}
              marketMin={p.minPrice}
              hoveredPrice={s.hoveredPrice}
              updateHoveredPrice={this.updateHoveredPrice}
              updateHoveredPeriod={this.updateHoveredPeriod}
            />
          </div>
          <div className={Styles.MarketOutcomeCharts__Depth}>
            <MarketOutcomeDepth
              fixedPrecision={s.fixedPrecision}
              orderBookKeys={p.orderBookKeys}
              marketDepth={p.marketDepth}
              hoveredPrice={s.hoveredPrice}
              updateHoveredPrice={this.updateHoveredPrice}
              updateHoveredDepth={this.updateHoveredDepth}
            />
          </div>
          <div className={Styles.MarketOutcomeCharts__Orders}>
            <MarketOutcomeOrderBook
              fixedPrecision={s.fixedPrecision}
              orderBook={p.orderBook}
              marketMidpoint={p.orderBookKeys.mid}
              hoveredPrice={s.hoveredPrice}
              updateHoveredPrice={this.updateHoveredPrice}
            />
          </div>
        </div>
      </section>
    )
  }
}
