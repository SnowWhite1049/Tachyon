import React, { useState, useEffect } from "react";
import Heading from "../../components/partials/Heading";
import EditArticle from "../../features/article/EditArticle";

export default () => {
  return (
    <section className="mx-4">
      <div className="">
        <Heading title="コラム作成" />
      </div>
			<div className="my-5">
        <EditArticle />
      </div>
    </section>
  )
}