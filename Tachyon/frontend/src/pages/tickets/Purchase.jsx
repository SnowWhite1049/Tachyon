import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import Button from "../../components/button/Button";
import TicketContent from "../../features/tickets/TicketContent";
import TicketModal from "../../features/tickets/TicketModal";

export default () => {
	const [openModal, setOpenModal] = useState(false);

  return (
		<>
		{
			openModal && (
				<TicketModal setOpenModal={setOpenModal} />
			)
		}
		<section className="">
			<div className="">
        <Heading title="チケット購入" />
      </div>
			<div className="my-4 bg-white">
				<TicketContent title="専属面談チケット3500円" number={2} />
				<TicketContent title="イベントチケット2500円" number={2} />
				<TicketContent title="ESチケット500円" number={2} />
				<TicketContent title="ケースチケット500円" number={2} />
      </div>
			<div className="flex flex-wrap justify-center gap-5 my-4">
				<Button title="購入" bgColor="bg-orange-400" bgColorHover="bg-orange-700" className="px-5 py-2.5 rounded-lg" onClick={() => setOpenModal(!openModal)} />
			</div>
    </section>
		</>
  )
}