import React, { Component } from 'react'

export default class Mortgage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            downpayment: 0,
            monthlyPayment: 0
        }
        this.updateMortgage = this.updateMortgage.bind(this)
        this.updateDownPayment = this.updateDownPayment.bind(this)
    }
    updateDownPayment(e){
        e.preventDefault()
        this.setState({
            downpayment: Number(e.target.value)
        })
    }
    updateMortgage(e){
        e.preventDefault()
        this.setState({
            monthlyPayment: Number(e.target.value)
        })
    }
    render () {
        const { purchasePrice, monthlyIncome } = this.props
        const { downpayment, monthlyPayment } = this.state
        const closingCosts = purchasePrice * .01
        const totalInvestment = closingCosts + downpayment
        const monthlyNetIncome = monthlyIncome - monthlyPayment
        const yearlyNetIncome = monthlyNetIncome * 12
        const yearlyReturn = (yearlyNetIncome/totalInvestment) * 100
        return (
            <div>
                <p>
                    Down Payment:
                    <input type="number" value={downpayment} onChange={this.updateDownPayment}></input>
                </p>
                <p>
                    Monthly Mortgage Payment:
                    <input type="number" value={monthlyPayment} onChange={this.updateMortgage}></input>
                </p>
                <p><strong>Closing Costs (estimated @ 1%):</strong> { closingCosts }</p>
                <p><strong>Total Investment:</strong> { totalInvestment }</p>
                <p><strong>Monthly Net Income:</strong> { monthlyNetIncome }</p>
                <p><strong>Yearly Net Income:</strong> { yearlyNetIncome }</p>
                <p><strong>Yearly return on investment: {yearlyReturn}</strong></p>
            </div>
        )
    }
}