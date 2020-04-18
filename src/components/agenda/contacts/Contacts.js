import React, { Component } from 'react'
import Contact from '../contact/Contact'

import './contacts.css'

export default class Contacts extends Component{
    constructor(props){
        super(props);
        this.state = {
            contacts: this.props.data,
            search: '',
            filters: [
                {indicator: 'male', value: true},
                {indicator: 'female', value: true},
                {indicator: 'unknown', value: true},
            ]
        }
    }
    updateSearchValue = (event) => (
        this.setState({
            search: event.target.value,
        })
    )

    updateFilterValue = (event) => {
        this.setState({
            filters: this.state.filters.map(item => 
                item.indicator === event.target.value 
                ? {...item, value: !item.value} 
                : item)
        })
    }

    filterByGender = () => {
        const genderToFind = this.state.filters.filter(item => item.value).map(item => item.indicator);
        return this.state.contacts.filter(contact => genderToFind.includes(!(contact.gender) ? 'unknown' : contact.gender))
    }

    filterByPeronalInfo = (data) => {
        return data.filter(item => 
                item.firstName.toLowerCase().includes(this.state.search.toLowerCase()) 
                || item.lastName.toLowerCase().includes(this.state.search.toLowerCase()) 
                || item.phone.includes(this.state.search.toLowerCase()))
    }

    render = () => (
        <div className='contacts-container'>
            <div className='container'>
                <h2>Contacts</h2>
                <div className='searchBar'>
                    <p>&#9906;</p>
                    <input value={this.state.search} onChange={this.updateSearchValue} placeholder="Search"/>
                </div>

                <div className='genderFilter'>
                    <label>
                        <input type='checkbox' value='male' checked={this.state.filters[0].value} onChange={this.updateFilterValue}/>
                        M
                    </label>
                    <label>
                        <input type='checkbox' value='female' checked={this.state.filters[1].value} onChange={this.updateFilterValue}/>
                        F
                    </label>
                    <label>
                        <input type='checkbox' value='unknown' checked={this.state.filters[2].value} onChange={this.updateFilterValue}/>
                        NA
                    </label>
                </div>

                <ul className='contactList'>
                    {this.filterByPeronalInfo(this.filterByGender()).map(result => (
                        <Contact key={result.firstName} {...result}/>
                    ))} 
                </ul>
            </div>
        </div>
    )
}