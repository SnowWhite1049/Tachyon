import React from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import ContentCard from "../../features/dashboard/ContentCard";
import BasicTabs from "../../components/partials/Tab";
import CustomPaginationActionsTable from '../../components/partials/CustomTable';
import Footer from '../../components/partials/Footer';

export default () => {

	const incomeTableContents = {
		head: ['メンティー名/メンター名', '商品名/委託名', '金額', 'ステータス', '日付'],
		body: [
			{ id: 1, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 2, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 3, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 4, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 5, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 6, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 7, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 8, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 9, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 10, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 11, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 12, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 13, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 14, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 15, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 16, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 17, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 18, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 19, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 20, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 21, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 22, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 23, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 24, name: '売上', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
		]
	};

	const expenseTableContents = {
		head: ['メンティー名/メンター名', '商品名/委託名', '金額', 'ステータス', '日付'],
		body: [
			{ id: 1, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 2, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 3, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 4, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 5, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 6, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 7, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 8, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 9, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 10, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 11, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 12, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 13, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 14, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 15, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 16, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 17, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 18, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 19, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 20, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 21, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 22, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 23, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
			{ id: 24, name: '支出', product_name: '売上テーブル', price: 20000, status: '振り込み済み', date: '2023年12月25日' },
		]
	};

	const tabContents = [
		{ id: 1, title: '売上', content: <CustomPaginationActionsTable data={incomeTableContents} /> },
		{ id: 2, title: '支出', content: <CustomPaginationActionsTable data={expenseTableContents} /> },
	];

	return (
		<section>
			<div className="bg-white px-16 pb-4">
				<div className="flex">
					<Heading title="売上" />
					<ContentCard title="今月売上" content="2000万" />
					<ContentCard title="今月支出" content="2000万" />
					<ContentCard title="前月利益比較" content="11%" />
				</div>
			</div>
			<div className="px-16">
				<BasicTabs data={tabContents} />
			</div>
			<div className="mt-16">
				<Footer />
			</div>
		</section>
	)
}