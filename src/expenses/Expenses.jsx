import React, { Component } from 'react'

export default class Expenses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yearlyTaxes: 0,
            monthlyTaxes: 0,
            monthlyInsurance: 0,
            HOA: 0,
            utilities: 0,
            repairs: 0,
            management: 0,
            vacancy: 0,
            totalMonthlyExpenses: 0
        }
        this.updateTotalExpenses = this.updateTotalExpenses.bind(this)
        this.updateTaxes = this.updateTaxes.bind(this)
        this.updateHOA = this.updateHOA.bind(this)
        this.updateRepairs = this.updateRepairs.bind(this)
        this.updateUtilities = this.updateUtilities.bind(this)
        this.updateManagement = this.updateManagement.bind(this)
        this.updateVacancy = this.updateVacancy.bind(this)
        this.updateInsurance = this.updateInsurance.bind(this)
    }
    updateTotalExpenses() {
        const { monthlyTaxes, monthlyInsurance, HOA, utilities, repairs, management, vacancy } = this.state
        let total = monthlyTaxes + monthlyInsurance + HOA + utilities + repairs + management + vacancy
        this.setState({ totalMonthlyExpenses: total })
        this.props.updateMonthlyExpenses(total)
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
    updateUtilities(e){
        e.preventDefault()
        this.setState({
            utilities: Number(e.target.value)
        }, () => { this.updateTotalExpenses() })
    }
    updateRepairs(e){
        e.preventDefault()
        this.setState({
            repairs: Number(e.target.value)
        }, () => { this.updateTotalExpenses() })
    }
    updateManagement(e){
        e.preventDefault()
        this.setState({
            management: Number(e.target.value)
        }, () => { this.updateTotalExpenses() })
    }
    updateVacancy(e){
        e.preventDefault()
        this.setState({
            vacancy: Number(e.target.value)
        }, () => { this.updateTotalExpenses() })
    }
    render () {
        const { yearlyTaxes, monthlyInsurance, HOA, utilities, repairs, management, vacancy, totalMonthlyExpenses } = this.state
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
                    Monthly Utilities/Lawn/Maintenance:
                    <input type="number" value={utilities} onChange={this.updateUtilities}></input>
                </p>
                <p>
                    Monthly Repairs:
                    <input type="number" value={repairs} onChange={this.updateRepairs}></input>
                </p>
                <p>
                    Monthly Management:
                    <input type="number" value={management} onChange={this.updateManagement}></input>
                </p>
                <p>
                    Monthly Vacancy:
                    <input type="number" value={vacancy} onChange={this.updateVacancy}></input>
                </p>
                <p>
                    <strong>Total Expenses: {totalMonthlyExpenses} per month</strong>
                </p>
            </div>
        )
    }
}