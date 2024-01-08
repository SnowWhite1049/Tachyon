import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import EditCaseStudy from "../../features/case_study/EditCaseStudy";

export default () => {
  return (
    <section className="mx-4">     
      <div className="bg-white px-16 pb-4">
				<div className="flex">
					<Heading title="ケース編集" />
				</div>
      </div>
			<div className="my-5">
        <EditCaseStudy />
      </div>
    </section>
  )
}