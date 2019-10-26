import React, { Component } from 'react'

export default class GrossIncome extends Component {
    constructor (props) {
        super(props)
        this.state = {
            homePrice: 0,
            units: 0,
            rent: 0,
            grossIncome: 0
        }
        this.updateUnits = this.updateUnits.bind(this)
        this.updateRent = this.updateRent.bind(this)
        this.updateHomePrice = this.updateHomePrice.bind(this)
    }
    updateHomePrice(e) {
        e.preventDefault()
        const { updateHomePrice } = this.props
        this.setState({ homePrice: e.target.value })
        updateHomePrice(e.target.value)
    }
    updateUnits(e) {
        e.preventDefault()
        const { rent } = this.state
        const { updateGrossIncome } = this.props
        this.setState({
            units: e.target.value,
            grossIncome: e.target.value * rent
        })
        updateGrossIncome(e.target.value * rent)
    }
    updateRent(e) {
        e.preventDefault()
        const { units } = this.state
        const { updateGrossIncome } = this.props
        this.setState({
            rent: e.target.value,
            grossIncome: e.target.value * units
        })
        updateGrossIncome(e.target.value * units)
    }
    render () {
        const { homePrice, units, rent, grossIncome } = this.state
        return (
            <div>
                <p>
                    Home Price:
                    <input type="number" value={homePrice} onChange={this.updateHomePrice}></input>
                </p>
                <p>
                    Number of units/beds:
                    <input type="number" value={units} onChange={this.updateUnits}></input>
                </p>
                <p>
                    monthly rent per unit/bed: 
                    <input type="number" value={rent} onChange={this.updateRent}></input>
                </p>
                <p>
                    <strong>Total Gross Income: {grossIncome} per month</strong>
                </p>
            </div>
        )
    }
}