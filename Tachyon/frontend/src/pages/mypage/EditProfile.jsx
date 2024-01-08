import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Account from "../../assets/images/account.png"
import MypageForm from "../../features/mypage/MypageForm";
import MypageFormGrid from "../../features/mypage/MypageFormGrid";
import Button from "../../components/button/Button";

export default () => {
  return (
    <section className="">
      <div className="py-5">
        <Heading title="プロフィール編集" />
				<div className="bg-white shadow-md flex">
					<img src={Account} alt="" className="p-3 h-40" />
          <div className="my-4 pe-2 w-full">
            <MypageFormGrid name1="last_name" name2="first_name" label="名前" type="text" />
            <MypageFormGrid name1="last_name" name2="first_name" label="大学・学部" type="text" />
            <MypageForm name="name" label="第一志望業界" type="text" />
            <MypageForm name="name" label="第二志望業界" type="text" />
						<div className="mb-4">
							<label class="block text-gray-700 text-sm font-bold mb-2">
								専属メンター
							</label>
							<div>aaaa</div>
						</div>
						<div className="mb-4">
							<div className="flex justify-end pe-5 text-sm text-primary">
								※変更希望の場合は要連絡
							</div>
						</div>
          </div>
				</div>
				<div className="flex flex-wrap justify-center gap-5 my-4">
					<Button title="保存する" bgColor="bg-orange-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
					<Button title="キャンセル" bgColor="bg-gray-400" bgColorHover="bg-gray-100" className="px-5 py-2.5 rounded-lg" />
				</div>
      </div>
    </section>
  )
}