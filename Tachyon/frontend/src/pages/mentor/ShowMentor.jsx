import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Account from "../../assets/images/account.png"
import Button from "../../components/button/Button";
import {fetchMentor, applyMentor} from '../../utils/actions';

export default () => {
	const {id} = useParams();

	const [mentor, setMentor] = useState({});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);

	const ApplyMentor = () =>{
		applyMentor(id)
			.then(res => {
        if(res.status == 200){
					setError('');
					setSuccess(true);
        }
        else {
          setError(res.data.error);
					setSuccess(false);
        }
      })
      .catch(err => {
				console.log(err)
        // setError(err);
				setSuccess(false);
      });
	}

	useEffect(() => {
    fetchMentor(id)
      .then(res => {
        if(res.status == 200){
          setMentor(res.data);
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
    <section className="">
			<p className={`text-center text-sm text-green-700 mt-2`}>
				{success && '面談申込成功'}
			</p>
      <div className="mb-3 py-2">
        <Heading title="メンター基本情報" />
				<div className="bg-white shadow-md flex mt-2">
					<div className="p-5">
						<img src={Account} alt="mentor avatar" className="account-logo" />
						<p className="mt-5 text-sm">面談価格：¥{mentor.interview_salary}円</p>
					</div>
          <div className="my-4 ps-3 font-bold w-full">
            <div className="mb-2">
							<h5 >名前</h5>
							<h5>{mentor.last_name}{mentor.first_name}</h5>
						</div>
						<div className="mb-2">
							<h5 >大学</h5>
							<h5>{mentor.university} {mentor.faculty}</h5>
						</div>
						<div className="mb-2">
							<h5 >内定先</h5>
							<h5>{mentor.job_offer_1} {mentor.job_offer_2}</h5>
						</div>
          </div>
				</div>
      </div>
			<div>
				<Heading title="自己紹介" />
				<p className="bg-white shadow-md mt-2 p-4">
          {mentor.self_introduction}
				</p>
			</div>
			<p className={`text-center text-sm text-red-700 mt-2`}>
				{error}
			</p>
			<div className="flex flex-wrap justify-center gap-5 my-4">
				<Button 
					title="面談申込" 
					bgColor="bg-orange-400" 
					bgColorHover="bg-orange-700" 
					className="px-5 py-2.5 rounded-lg" 
					onClick={ApplyMentor}
				/>
			</div>
    </section>
  )
}