import React, { Component } from "react";
import SeatClassListContainer from "../modules/seat/containers/SeatClassListContainer";
import CustomBreadcrumb from "../common/components/widgets/CustomBreadcrumb";

export class SeatClassListPage extends Component {
  render() {
    return (
      <>
        <CustomBreadcrumb
          items={[
            { url: "/admin/dashboard", icon: "home", title: "Bảng điều khiển" },
            {
              url: "/admin/seat",
              icon: "credit-card",
              title: "Bảng điều khiển"
            }
          ]}
        ></CustomBreadcrumb>
        <SeatClassListContainer></SeatClassListContainer>
      </>
    );
  }
}

export default SeatClassListPage;