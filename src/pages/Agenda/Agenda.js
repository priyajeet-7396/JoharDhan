import React from 'react'
import Banner from "../../components/Banner/banner"
import Background from './Background/Background'
import Johardhan from './Johardhan/Johardhan'
import KeyActivity from './KeyActivity/KeyActivity'
import {HiPresentationChartLine} from 'react-icons/hi';
import {GiTeacher} from 'react-icons/gi';
import {GiDiscussion} from 'react-icons/gi';
import {HiUserGroup} from 'react-icons/hi';
import Timeline from './Timeline/Timeline';
import Date from '../../components/Date/Date';
import Schedule from '../../components/Schedule/Schedule'


const Agenda = () => {

  const items = [
    { icon: <HiPresentationChartLine />, text: 'Exhibitions and sales' },
    { icon: <GiTeacher />, text: 'Workshops and demonstrations' },
    { icon: <GiDiscussion />, text: 'Panel discussions and presentations' },
    { icon: <HiUserGroup />, text: 'Business meetings and matchmaking sessions' }
  ];

  return (
    <>
    <Banner/>
    <Background/>
    <Johardhan/>
    <KeyActivity
       title="KEY ACTIVITIES"
        paragraph="The “JOHAR DHAN - 2023-2023” will encompass a range of activities designed to achieve the
objectives mentioned above. These activities may include:"
        items={items}
    />
    <Timeline/>
    <Date/>
    <Schedule/>
  
    </>
  )
}

export default Agenda