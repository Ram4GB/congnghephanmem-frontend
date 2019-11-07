import React, { Component } from "react";
import { Card, Table, Input, Button, Tag, Avatar, Row, Col } from "antd";
import Column from "antd/lib/table/Column";
import { catchErrorAndNotification } from "../../../common/utils/Notification";
import modal from "../../../common/components/widgets/Modal";
import AirPlaneFormAdd from "./Form/AirPlaneFormAdd";

export class AirplaneListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      total: 0,
      params: {}
    };
    this.getData = this.getData.bind(this);
    this.handleChangeTable = this.handleChangeTable.bind(this);
    this.handleShowFormAddAirplane = this.handleShowFormAddAirplane.bind(this);
  }
  handleShowFormAddAirplane() {
    // this.props.history.push("/admin/airplane/create");
    modal.show(<AirPlaneFormAdd getData={this.getData}></AirPlaneFormAdd>, {
      title: "Thêm hãng hàng không",
      style: { top: 20 },
      width: "60%"
    });
  }
  async getData(input = 1) {
    let next = input || this.state.page;
    let result = await this.props.getListAirPlane(next, this.state.params);
    if (result && result.success === true) {
      this.setState({
        total: result.totalRecord,
        page: next
      });
    } else catchErrorAndNotification(result.error);
  }
  componentDidMount() {
    this.getData();
  }
  handleChangeTable(pagination) {
    this.getData(pagination.current);
  }
  render() {
    const { airlines } = this.props;
    const { page, total } = this.state;
    return (
      <Card>
        <div style={{ overflow: "hidden", marginBottom: 5 }}>
          <Input.Search
            placeholder="Tìm tên máy bay"
            style={{ float: "left", width: 200, marginRight: 15 }}
          />
          <Button
            icon="plus"
            type="primary"
            style={{ float: "right", marginLeft: 15 }}
            onClick={this.handleShowFormAddAirplane}
          >
            Thêm máy bay
          </Button>
          <Button
            icon="filter"
            type="primary"
            style={{ float: "right", marginLeft: 5 }}
          >
            Tìm kiếm nâng cao
          </Button>
        </div>
        <Table
          onChange={this.handleChangeTable}
          pagination={{
            total,
            current: page,
            size: "small"
          }}
          rowKey={e => e.id}
          dataSource={airlines}
        >
          <Column
            title="Tên công ty"
            key="name"
            render={record => {
              return (
                <>
                  <Row
                    onClick={() =>
                      this.props.history.push(`/admin/airplane/${record.id}`)
                    }
                    className="table-name"
                  >
                    <Col lg={12}>
                      <Avatar
                        style={{ borderRadius: 5, marginRight: 5 }}
                        src=""
                      />
                    </Col>
                    <Col lg={12}>{record.name}</Col>
                  </Row>
                </>
              );
            }}
          ></Column>
          <Column
            title="Tên viết tắt"
            dataIndex="short_name"
            key="short_name"
            align="center"
            render={value => {
              return <Tag color="#1890FF">{value}</Tag>;
            }}
          ></Column>
          <Column
            title="Website"
            dataIndex="website"
            key="website"
            align="center"
          ></Column>
          <Column
            title="Liên lạc"
            dataIndex="contact_info"
            key="contact_info"
            align="center"
          ></Column>
          <Column
            title="Mô tả"
            dataIndex="description"
            key="description"
            align="center"
            render={value => {
              return <p dangerouslySetInnerHTML={{ __html: value }}></p>;
            }}
          ></Column>
          <Column
            title="Thao tác"
            render={record => {
              return (
                <>
                  <Button
                    onClick={() => {
                      this.props.history.push(`/admin/airplane/${record.id}`);
                    }}
                    type="primary"
                    icon="info-circle"
                    key="infoButton"
                  >
                    Chi tiết
                  </Button>
                  &nbsp;
                  <Button
                    onClick={() => {
                      this.props.history.push(
                        `/admin/airplane/${record.id}/edit`
                      );
                    }}
                    type="primary"
                    icon="edit"
                    key="editButton"
                  >
                    Sửa
                  </Button>
                  &nbsp;
                  <Button type="danger" icon="delete" key="deleteButton">
                    Xoá
                  </Button>
                </>
              );
            }}
            key="button"
            align="right"
            width="30%"
          ></Column>
        </Table>
      </Card>
    );
  }
}

export default AirplaneListComponent;
