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
import Schedule2 from '../../components/Schedule2/Schedule2'
import Enquiry from './Enquiry/Enquiry'
import DownloadButton from '../../components/Downloadpdf/Download'
import Objective from './Objective/Objective'
import Workshop from './workshop/Workshop'


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
    <DownloadButton/>
    <Background/>
    <Johardhan/>
    <Objective/>
    <KeyActivity
       title="KEY ACTIVITIES"
        paragraph="The “JOHAR DHAN - 2023-2023” will encompass a range of activities designed to achieve the
objectives mentioned above. These activities may include:"
        items={items}
    />
    <Workshop/>
    <Timeline/>
    <Date
        time="10:30 AM to 04:30 PM"
        heading = "Programme - Day-1"
        day = "Friday,14th July 2023 "
  
      />
    <Schedule/>
    <Date
        time="10:30 AM to 02:30 PM"
        heading = "Programme - Day-2"
        day = "Saturday,15th July 2023"
  
      />
    <Schedule2/>
    <Enquiry/>
  
    </>
  )
}

export default Agenda