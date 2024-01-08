import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Events from "../../features/reservation/Events";
import mentorData from "../../data/mypage/mentors.json";
import companyData from "../../data/company/companies.json";
import Zoom from "../../assets/images/zoom.jpg"

export default () => {
  const [mentors, setMentors] = useState(mentorData);
  const [events, setEvents] = useState(companyData);
  return (
    <section className="">
			<div className="py-5">
        <Heading title="本日のケース" /> 
				<img src={Zoom} alt="" className="px-5 mx-auto py-3" />
      </div>
			<div className="my-4">
        <Heading title="みんなのケースチャレンジ" />
        <Events events={events} />
      </div>
      <div className="my-4">
        <Heading title="ゲリライベント" />
        <Events events={events} />
      </div>
      <div className="my-4">
        <Heading title="今日のコラム" />
        <Events events={events} />
      </div>
    </section>
  )
}