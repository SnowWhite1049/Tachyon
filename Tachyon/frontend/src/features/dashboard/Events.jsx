import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import EventCard from "./EventCard";

export default (props) => {
	const { events } = props

	return (
		<Splide
			options={{
				perPage: 2.5,
				arrows: false,
				pagination: false,
				gap: '1rem',
				drag: true
			}}
		>
			{
				events.map((event, index) =>
					<SplideSlide key={`event-${index}`}>
						<EventCard {...event} />
					</SplideSlide>
				)
			}
		</Splide>
	)
}