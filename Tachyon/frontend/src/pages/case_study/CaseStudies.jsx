import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/partials/Heading";
import { Table, Thead } from "../../components/partials/Table";
import Button from "../../components/button/Button";
import { Paths } from "../../config/Paths";
import AddButton from '../../components/partials/AddButton';
import BasicTabs from "../../components/partials/Tab";
import CustomPaginationActionsTable from '../../components/partials/CustomTable';
import { fetchAllCase } from "../../utils/actions";
import EditButton from "../../components/partials/EditButton";
import CustomButton from "../../components/partials/CustomButton";

export default () => {
  const navigate = useNavigate();
  const tableData = {
    name: '黒木',
    product_name: 'スタンダード',
    price: '20000円',
    status: '振込済',
    date: '2023年12月25日',
  }
  const numbers = [...Array(10).keys()]
  const [caseTableContents, setCaseTableContents]=useState({
    head: ['ケースお題', '思考時間', '公開日時', '終了日時', '編集'],
    body: []
  })

  const expenseTableContents = {
    head: ['メンティー名/メンター名', '商品名/委託名', '金額', 'ステータス', '日付'],
    body: [
      { id: 1, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },

    ]
  };

  const tabContents = [
    { id: 1, title: '添削前', content: <CustomPaginationActionsTable data={expenseTableContents} /> },
    { id: 2, title: '添削後', content: <CustomPaginationActionsTable data={expenseTableContents} /> },
    { id: 3, title: '公開中', content: <CustomPaginationActionsTable data={caseTableContents} /> },
  ];
  useEffect(() => {

    fetchAllCase()
      .then(res => {
        console.log(">>>", res);

        let options1 = [];

        res.forEach(r => {
          let op = {            
            question: r.question,
            thinking_time: "思考時間 : " + r.thinking_time + "分",
            start_date: r.start_date,
            end_date: r.end_date,
            edit_button: <div style={{display:"flex", gap:8}}><EditButton id={r.id} /> <CustomButton id={r.id} is_undisclosed = {r.is_undisclosed}/></div>
          };

          options1.push(op)
        });

        setCaseTableContents({...caseTableContents, body:options1})
        // let options1 = [{ name: '', value: 0 }];

        // res.forEach(r => {
        //   let op = {
        //     name: r.name,
        //     value: r.id
        //   };

        //   options1.push(op)
        // });

        // setOptions(options1);

      })
      .catch(err => {
        console.log(err);
      });

  }, []);

  return (
    <section className="mx-4">
      <div className="bg-white px-16 pb-4">
        <Heading title="ケース" />
        <div className="flex flex-wrap justify-end">
          <AddButton />
        </div>
      </div>
      <div className="my-5">
        <div className="px-16">
          <BasicTabs data={tabContents} />
        </div>
      </div>
    </section>
  )
}