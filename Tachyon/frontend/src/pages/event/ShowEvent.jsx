import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { backendUrl } from "../../utils/textDisplay";
import {fetchEvent} from '../../utils/actions';
import Button from "../../components/button/Button";
import StarRating from "../../components/partials/StarRating";

export default () => {
	const {id} = useParams();

	const [event, setEvent] = useState({});
	const [error, setError] = useState('');

	useEffect(() => {
    fetchEvent(id)
      .then(res => {
        if(res.status == 200){
          setEvent(res.data);
        }
        else {
          setError(res.data.error)
        }
      })
      .catch(err => {
        console.log(err);
      });

  }, []);
	return (
		<section className="px-4">
			<div className="mt-2">
        <img src={event.image_path&&(backendUrl+event.image_path)} 
            alt="event logo" 
            className="company-logo aspect-[2/1] border border-slate-200" 
        />
        <div className="flex w-full gap-6">
          <div className="flex items-start text-xs text-gray break-keep">開催日 : {moment(event.event_date).format('MM/DD')}</div>
          <div className="flex items-center justify-center text-xl font-bold break-keep">{event.name}</div>
          {/* <div className="flex items-end text-xs justify-end w-full">grade</div> */}
        </div>
        <div className="flex justify-end w-full text-xs">
          <StarRating rating={event.rating}/>
        </div>
				<hr className="border-b border-gray-300 w-full my-2" />
				<p>{event.overview}</p>
			</div>
			<div className="mt-5 my-4">
				<h5 className="font-bold">イベント資料</h5>
				<hr className="border-b border-gray-300 w-full my-2" />
				<img src={event.materials_path&&(backendUrl+event.materials_path)} 
            alt="event material image" 
            className="company-logo aspect-[2/1] border border-slate-200" 
        />
        <div className="flex flex-wrap justify-center gap-5 my-4">
          <Button 
            title="参加" 
            bgColor="bg-orange-400" 
            bgColorHover="bg-orange-700" 
            className="px-6 py-1 text-xl rounded-lg"
          />
        </div>
			</div>
		</section>
	)
}