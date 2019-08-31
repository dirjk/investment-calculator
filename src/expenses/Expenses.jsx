import React, { Component } from 'react'

export default class Expenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yearlyTaxes: 0,
            monthlyTaxes: 0,
            monthlyInsurance: 0,
            HOA: 0,
            totalMonthlyExpenses: 0
        }
        this.updateTotalExpenses = this.updateTotalExpenses.bind(this)
        this.updateTaxes = this.updateTaxes.bind(this)
        this.updateHOA = this.updateHOA.bind(this)
        this.updateInsurance = this.updateInsurance.bind(this)
    }
    updateTotalExpenses() {
        const { monthlyTaxes, monthlyInsurance, HOA } = this.state
        console.log(monthlyTaxes, monthlyInsurance, HOA)
        let total = monthlyTaxes + monthlyInsurance + HOA
        console.log('total', total)
        this.setState({ totalMonthlyExpenses: total })
    }
    updateTaxes(e){
        e.preventDefault()
        this.setState({
            yearlyTaxes: e.target.value,
            monthlyTaxes: e.target.value / 12
        }, () => { this.updateTotalExpenses() })
    }
    updateInsurance(e){
        e.preventDefault()
        this.setState({
            monthlyInsurance: Number(e.target.value)
        }, () => { this.updateTotalExpenses() })
    }
    updateHOA(e){
        e.preventDefault()
        this.setState({
            HOA: Number(e.target.value)
        }, () => { this.updateTotalExpenses() })
    }
    render () {
        const { yearlyTaxes, monthlyInsurance, HOA, totalMonthlyExpenses } = this.state
        return (
            <div>
                <p>
                    Yearly Taxes:
                    <input type="number" value={yearlyTaxes} onChange={this.updateTaxes}></input>
                </p>
                <p>
                    Monthly Insurance:
                    <input type="number" value={monthlyInsurance} onChange={this.updateInsurance}></input>
                </p>
                <p>
                    Monthly HOA:
                    <input type="number" value={HOA} onChange={this.updateHOA}></input>
                </p>
                <p>
                    Total Expenses: {totalMonthlyExpenses} per month
                </p>
            </div>
        )
    }
}