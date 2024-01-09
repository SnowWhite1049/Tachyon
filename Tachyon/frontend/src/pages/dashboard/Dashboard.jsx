import React, { useState, useEffect } from "react";
import '../../assets/scss/home.scss';
import Heading from "../../components/partials/Heading";
import Zoom from "../../assets/images/zoom.jpg";
import Events from "../../features/dashboard/Events";
import ArticleCard from "../../features/dashboard/ArticleCard";
import {fetchAllEvents, fetchEventReservations, fetchLastArticle} from '../../utils/actions';

export default () => {
  const [events, setEvents] = useState({});
  const [event_reservations, setEventReservations] = useState([]);
  const [article, setArticle] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    fetchAllEvents()
      .then(res => {
        if(res.status == 200){
          setEvents(res.data);
        }
        else {
          setError(res.data.error)
        }
      })
      .catch(err => {
        console.log(err);
      });

    fetchEventReservations()
      .then(res => {
        if(res.status == 200){
          setEventReservations(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });

    fetchLastArticle()
      .then(res => {
        if(res.status == 200){
          setArticle(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });

  }, []);
  
  return (
    <section className="">
      <div className="py-5">
        <Heading title="本日のZOOM" /> 
				<img src={Zoom} alt="" className="px-5 mx-auto py-3" />
      </div>
			<div className="my-4">
        <Heading title="イベントリマインダー" />
        <Events event_reservations={event_reservations} perPage={1} category='reservation'/>
      </div>
      <div className="my-4">
        <Heading title="イベント" />
        <Events events={events} />
      </div>
      <div className="my-4">
        <Heading title="今日のコラム" />
        <ArticleCard {...article} />
      </div>
    </section>
  )
}