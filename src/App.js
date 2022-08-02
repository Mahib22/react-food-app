import React, { Component } from "react";
import FormComponent from "./FormComponent";
import NavbarComponent from "./NavbarComponent";
import TableComponent from "./TableComponent";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanans: [],
      nama_makanan: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id === "") {
      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length + 1,
            nama_makanan: this.state.nama_makanan,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const makananTidakDipilih = this.state.makanans
        .filter((makanan) => makanan.id !== this.state.id)
        .map((filterMakanan) => {
          return filterMakanan;
        });

      this.setState({
        makanans: [
          ...makananTidakDipilih,
          {
            id: this.state.makanans.length + 1,
            nama_makanan: this.state.nama_makanan,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      nama_makanan: "",
      harga: 0,
      id: "",
    });
  };

  editData = (id) => {
    const makananDipilih = this.state.makanans
      .filter((makanan) => makanan.id === id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      nama_makanan: makananDipilih[0].nama_makanan,
      harga: makananDipilih[0].harga,
      id: makananDipilih[0].id,
    });
  };

  hapusData = (id) => {
    const makananBaru = this.state.makanans
      .filter((makanan) => makanan.id !== id)
      .map((filterMakanan) => {
        return filterMakanan;
      });

    this.setState({
      makanans: makananBaru,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-5">
          <FormComponent
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <TableComponent
            makanans={this.state.makanans}
            editData={this.editData}
            hapusData={this.hapusData}
          />
        </div>
      </div>
    );
  }
}
