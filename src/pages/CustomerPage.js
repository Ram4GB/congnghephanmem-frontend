import React, { Component } from "react";
import CustomerListContainer from "../modules/user/containers/CustomerListContainer";
import CustomBreadcrumb from "../common/components/widgets/CustomBreadcrumb";

export class CustomerPage extends Component {
  render() {
    return (
      <>
        <CustomBreadcrumb
          items={[
            { url: "/admin/dashboard", icon: "home", title: "Bảng điều khiển" },
            { url: "/admin/customer", icon: "user", title: "Khách hàng" }
          ]}
        />
        <CustomerListContainer></CustomerListContainer>
      </>
    );
  }
}

export default CustomerPage;
