import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "ID",
    disableFilters: true,
  },
  {
    Header: "First Name",
    accessor: "first_name",
    Footer: "First Name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
    Footer: "Last Name",
  },
  {
    Header: "Date of Work",
    accessor: "date_of_work",
    Footer: "Date of Work",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },

  {
    Header: "Country",
    accessor: "country",
    Footer: "Country",
  },
  {
    Header: "Phone",
    accessor: "phone",
    Footer: "Phone",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "ID",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        accessor: "first_name",
        Footer: "First Name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
        Footer: "Last Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of Work",
        accessor: "date_of_work",
        Footer: "Date of Work",
      },
      {
        Header: "Country",
        accessor: "country",
        Footer: "Country",
      },
      {
        Header: "Phone",
        accessor: "phone",
        Footer: "Phone",
      },
    ],
  },
];
