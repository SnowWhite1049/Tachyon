import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import Account from "../../assets/images/account.png"
import LinkButton from "../../components/button/LinkButton";
import { Paths } from "../../config/Paths";

export default () => {
  return (
    <section className="">
      <div className="py-5">
        <Heading title="マイページ" />
				<div className="bg-white shadow-md flex">
					<img src={Account} alt="" className="p-5 h-40" />
          <div className="my-4 ps-3 w-full">
            <div className="font-bold text-xl">aaaaa</div>
            <div className="text-xl">aaaaa</div>
            <div className="text-xl">aaaaa</div>
            <div className="text-xl">aaaaa</div>
            <LinkButton link={Paths.editProfile} title="プロフィール編集" />
          </div>
				</div>
      </div>
      <div className="py-5">
        <Heading title="カリキュラム" />
				<div className="bg-white shadow-md flex">
					<img src={Account} alt="" className="p-5 h-40" />
          <div className="w-full">
            <div className="my-4 ps-3 w-full ">
              <div className="font-bold text-xl">次のおすすめ講義</div>
              <li className="text-xl">DTFA GD対策</li>
              <li className="text-xl">Big4対策後編</li>
              <LinkButton link={Paths.eventHistory} title="おすすめイベント" />
            </div>
            <div className="my-4 ps-3 w-full">
              <div className="font-bold text-xl break-keep">あなたの弱み</div>
              <li className="text-xl">ケース思考力</li>
              <LinkButton link={Paths.caseStudyHistory} title="ケース一覧" />
            </div>
          </div>
				</div>
      </div>
      <div className="py-5">
        <Heading title="その他" />
				<div className="bg-white shadow-md flex">
					<img src={Account} alt="" className="p-5 h-40" />
          <div className="w-full">
            <div className="my-4 ps-3 w-full ">
              <div className="font-bold text-xl">所有チケット数</div>
              <li className="text-xl">所有チケット数</li>          
              <LinkButton link={Paths.ticketPurchase} title="チケット購入" />
            </div>
           
          </div>
				</div>
      </div>
    </section>
  )
}