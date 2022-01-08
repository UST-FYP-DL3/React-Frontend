import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import '../components/stats/stats.css'

//import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import { db } from '../firebase'

const testData = [];

const Customers = () => {
    return (
        <div>
            Customers
        </div>
    )
}

export default Customers
