import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import AdminInput from "../../components/form/AdminInput";
import { Card, CardTitle } from "../../components/partials/Card";
import Button from "../../components/button/Button";
import Select from "../../components/form/Select";
import TextArea from "../../components/form/TextArea";

export default () => {
	const options = [
		{name: 'aaa', value: 1},
		{name: 'bbb', value: 2}
	]
	const reservations = [
		{name: '仮予約', value: 1},
		{name: '確定', value: 2},
		{name: 'ゲリラ', value: 3}
	]
  return (
		<div className="grid grid-cols-12 gap-10">
			<div className="col-span-8">
				<Card>
					<CardTitle title="基本情報" />
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="event_date" label="イベント日時" type="date" />
						<AdminInput name="name" label="イベント名" type="text" />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<Select name="company_id" label="業界種別" options={options} />
						<Select name="event_type" label="イベント種別" options={reservations} />
					</div>
					<div className="grid grid-cols-2 gap-10 my-3">
						<AdminInput name="chat" label="オープンチャット" type="text" />
						<AdminInput name="zoom_url" label="参加ZOOM" type="text" />
					</div>
					<div className="grid grid-cols-1 my-3">
						<TextArea name="overview" label="イベント詳細" />
					</div>
				</Card>
			</div>
			<div className="col-span-4">
				<Card>
					<CardTitle title="詳細情報" />
					<div className="my-3">
						<AdminInput name="timerex_url" label="イベント画像" type="file" />
						<AdminInput name="timerex_url_short" label="イベント資料" type="file" />
					</div>
				</Card>
				<div className="flex flex-wrap justify-end gap-5 my-5">
					<Button title="保存する" bgColor="bg-orange-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
				</div>
			</div>
		</div>
  )
}