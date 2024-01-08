import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Mentors from "../../features/reservation/Mentors";
import Events from "../../features/reservation/Events";
import mentorData from "../../data/mypage/mentors.json";
import companyData from "../../data/company/companies.json";
import ES from "../../assets/images/es_ico.png"
import Case from "../../assets/images/case_ico.png"
import Calender from "../../assets/images/calander_ico.png"

export default () => {
  const [mentors, setMentors] = useState(mentorData);
  const [events, setEvents] = useState(companyData);
  return (
    <section className="">
      <div className="py-5">
        <Heading title="面談予約" />
        <Mentors mentors={mentors} />
      </div>
      <div className="mt-2">
        <Heading title="イベント予約" />
        <Events events={events} />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <div>
          <img src={ES} alt="" className="w-full h-28"  />
          <p className="text-center text-base font-bold">ES添削</p>
        </div>
        <div>
          <img src={Case} alt="" className="w-full h-28 " />
          <p className="text-center text-base font-bold">ケース添削</p>
        </div>
        <div>
          <img src={Calender} alt="" className="w-full h-28" />
          <p className="text-center text-base font-bold">カレンダー予約</p>
        </div>
      </div>
    </section>
  )
}