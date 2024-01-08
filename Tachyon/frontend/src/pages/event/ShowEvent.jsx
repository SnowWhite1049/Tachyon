import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import Company from "../../assets/images/company.png";
import Button from "../../components/button/Button";

export default () => {
	return (
		<section className="px-2">
			<div className="my-4">
				<img src={Company} alt="" className="w-full" />
				<div className="text-sm  my-3">更新日：12/24</div>
				<div className="">
					<Heading title="DTFA GD 対策" className="text-center" />
					<hr className="border-b border-gray-300 my-2" />
					<div className="break-words whitespace-pre-wrap mx-6">
						DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策
						DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策
						DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策DTFA GD 対策
					</div>
					<div className="my-5">
						<h5 className="text-primary font-bold p-2 border-b border-gray-300">イベント資料</h5>
						<img src={Company} alt="" className="w-full" />
						<div className="flex flex-wrap justify-center gap-5 my-4">
							<Button title="保存する" bgColor="bg-orange-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}