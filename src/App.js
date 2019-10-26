import React, { Component } from 'react'

import { GrossIncome } from './gross-income'
import { Expenses } from './expenses'
import { Mortgage } from './mortgage'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      homePrice: 0,
      grossIncome: 0,
      monthlyExpenses: 0
    }
    this.updateHomePrice = this.updateHomePrice.bind(this)
    this.updateGrossIncome = this.updateGrossIncome.bind(this)
    this.updateMonthlyExpenses = this.updateMonthlyExpenses.bind(this)
  }
  updateHomePrice(newAmount) {
    this.setState({
      homePrice: newAmount
    })
  }
  updateGrossIncome(newAmount) {
    this.setState({
      grossIncome: newAmount
    })
  }
  updateMonthlyExpenses(newAmount) {
    this.setState({
      monthlyExpenses: newAmount
    })
  }
  render () {
    const monthlyNetIncome = this.state.grossIncome - this.state.monthlyExpenses
    const yearlyNetIncome = monthlyNetIncome * 12
    const capRate = (yearlyNetIncome / this.state.homePrice) * 100
    return (
      <div>
        <GrossIncome
          updateHomePrice={this.updateHomePrice}
          updateGrossIncome={this.updateGrossIncome}/>
        <hr width='80%'/>
        <Expenses updateMonthlyExpenses={this.updateMonthlyExpenses}/>
        <hr width='80%'/>
        <p><strong>Monthly Net Income:</strong> {monthlyNetIncome}</p>
        <p><strong>Yearly Net Income:</strong> {yearlyNetIncome}</p>
        <p><strong>CAP RATE (yearly return):</strong>{ capRate }</p>
        <hr width='80%'/>
        <Mortgage purchasePrice={this.state.homePrice} monthlyIncome={monthlyNetIncome}/>
      </div>
    )
  }
}
