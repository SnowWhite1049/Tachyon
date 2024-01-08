import React, { useState, useEffect } from "react";
import Modal from "../../components/partials/Modal";
import { TicketIcon, PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export default (props) => {
	const { setOpenModal } = props

  return (
    <Modal setOpenModal={setOpenModal}>
			<TicketIcon className="w-100 h-20 mx-auto" />
			<div className="my-4">
				<div className="flex justify-between pe-5 text-sm text-primary mb-4">
					<div>専属面談チケット3500円</div>
					<div>2枚</div>
				</div>
				<div className="flex justify-between pe-5 text-sm text-primary mb-4">
					<div>ケースチケット3500円</div>
					<div>2枚</div>
				</div>
				<div className="flex justify-between pe-5 text-sm text-primary mb-4">
					<div>ES添削チケット3500円</div>
					<div>2枚</div>
				</div>
				<div className="flex justify-between pe-5 text-sm text-primary mb-4">
					<div>ケース添削チケット3500円</div>
					<div>2枚</div>
				</div>
				<div className="flex justify-between pe-5 text-sm text-primary mb-4 text-lg font-bold">
					<div>合計</div>
					<div>13600円</div>
				</div>
			</div>
		</Modal>
  )
}