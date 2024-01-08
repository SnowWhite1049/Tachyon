import React from "react";
import '../../assets/scss/auth/login.scss';
import Heading from "../../components/partials/Heading";
import EditMentee from "../../features/mentee/EditMentee";
import Footer from '../../components/partials/Footer';

export default () => {
  return (
    <section>
      <div className="bg-white px-16 pb-4" style={{ height: '50px' }}>
        <Heading title="メンティー編集" />
      </div>

      <div className="px-16 mt-16">
        <EditMentee />
      </div>

      <div className="mt-16">
				<Footer />
			</div>
    </section>
  )
}