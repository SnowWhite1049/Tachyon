import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import EditMenter from "../../features/menter/EditMenter";

export default () => {
  return (
    <section className="mx-4">
      <div className="">
        <Heading title="メンター登録" />
      </div>
			<div className="my-5">
        <EditMenter />
      </div>
    </section>
  )
}