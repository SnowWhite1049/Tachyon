import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import CustomPaginationActionsTable from '../../components/partials/CustomTable';
import AddButton from '../../components/partials/AddButton';
import EditButton from '../../components/partials/EditButton';
import Footer from '../../components/partials/Footer';
import { fetchAllMentors } from "../../utils/actions";

export default () => {

  const [mentorTableBody, setMentorTableBody] = useState([]);

  useEffect(() => {
    fetchAllMentors()
      .then(res => {
        console.log('this is a response', res);
        setMentorTableBody(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const mentorTableContents = {
    head: ['メンター名', '今月給与', '今月専属人数', '今月面談数', '今月面談作成', '今月面談実施'],
    body: mentorTableBody
  };

  return (
    <section>
      <div className="bg-white px-16 pb-4">
        <Heading title="メンター" />
        <div className="flex flex-wrap justify-end">
          <AddButton />
        </div>
      </div>
      <div className="px-16 mt-16">
        <CustomPaginationActionsTable data={mentorTableContents} />
      </div>
      <div className="mt-16">
				<Footer />
			</div>
    </section>
  )
}