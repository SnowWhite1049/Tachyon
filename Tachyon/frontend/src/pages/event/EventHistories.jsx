import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import companyData from "../../data/company/companies.json";
import EventCard from "../../features/event/EventCard";

export default () => {
	const [caseStudies, setCaseStudies] = useState(companyData);

  return (
    <section className="mb-32">
			<div className="py-5">
        <Heading title="おすすめイベント" />
				<div className="py-5">
					{
						caseStudies.map((caseStudy, index) =>
							<EventCard {...caseStudy} key={`event-${index}`} />
						)
					}
				</div>
      </div>
    </section>
  )
}