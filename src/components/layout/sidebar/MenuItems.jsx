
import { TwoWheelerTwoTone, CarRentalOutlined, MapOutlined } from '@mui/icons-material'
import { uniqueId } from "lodash";

const Menuitems = [
    {
        navlabel: true,
        subheader: "Maps",
    },
    {
        id: uniqueId(),
        title: "Map Controll",
        icon: MapOutlined,
        href: "/",
    },
    {
        id: uniqueId(),
        title: "Driver Motobike",
        icon: TwoWheelerTwoTone,
        href: "/motobike",
    },
    {
        id: uniqueId(),
        title: "Driver Car",
        icon: CarRentalOutlined,
        href: "/car",
    },
];

export default Menuitems;
