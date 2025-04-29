'use client';

import React, { useEffect, useMemo, useState } from "react";
import {
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import {
  Box,
  MenuItem,
  Select,
  Typography,
  InputLabel,
  FormControl,
  CircularProgress,
  Button,
} from "@mui/material";
import * as XLSX from "xlsx";

const SurveyTable = () => {
  const [surveyData, setSurveyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pickupFilter, setPickupFilter] = useState("");
  const [departureDateFilter, setDepartureDateFilter] = useState("");

  useEffect(() => {
    const fetchSurveyData = async () => {
      try {
        const res = await fetch("/api/service");
        const data = await res.json();
        setSurveyData(data);
      } catch (err) {
        console.error("Error fetching survey data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSurveyData();
  }, []);

  const dateValueGetter = (params: any) => {
    const raw = params?.value as string | Date | undefined;
    return raw ? new Date(raw) : null;
  };

  const pickupLocations = useMemo(() =>
    Array.from(new Set((surveyData || []).map(entry => entry.deptpickupLocation).filter(Boolean)))
    , [surveyData]);

  const departureDates = useMemo(() =>
    Array.from(new Set((surveyData || []).map(entry => entry.departureDate).filter(Boolean)))
    , [surveyData]);

  const filteredData = useMemo(() =>
    (surveyData || []).filter((entry) =>
      (pickupFilter === "" || entry.deptpickupLocation === pickupFilter) &&
      (departureDateFilter === "" || entry.departureDate === departureDateFilter)
    )
    , [surveyData, pickupFilter, departureDateFilter]);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'serviceType', headerName: 'Service Type', flex: 1 },
    { field: 'firstName', headerName: 'First Name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', flex: 1 },
    { field: 'emailAddress', headerName: 'Email', flex: 1.5 },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1 },

    // Hidden fields by default
    { field: 'busrentalType', headerName: 'Bus Booking Type', flex: 1, hideable: true },
    { field: 'busTripType', headerName: 'Bus Trip Type', flex: 1, hideable: true },
    {
      field: 'departureDateBus', headerName: 'Bus Departure Date', type: 'date', flex: 1, hideable: true,
      valueGetter: dateValueGetter
    },
    { field: 'departureTimeBus', headerName: 'Bus Departure Time', flex: 1, hideable: true },
    { field: 'deptpickupLocationBus', headerName: 'Bus Pickup Location', flex: 1, hideable: true },
    { field: 'deptdropoffLocationBus', headerName: 'Bus Drop-off Location', flex: 1, hideable: true },
    {
      field: 'returnDateBus', headerName: 'Bus Return Date', type: 'date', flex: 1, hideable: true,
      valueGetter: dateValueGetter
    },
    { field: 'returnTimeBus', headerName: 'Bus Return Time', flex: 1, hideable: true },
    { field: 'retnpickupLocationBus', headerName: 'Bus Return Pickup', flex: 1, hideable: true },
    { field: 'retndropoffLocationBus', headerName: 'Bus Return Dropoff', flex: 1, hideable: true },

    { field: 'shuttleType', headerName: 'Shuttle Type', flex: 1, hideable: true },
    { field: 'shuttleTripType', headerName: 'Shuttle Trip Type', flex: 1, hideable: true },
    {
      field: 'departureDateShuttle', headerName: 'Shuttle Departure Date', type: 'date', flex: 1, hideable: true,
      valueGetter: dateValueGetter
    },
    { field: 'departureTimeShuttle', headerName: 'Shuttle Departure Time', flex: 1, hideable: true },
    { field: 'deptpickupShuttle1', headerName: 'Shuttle Pickup', flex: 1, hideable: true },
    { field: 'deptdropoffShuttle1', headerName: 'Shuttle Dropoff', flex: 1, hideable: true },
    { field: 'departureLuggageQty', headerName: 'Luggage Qty (Depart)', flex: 1, type: 'number', hideable: true },
    {
      field: 'returnDateShuttle', headerName: 'Shuttle Return Date', type: 'date', flex: 1, hideable: true,
      valueGetter: dateValueGetter
    },
    { field: 'returnTimeShuttle', headerName: 'Shuttle Return Time', flex: 1, hideable: true },
    { field: 'retnpickupShuttle1', headerName: 'Return Shuttle Pickup', flex: 1, hideable: true },
    { field: 'retndropoffShuttle1', headerName: 'Return Shuttle Dropoff', flex: 1, hideable: true },
    { field: 'returnLuggageQty', headerName: 'Luggage Qty (Return)', flex: 1, type: 'number', hideable: true },

    {
      field: 'departureDateShuttleOW', headerName: 'One-Way Shuttle Date', type: 'date', flex: 1, hideable: true,
      valueGetter: dateValueGetter
    },
    { field: 'departureTimeShuttleOW', headerName: 'One-Way Shuttle Time', flex: 1, hideable: true },
    { field: 'owdeptpickupShuttle1', headerName: 'One-Way Shuttle Pickup', flex: 1, hideable: true },
    { field: 'owdeptdropoffShuttle1', headerName: 'One-Way Shuttle Dropoff', flex: 1, hideable: true },
    { field: 'owdepartureLuggageQty', headerName: 'Luggage Qty (OW)', type: 'number', flex: 1, hideable: true },

    { field: 'alternatePhoneNumber', headerName: 'Alternate Phone', flex: 1, hideable: true },
    { field: 'paymentMade', headerName: 'Paid?', flex: 1, type: 'boolean', hideable: true },
    { field: 'paymentMethod', headerName: 'Payment Method', flex: 1, hideable: true },
    { field: 'paymentID', headerName: 'Payment Ref', flex: 1, hideable: true },
    {
      field: 'timestamp', headerName: 'Submitted At', type: 'dateTime', flex: 1.5,
      valueGetter: dateValueGetter
    }
  ];

  const exportToCSV = () => {
    const headers = columns.map(col => col.headerName).join(",");
    const rows = filteredData.map(row =>
      columns.map(col => `"${row[col.field] ?? ""}"`).join(",")
    );
    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "survey_data.csv";
    link.click();
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(filteredData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SurveyData");
    XLSX.writeFile(wb, "survey_data.xlsx");
  };

  return (
    <Box>
      <div className="px-24">
        <Typography variant="h5" gutterBottom>
          Survey Submissions
        </Typography>

        <Box display="flex" gap={2} mb={2}>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="pickup-label">Pickup Location</InputLabel>
            <Select
              labelId="pickup-label"
              value={pickupFilter}
              label="Pickup Location"
              onChange={(e) => setPickupFilter(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              {pickupLocations.map((loc) => (
                <MenuItem key={loc} value={loc}>{loc}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="departure-date-label">Departure Date</InputLabel>
            <Select
              labelId="departure-date-label"
              value={departureDateFilter}
              label="Departure Date"
              onChange={(e) => setDepartureDateFilter(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              {departureDates.map((date) => (
                <MenuItem key={date} value={date}>{date}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box display="flex" alignItems="center" gap={2}>
            <Button variant="outlined" onClick={exportToCSV}>
              Export CSV
            </Button>
            <Button variant="outlined" onClick={exportToExcel}>
              Export Excel
            </Button>
          </Box>
        </Box>

        {loading ? (
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={filteredData.map((row, index) => ({ id: index, ...row }))}
            columns={columns}
            pageSizeOptions={[5, 10, 25]}
            autoHeight
            disableRowSelectionOnClick
            initialState={{
              sorting: {
                sortModel: [{ field: "timestamp", sort: "desc" }],
              },
              columns: {
                columnVisibilityModel: {
                  firstName: true,
                  lastName: true,
                  serviceType: true,
                  emailAddress: true,
                  phoneNumber: true,
                  _id: false,
                  busrentalType: false,
                  busTripType: false,
                  departureDateBus: false,
                  departureTimeBus: false,
                  deptpickupLocationBus: false,
                  deptdropoffLocationBus: false,
                  returnDateBus: false,
                  returnTimeBus: false,
                  retnpickupLocationBus: false,
                  retndropoffLocationBus: false,
                  shuttleType: false,
                  shuttleTripType: false,
                  departureDateShuttle: false,
                  departureTimeShuttle: false,
                  deptpickupShuttle1: false,
                  deptdropoffShuttle1: false,
                  departureLuggageQty: false,
                  returnDateShuttle: false,
                  returnTimeShuttle: false,
                  retnpickupShuttle1: false,
                  retndropoffShuttle1: false,
                  returnLuggageQty: false,
                  departureDateShuttleOW: false,
                  departureTimeShuttleOW: false,
                  owdeptpickupShuttle1: false,
                  owdeptdropoffShuttle1: false,
                  owdepartureLuggageQty: false,
                  alternatePhoneNumber: false,
                  paymentMade: false,
                  paymentMethod: false,
                  paymentID: false,
                  timestamp: false
                }
              }
            }}
            slots={{ toolbar: GridToolbarContainer }}
            slotProps={{
              toolbar: {
                children: <GridToolbarFilterButton />,
              },
            }}
          />
        )}
      </div>
    </Box>
  );
};

export default SurveyTable;
