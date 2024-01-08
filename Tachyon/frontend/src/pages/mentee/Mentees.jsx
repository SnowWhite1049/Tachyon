import React, { useState, useEffect } from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import CustomPaginationActionsTable from '../../components/partials/CustomTable';
import AddButton from '../../components/partials/AddButton';
import EditButton from '../../components/partials/EditButton';
import Footer from '../../components/partials/Footer';
import { fetchAllMentees } from "../../utils/actions";

export default () => {

  const [menteeTableBody, setMenteeTableBody] = useState([]);

  useEffect(() => {
    fetchAllMentees()
      .then(res => {
        var mentees = [];
        res.map((user) => {
          var temp = {
            id: user.id,
            user_name: user.last_name + user.first_name,
            plan_name: user.plan.name,
            interview_ticket_number: user.user_tickets[0].interview_ticket_number,
            event_ticket_number: user.user_tickets[0].event_ticket_number,
            es_ticket_number: user.user_tickets[0].es_ticket_number,
            case_ticket_number: user.user_tickets[0].case_ticket_number,
            short_interview_ticket_number: user.user_tickets[0].short_interview_ticket_number,
            mentor_name: user.mentor.user_name,
            edit_button: <EditButton id={user.id} />,
          }
          mentees.push(temp);
        });
        
        setMenteeTableBody(mentees);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const menteeTableContents = {
    head: ['メンティー名', 'プラン名', '残り面談チケット', '残りイベントチケット', '残りESチケット', '残りケースチケット', '残り専属チケット', '専属メンター'],
    body: menteeTableBody
  };

  return (
    <section>
      <div className="bg-white px-16 pb-4">
        <Heading title="メンティー" />
        <div className="flex flex-wrap justify-end">
          <AddButton />
        </div>
      </div>
      <div className="px-16 mt-16">
        <CustomPaginationActionsTable data={menteeTableContents} />
      </div>
      <div className="mt-16">
				<Footer />
			</div>
    </section>
  )
}