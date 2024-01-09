import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import EventCard from "./EventCard";
import EventReservationCard from "./EventReservationCard";
import CompanyCard from "../selection/CompanyCard";
import { displayWeekday } from "../../utils/textDisplay";

export default (props) => {
	const { events, event_reservations, companies, perPage, category } = props;
	return (
		<Splide
			options={{
				perPage: perPage?perPage:2,
				arrows: category=='reservation'?true:false,
				pagination: false,
				gap: '1rem',
				drag: true
			}}
			className={`px-2 mt-2 ${category == 'industry'?'bg-transparent':'bg-white'}`}
		>
		{category == 'reservation'?
			event_reservations&&event_reservations.map((reservation, index) =>
				<SplideSlide key={`reservation-${index}`}>
					<EventReservationCard {...reservation}/>
				</SplideSlide>
			):category == 'industry'?
			companies&&companies.map((company, index) =>
				<SplideSlide key={`company-${index}`}>
					<CompanyCard {...company}/>
				</SplideSlide>
			):
			events&&Object.keys(events).length>0&&Object.keys(events).map((key, index) =>{
				return events[key].map((event, index)=>(
					<SplideSlide key={`event-${event.id}`}>
						<EventCard {...event} index={index} weekday={displayWeekday(key)} />
					</SplideSlide>
					))
			})
		}
		</Splide>
	)
}