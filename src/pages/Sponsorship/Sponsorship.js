import React from 'react'
import "./Sponsorship.css"
import Sponsor from './about_sponsor/Sponsor'
import Table from './Table/Table'
import Sponsor_form from './sponsor_form/Sponsor_form'
import Note from './Note/Note'

const Sponsorship = () => {
  return (
    <>
        <Sponsor/>
        <Table/>
        <Sponsor_form/>
        <Note/>
    </>
  )
}

export default Sponsorship