import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import EditEvent from "../../features/event/EditEvent";

export default () => {
  return (
    <section className="mx-4">
      <div className="">
        <Heading title="イベント作成" />
      </div>
			<div className="my-5">
        <EditEvent />
      </div>
    </section>
  )
}