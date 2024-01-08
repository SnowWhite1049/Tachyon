import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import AdminInput from "../../components/form/AdminInput";
import { Card, CardTitle } from "../../components/partials/Card";
import Button from "../../components/button/Button";
import Select from "../../components/form/Select";
import { fetchOneMentee } from "../../utils/actions";
import { useParams } from 'react-router-dom';


const EditMentee = () => {
	const [userMain, setUserMain] = useState({});
	const [userDetail, setUserDetail] = useState({});
	const [userTicket, setUserTicket] = useState({});

	const { id } = useParams();
	
	useEffect(() => {

    fetchOneMentee(id)
      .then(res => {
				setUserMain({
					last_name: res.last_name,
					first_name: res.first_name,
					birth_date: res.birth_date,
					gender: res.gender,
					email: res.email,
					plan_name: res.plan.name,
					mentor_name: res.mentor.user_name
				});

				setUserDetail({...res.user_detail});
				setUserTicket({...res.user_tickets[0]});
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

	const options = [
		{ name: '男性', value: 1 },
		{ name: '女性', value: 2 }
	];
	
  const handleMainChange = (field, value) => {
		setUserMain({ ...userMain, [field]: value });
  };
  const handleDetailChange = (field, value) => {
		setUserDetail({ ...userDetail, [field]: value });
  };
  const handleTicketChange = (field, value) => {
		setUserTicket({ ...userTicket, [field]: value });
  };

	return (
		<div className="grid grid-cols-12 gap-10">
			<div className="col-span-9">
				<Card>
					<CardTitle title="基本情報" />
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="last_name" label="姓" type="text" value={userMain.last_name} handleChange={handleMainChange} />
						<AdminInput name="first_name" label="名" type="text" value={userMain.first_name} handleChange={handleMainChange} />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="birth_date" label="生年月日" type="text" value={userMain.birth_date} handleChange={handleMainChange} />
						<Select name="gender" label="性別" options={options} />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="email" label="メールアドレス" type="email" value={userMain.email} handleChange={handleMainChange} />
						<AdminInput name="password" label="パスワード" type="password" value={userMain.password} handleChange={handleMainChange} />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="plan_name" label="プラン名" type="text" value={userMain.plan_name} handleChange={handleMainChange} />
						<AdminInput name="mentor_name" label="専属メンター" type="text" value={userMain.mentor_name} handleChange={handleMainChange} />
					</div>
					<div className="grid grid-cols-3 gap-10 my-3">
						<AdminInput name="university" label="所属大学" type="text" value={userDetail.university} handleChange={handleDetailChange} />
						<AdminInput name="faculty" label="学部" type="text" value={userDetail.faculty} handleChange={handleDetailChange} />
						<AdminInput name="department" label="学科" type="text" value={userDetail.department} handleChange={handleDetailChange} />
					</div>
					<div className="grid grid-cols-3 gap-10 my-3">
						<AdminInput name="graduation_year" label="卒業年度" type="number" value={userDetail.graduation_year} handleChange={handleDetailChange} />
						<AdminInput name="first_wish_industry" label="第一志望業界" type="text" value={userDetail.first_wish_industry} handleChange={handleDetailChange} />
						<AdminInput name="second_wish_industry" label="第二志望業界" type="text" value={userDetail.second_wish_industry} handleChange={handleDetailChange} />
					</div>
				</Card>
			</div>
			<div className="col-span-3">
				<Card>
					<CardTitle title="チケット情報" />
					<div className="my-3">
						<AdminInput name="short_interview_ticket_number" label="面談チケット" type="number" value={userTicket.short_interview_ticket_number} handleChange={handleTicketChange} />
						<AdminInput name="event_ticket_number" label="イベントチケット" type="number" value={userTicket.event_ticket_number} handleChange={handleTicketChange} />
						<AdminInput name="es_ticket_number" label="ES添削チケット" type="number" value={userTicket.es_ticket_number} handleChange={handleTicketChange} />
						<AdminInput name="case_ticket_number" label="ケース添削チケット" type="number" value={userTicket.case_ticket_number} handleChange={handleTicketChange} />
						<AdminInput name="interview_ticket_number" label="専属面談チケット" type="number" value={userTicket.interview_ticket_number} handleChange={handleTicketChange} />
					</div>
				</Card>
				<div className="flex flex-wrap justify-end gap-5 my-5">
					<Button title="保存" bgColor="bg-blue-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
					<Button title="キャンセル" bgColor="bg-red-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
				</div>
			</div>
		</div>
	)
};

export default EditMentee;