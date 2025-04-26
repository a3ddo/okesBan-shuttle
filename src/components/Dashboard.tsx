'use client'
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

  const pickupLocations = useMemo(() =>
    Array.from(new Set((surveyData || []).map(entry => entry.deptpickupLocation).filter(Boolean)))
    , [surveyData]);

  const departureDates = useMemo(() =>
    Array.from(new Set((surveyData || []).map(entry => entry.departureDate).filter(Boolean)))
    , [surveyData]);

  const filteredData = useMemo(() => {
    return (surveyData || []).filter((entry) => {
      return (
        (pickupFilter === "" || entry.deptpickupLocation === pickupFilter) &&
        (departureDateFilter === "" || entry.departureDate === departureDateFilter)
      );
    });
  }, [surveyData, pickupFilter, departureDateFilter]);

  const columns: GridColDef[] = [
    { field: '_id', headerName: 'ID', description: 'Unique record identifier', flex: 1 },
    { field: 'serviceType', headerName: 'Service Type', description: 'Type of service booked', flex: 1 },

    // Bus Rental Specific (hidden by default)
    { field: 'busrentalType', headerName: 'Bus Rental Type', description: 'Direct or backoffice booking', flex: 1, hideable: true },
    { field: 'busTripType', headerName: 'Bus Trip Type', description: 'Round trip or one-way for bus rental', flex: 1, hideable: true },
    {
      field: 'departureDateBus',
      headerName: 'Departure Date (Bus)',
      description: 'Date of bus departure',
      flex: 1,
      type: 'date',
      hideable: true,
      valueGetter: (params: any) => {
        const raw = params?.value as string | Date | undefined;
        return raw ? new Date(raw) : null;
      }
    },
    { field: 'departureTimeBus', headerName: 'Departure Time (Bus)', description: 'Time of bus departure', flex: 1, hideable: true },
    { field: 'deptdropoffLocationBus', headerName: 'Bus Departure Dropoff', description: 'Drop-off location for departure', flex: 1, hideable: true },
    {
      field: 'returnDateBus',
      headerName: 'Return Date (Bus)',
      description: 'Date of bus return',
      flex: 1,
      type: 'date',
      hideable: true,
      valueGetter: (params: any) => {
        const raw = params?.value as string | Date | undefined;
        return raw ? new Date(raw) : null;
      }
    },
    { field: 'returnTimeBus', headerName: 'Return Time (Bus)', description: 'Time of bus return', flex: 1, hideable: true },
    { field: 'retnpickupLocationBus', headerName: 'Return Pickup (Bus)', description: 'Pickup location on bus return', flex: 1, hideable: true },
    { field: 'retndropoffLocationBus', headerName: 'Return Dropoff (Bus)', description: 'Dropoff location on bus return', flex: 1, hideable: true },

    // Shuttle Specific (hidden by default)
    { field: 'shuttleType', headerName: 'Shuttle Type', description: 'Selected shuttle service', flex: 1, hideable: true },
    { field: 'shuttleTripType', headerName: 'Shuttle Trip Type', description: 'Round trip or one-way for shuttle', flex: 1, hideable: true },
    {
      field: 'departureDateShuttle',
      headerName: 'Departure Date (Shuttle)',
      description: 'Date of shuttle departure',
      flex: 1,
      type: 'date',
      hideable: true,
      valueGetter: (params: any) => {
        const raw = params?.value as string | Date | undefined;
        return raw ? new Date(raw) : null;
      }
    },
    { field: 'departureTimeShuttle', headerName: 'Departure Time (Shuttle)', description: 'Time of shuttle departure', flex: 1, hideable: true },
    { field: 'departureLuggageQty', headerName: 'Departure Luggage Qty', description: 'Number of luggage pieces on departure', flex: 1, type: 'number', hideable: true },
    {
      field: 'returnDateShuttle',
      headerName: 'Return Date (Shuttle)',
      description: 'Date of shuttle return',
      flex: 1,
      type: 'date',
      hideable: true,
      valueGetter: (params: any) => {
        const raw = params?.value as string | Date | undefined;
        return raw ? new Date(raw) : null;
      }
    },
    { field: 'returnTimeShuttle', headerName: 'Return Time (Shuttle)', description: 'Time of shuttle return', flex: 1, hideable: true },
    { field: 'returnLuggageQty', headerName: 'Return Luggage Qty', description: 'Number of luggage pieces on return', flex: 1, type: 'number', hideable: true },

    // Contact & Payment
    { field: 'firstName', headerName: 'First Name', description: 'Passenger first name', flex: 1 },
    { field: 'lastName', headerName: 'Last Name', description: 'Passenger last name', flex: 1 },
    { field: 'emailAddress', headerName: 'Email', description: 'Passenger email address', flex: 2 },
    { field: 'phoneNumber', headerName: 'Phone Number', description: 'Primary contact phone', flex: 1 },
    { field: 'alternatePhoneNumber', headerName: 'Alternate Phone', description: 'Alternate contact phone', flex: 1, hideable: true },
    { field: 'paymentMade', headerName: 'Payment Made', description: 'Whether payment has been completed', flex: 0.8, type: 'boolean', hideable: true },
    { field: 'paymentMethod', headerName: 'Payment Method', description: 'Method of payment used', flex: 1, hideable: true },
    { field: 'paymentID', headerName: 'Payment ID', description: 'Transaction reference code', flex: 1, hideable: true },

    // Metadata
    {
      field: 'timestamp',
      headerName: 'Submitted At',
      description: 'Record submission timestamp',
      flex: 1.5,
      type: 'dateTime',
      valueGetter: (params: any) => {
        const raw = params?.value as string | Date | undefined;
        return raw ? new Date(raw) : null;
      }
    },
  ];

  // --- Export Handlers ---

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
              {pickupLocations.map((location) => (
                <MenuItem key={location} value={location}>
                  {location}
                </MenuItem>
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
                <MenuItem key={date} value={date}>
                  {date}
                </MenuItem>
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
                  // Show only these 5 fields by default
                  _id: true,
                  serviceType: true,
                  emailAddress: true,
                  phoneNumber: true,
                  timestamp: true,

                  // Hide all other fields by default
                  busrentalType: false,
                  busTripType: false,
                  departureDateBus: false,
                  departureTimeBus: false,
                  deptdropoffLocationBus: false,
                  returnDateBus: false,
                  returnTimeBus: false,
                  retnpickupLocationBus: false,
                  retndropoffLocationBus: false,
                  shuttleType: false,
                  shuttleTripType: false,
                  departureDateShuttle: false,
                  departureTimeShuttle: false,
                  departureLuggageQty: false,
                  returnDateShuttle: false,
                  returnTimeShuttle: false,
                  returnLuggageQty: false,
                  firstName: false,
                  lastName: false,
                  alternatePhoneNumber: false,
                  paymentMade: false,
                  paymentMethod: false,
                  paymentID: false,
                },
              },
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