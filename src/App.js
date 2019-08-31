import React, { Component } from 'react'

import { GrossIncome } from './gross-income'
import { Expenses } from './expenses'

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
    return (
      <div>
        <GrossIncome
          updateHomePrice={this.updateHomePrice}
          updateGrossIncome={this.updateGrossIncome}/>
        <Expenses updateMonthlyExpenses={this.updateMonthlyExpenses}/>
      </div>
    )
  }
}
