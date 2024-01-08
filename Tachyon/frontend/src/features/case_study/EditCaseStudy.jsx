import React, { useState, useEffect } from "react";
import moment from 'moment'
import '../../assets/scss/auth/login.scss';
import AdminInput from "../../components/form/AdminInput";
import { Card, CardTitle } from "../../components/partials/Card";
import Button from "../../components/button/Button";
import Select from "../../components/form/Select";
import TextArea from "../../components/form/TextArea";
import { fetchOneCase } from "../../utils/actions";
import { fetchAllCompany } from "../../utils/actions";
import { caseCreate } from "../../utils/actions";
import { useParams } from 'react-router-dom';

export default () => {

	const [casestudy, setCasestudy] = useState({});
	const [options, setOptions] = useState([]);

	const handleCaseChange = (field, value) => {
		setCasestudy({ ...casestudy, [field]: value });
	};

	const { id } = useParams();

	const caseSave = () => {
		
		if(casestudy.start_date == ""){
			alert("公開日時を入力する必要があります。");
			return false;
		}
		if(casestudy.end_date == ""){
			alert("終了日時を入力する必要があります。");
			return false;
		}
		if(casestudy.thinking_time == ""){
			alert("思考時間を入力する必要があります。");
			return false;
		}
		if(casestudy.company_id == ""){
			alert("企業名を入力する必要があります。");
			return false;
		}
		if(casestudy.question == ""){
			alert("ケースお題を入力する必要があります。");
			return false;
		}
		if(casestudy.content == ""){
			alert("備考を入力する必要があります。");
			return false;
		}

		caseCreate(id, casestudy)
			.then(res => {
				if(id > 0)
				window.location.href = "../list";
				else
					window.location.href = "./list";
			})
			.catch(err => {
				console.log(err);
			});
	}
	

	console.log("case edit id >>>", id);



	useEffect(() => {
		fetchAllCompany()
			.then(res => {
				console.log(">>>", res);
				
				let options1 = [{name:'', value:0}];

				res.forEach(r => {
					let op = {
						name: r.name,
						value: r.id
					};

					options1.push(op)
				});

				setOptions(options1);				

			})
			.catch(err => {
				console.log(err);
			});
		if (id > 0) {
			
			fetchOneCase(id)
				.then(res => {
					
					setCasestudy({
						start_date: res.start_date,
						end_date: res.end_date,
						thinking_time: res.thinking_time,
						company_id: res.company_id,
						question: res.question,
						content: res.content
					});
				})
				.catch(err => {
					console.log(err);
				});
		}else{
			const currentDate = moment().format('YYYY-MM-DD');
			const nextDate = moment().add(1, 'days').format('YYYY-MM-DD');

			setCasestudy({
				start_date: currentDate,
				end_date: nextDate,
				thinking_time: 1,
				company_id: 0,
				question: '',
				content: ''
			});
		}		

	}, []);


	return (
		<div className="grid grid-cols-12 gap-10">
			<div className="col-span-12">
				<Card>
					<CardTitle title="基本情報" />
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="start_date" label="公開日時" type="date" value={casestudy.start_date} handleChange={handleCaseChange} />
						<AdminInput name="end_date" label="終了日時" type="date" value={casestudy.end_date} handleChange={handleCaseChange} />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="thinking_time" label="思考時間" type="number" value={casestudy.thinking_time} handleChange={handleCaseChange} />
						{/* <AdminInput name="company_id" label="企業名" type="text" value={casestudy.company_id} handleChange={handleCaseChange}/> */}
						<Select name="company_id" label="企業名" options={options}  value={casestudy.company_id} handleChange={handleCaseChange}/>
					</div>
					<div className="grid grid-cols-1 my-3">
						<AdminInput name="question" label="ケースお題" type="text" value={casestudy.question} handleChange={handleCaseChange} />
					</div>
					<div className="grid grid-cols-1 my-3">
						<TextArea name="content" label="備考" value={casestudy.content} handleChange={handleCaseChange}/>
					</div>
				</Card>
				<div className="flex flex-wrap justify-end gap-5 my-5">
					<Button title="保存する" bgColor="bg-orange-400" bgColorHover="bg-orange-700"
						className="px-5 py-2.5 rounded-lg" onClick={caseSave} />
				</div>
			</div>
		</div>
	)
}