import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import companyData from "../../data/company/companies.json";
import Events from "../../features/dashboard/Events";

export default () => {
  const [events, setEvents] = useState(companyData);
  return (
    <section className="">			
			<div className="my-4">
        <Heading title="戦略コンサル" />
        <Events events={events} />
      </div>
      <div className="my-4">
        <Heading title="総合コンサル" />
        <Events events={events} />
      </div>
      <div className="my-4">
        <Heading title="シンクタンク" />
        <Events events={events} />
      </div>
    </section>
  )
}