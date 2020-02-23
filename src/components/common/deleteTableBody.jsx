import React from "react";

const DeleteTableBody = ({ referral }) => {
  return referral.map(referral => {
    const {
      id,
      state,
      line,
      company,
      referralCode,
      referralReason,
      status
    } = referral; //destructuring
    return (
      <tbody key={id}>
        <tr key={id}>
          <td>{state}</td>
          <td>{line}</td>
          <td>{company}</td>
          <td>{referralCode}</td>
          <td>{referralReason}</td>
          <td>{status}</td>
        </tr>
      </tbody>
    );
  });
};

export default DeleteTableBody;
