import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import Button from "../../components/button/Button";
import DropzoneFile from "../../components/form/DropzoneFile";

export default () => {
  return (
    <section className="">
			<div className="py-5">
        <Heading title="ケースチャレンジ" />
      </div>
			<div className="my-4 bg-white">
				<h5 className="text-primary font-bold p-2 text-center">イベント資料</h5>
				<div className="mx-5">
					<div className="text-primary font-bold text-sm mt-3">ケース時思考時間</div>
					<p>3分</p>
					<div className="text-primary font-bold text-sm mt-3">出題企業</div>
					<p>デロイトトーマツコンサルティング</p>
				</div>
				<div className="p-6">
					<DropzoneFile />
				</div>
      </div>
			<div className="flex flex-wrap justify-center gap-5 my-4">
				<Button title="提出する" bgColor="bg-orange-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
			</div>
    </section>
  )
}