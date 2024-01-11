import PropTypes from 'prop-types';
import ComputerDesktopIcon from '@heroicons/react/24/solid/ComputerDesktopIcon';
import DeviceTabletIcon from '@heroicons/react/24/solid/DeviceTabletIcon';
import PhoneIcon from '@heroicons/react/24/solid/PhoneIcon';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import PendingIcon from '@mui/icons-material/Pending';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import PanToolIcon from '@mui/icons-material/PanTool';
import CircleIcon from '@mui/icons-material/Circle';



import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  SvgIcon,
  Typography,
  useTheme
} from '@mui/material';
import { Chart } from 'src/components/chart';

const useChartOptions = (labels , colors) => {
  const theme = useTheme();

  return {
    chart: {
      background: 'transparent'
    },
    colors /* : [
      theme.palette.primary.main,
      theme.palette.success.main,
      theme.palette.warning.main
    ] */,
    dataLabels: {
      enabled: false
    },
    labels,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },
    states: {
      active: {
        filter: {
          type: 'none'
        }
      },
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    stroke: {
      width: 0
    },
    theme: {
      mode: theme.palette.mode
    },
    tooltip: {
      fillSeriesColor: false
    }
  };
};

const iconMap = {
  Desktop: (
    <SvgIcon>
      <ComputerDesktopIcon />
    </SvgIcon>
  ),
  Tablet: (
    <SvgIcon>
      <DeviceTabletIcon />
    </SvgIcon>
  ),
  Phone: (
    <SvgIcon color="primary">
      <PhoneIcon />
    </SvgIcon>
  ),
  Progress: (
    <SvgIcon color="primary">
      <PendingIcon />
    </SvgIcon>
  ),
  Completed: (
    <SvgIcon color="success">
      <CheckCircleIcon />
    </SvgIcon>
  ),
  Waiting: (
    <SvgIcon color="warning">
      <PanToolIcon />
    </SvgIcon>
  ),
  Normal: (
    <SvgIcon color="success">
      <CircleIcon />
    </SvgIcon>
  ),
  High: (
    <SvgIcon color="warning">
      <CircleIcon />
    </SvgIcon>
  ),
  Hyper: (
    <SvgIcon color="error">
      <CircleIcon />
    </SvgIcon>
  ),

};

export const OverviewAppointmentPie = (props) => {
  const { chartSeries, labels, sx , title , colors} = props;
  const chartOptions = useChartOptions(labels , colors);

  return (
    <Card sx={sx}>
      <CardHeader title={title} />
      <CardContent>
        <Chart
          height={300}
          options={chartOptions}
          series={chartSeries}
          colors={colors}
          type="donut"
          width="100%"
        />
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{ mt: 2 }}
        >
          {chartSeries.map((item, index) => {
            const label = labels[index];

            return (
              <Box
                key={label}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                {iconMap[label]}
                <Typography
                  sx={{ my: 1 }}
                  variant="h6"
                >
                  {label}
                </Typography>
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                >
                  {item}%
                </Typography>
              </Box>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
};

OverviewAppointmentPie.propTypes = {
  chartSeries: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  sx: PropTypes.object
};
