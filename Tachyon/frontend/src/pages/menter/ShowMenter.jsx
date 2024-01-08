import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Account from "../../assets/images/account.png"
import Button from "../../components/button/Button";

export default () => {
  return (
    <section className="">
      <div className="mb-3">
        <Heading title="メンター基本情報" />
				<div className="bg-white shadow-md flex">
					<div className="p-5">
						<img src={Account} alt="" className="account-logo" />
						<div className="mt-5 text-sm">面談価格：¥3800円</div>
					</div>
          <div className="my-4 ps-3 w-full">
            <div className="mb-2">
							<div className="font-bold">名前</div>
							<div className="">aaaaa</div>
						</div>
						<div className="mb-2">
							<div className="font-bold">大学</div>
							<div className="">aaaaa</div>
						</div>
						<div className="mb-2">
							<div className="font-bold">内定先</div>
							<div className="">aaaaa</div>
						</div>
          </div>
				</div>
      </div>
			<div>
				<Heading title="自己紹介" />
				<div className="bg-white shadow-md">
          <div className="p-4 w-full">
            <div className="mb-2">
							<div className="font-bold">大学時代</div>
							<div className="">aaaaa</div>
						</div>
						<div className="mb-2">
							<div className="font-bold">就活の話</div>
							<div className="">aaaaa</div>
						</div>
						<div className="mb-2">
							<div className="font-bold">相談できること</div>
							<div className="">aaaaa</div>
						</div>
          </div>
				</div>
			</div>
			<div className="flex flex-wrap justify-center gap-5 my-4">
				<Button title="面談申込" bgColor="bg-orange-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
			</div>
    </section>
  )
}