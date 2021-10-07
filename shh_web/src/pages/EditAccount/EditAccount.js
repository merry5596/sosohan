import React, { useEffect } from "react";
import MyPageSideBar from "../../MyPageSidebar";
import { useUser } from "../../components";

import EditAccountForm from "./components/EditAccountForm";

const sessionId = sessionStorage.getItem("sessionId");

const EditAccount = () => {
  const { userGet } = useUser();

  useEffect(() => {
    const fetch = async () => {
      try {
        await userGet(sessionId);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  return (
    <div className="EditAccount">
      <MyPageSideBar />
      <div className="mx-auto col-6">
        <h3>회원 정보 수정</h3>
        <EditAccountForm />
      </div>
    </div>
  );
};

export default EditAccount;