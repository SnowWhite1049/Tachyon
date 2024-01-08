import React, { useState, useEffect } from "react";
import { useNavigate  } from "react-router-dom";
import Heading from "../../components/partials/Heading";
import {Table, Thead} from "../../components/partials/Table";
import Button from "../../components/button/Button";
import { Paths } from "../../config/Paths";

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

  return (
    <section className="mx-4">
      <div className="flex justify-between">
        <Heading title="ES" className="mt-4" />
      </div>
			<div className="my-5">
        <Table>
          <Thead>
            <tr>
              <th scope="col" className="px-6 py-3">メンティー名/メンター名</th>
              <th scope="col" className="px-6 py-3">商品名/委託名</th>
              <th scope="col" className="px-6 py-3">金額</th>
              <th scope="col" className="px-6 py-3">ステータス</th>
              <th scope="col" className="px-6 py-3">日付</th>
							<th scope="col" className="px-6 py-3"></th>
            </tr>
          </Thead>
          <tbody>
            {
              numbers.map((number, index) => 
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                  <td className="px-6 py-4">{tableData.name}</td>
                  <td className="px-6 py-4">{tableData.product_name}</td>
                  <td className="px-6 py-4">{tableData.price}</td>
                  <td className="px-6 py-4">{tableData.status}</td>
                  <td className="px-6 py-4">{tableData.date}</td>
									<td className="px-6 py-4">
                    <Button
                      title="添削"
                      bgColor="bg-blue-500"
                      bgColorHover="bg-blue-900"
                      className="px-5 py-2.5 rounded-lg"
                      onClick={() => navigate(Paths.adminCorrectionEntrySheet.replace(':id', number + 1))}
                    />
									</td>
                </tr>
              )
            }
        </tbody>
        </Table>
      </div>
    </section>
  )
}