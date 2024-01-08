import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import AdminInput from "../../components/form/AdminInput";
import { Card, CardTitle } from "../../components/partials/Card";
import Button from "../../components/button/Button";
import Select from "../../components/form/Select";

export default () => {
	const options = [
		{name: '男性', value: 1},
		{name: '女性', value: 2}
	]
  return (
		<div className="grid grid-cols-12 gap-10">
			<div className="col-span-7">
				<Card>
					<CardTitle title="基本情報" />
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="last_name" label="姓" type="text" />
						<AdminInput name="first_name" label="名" type="text" />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="birth_date" label="生年月日" type="text" />
						<Select name="gender" label="性別" options={options} />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="email" label="メールアドレス" type="email" />
						<AdminInput name="password" label="パスワード" type="password" />
					</div>
					<div className="grid grid-cols-3 gap-10 my-3">
						<AdminInput name="university" label="所属大学" type="text" />
						<AdminInput name="faculty" label="学部" type="text" />
						<AdminInput name="department" label="学科" type="text" />
					</div>
					<div className="grid grid-cols-3 gap-10 my-3">
						<AdminInput name="graduation_year" label="卒業年度" type="number" />
						<AdminInput name="first_wish_industry" label="内定先1" type="text" />
						<AdminInput name="second_wish_industry" label="内定先2" type="text" />
					</div>
				</Card>
			</div>
			<div className="col-span-5">
				<Card>
					<CardTitle title="詳細情報" />
					<div className="my-3">
						<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="timerex_url" label="TimeRexURL(60分)" type="text" />
						<AdminInput name="timerex_url_short" label="TimeRexURL(20分)" type="text" />
						</div>
						<div className="grid grid-cols-3 gap-10 my-3">
							<AdminInput name="interview_salary" label="面談給与" type="number" />
							<AdminInput name="lecture_create_salary" label="講義作成給与" type="number" />
							<AdminInput name="lecture_salary" label="講義給与" type="number" />
						</div>
					</div>
				</Card>
				<div className="flex flex-wrap justify-end gap-5 my-5">
					<Button title="保存する" bgColor="bg-orange-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
				</div>
			</div>
		</div>
  )
}