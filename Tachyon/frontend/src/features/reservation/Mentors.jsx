import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import MentorCard from "./MentorCard";

export default (props) => {
	const { mentors } = props

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
				mentors.map((mentor, index) =>
					<SplideSlide key={`mentor-${index}`}>
						<MentorCard {...mentor} />
					</SplideSlide>
				)
			}
		</Splide>
  )
}